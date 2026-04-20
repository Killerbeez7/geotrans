import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey)
      return NextResponse.json({ error: "RESEND_API_KEY is not set" }, { status: 500 });
    if (!toEmail)
      return NextResponse.json({ error: "CONTACT_EMAIL is not set" }, { status: 500 });

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const location = formData.get("location") as string;
    const preferredContact = formData.get("preferredContact") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("files") as File[];

    if (!name || !message)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    // Validate files
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE)
        return NextResponse.json(
          { error: `Файлът "${file.name}" надвишава 10MB.` },
          { status: 400 }
        );
      if (!ALLOWED_TYPES.includes(file.type))
        return NextResponse.json(
          {
            error: `Невалиден тип файл: "${file.name}". Позволени: JPG, PNG, WebP, PDF.`,
          },
          { status: 400 }
        );
    }

    // Convert files to base64 for Resend
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = await file.arrayBuffer();
        return {
          filename: file.name,
          content: Buffer.from(buffer).toString("base64"),
        };
      })
    );

    const serviceMap: Record<string, string> = {
      survey: "Геодезическо заснемане",
      layout: "Трасиране",
      cadastre: "Кадастър",
      regulation: "Регулация / ПУП",
      consultation: "Консултация",
      other: "Друго",
    };

    const contactMap: Record<string, string> = {
      phone: "По телефон",
      email: "По имейл",
      either: "Без предпочитание",
    };

    const resend = new Resend(resendApiKey);

    const result = await resend.emails.send({
      from: "GeoAxis <onboarding@resend.dev>",
      to: toEmail,
      subject: `Ново запитване от ${escapeHtml(name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2a3a33; border-bottom: 2px solid #c79d32; padding-bottom: 8px;">
            Ново запитване от GeoAxis
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 160px;">Име:</td>
              <td style="padding: 8px 0; font-weight: bold;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Имейл:</td>
              <td style="padding: 8px 0;">${escapeHtml(email || "—")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Телефон:</td>
              <td style="padding: 8px 0;">${escapeHtml(phone || "—")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Услуга:</td>
              <td style="padding: 8px 0;">${escapeHtml(serviceMap[service] || service || "—")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Населено място:</td>
              <td style="padding: 8px 0;">${escapeHtml(location || "—")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Предпочитан контакт:</td>
              <td style="padding: 8px 0;">${escapeHtml(contactMap[preferredContact] || "—")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Прикачени файлове:</td>
              <td style="padding: 8px 0;">${files.length > 0 ? files.map((f) => escapeHtml(f.name)).join(", ") : "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #f4f5f2; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 8px;">Съобщение:</p>
            <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Email failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/contact" });
}
