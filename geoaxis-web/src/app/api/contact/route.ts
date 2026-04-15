import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY is not set" }, { status: 500 });
    }

    if (!toEmail) {
      return NextResponse.json({ error: "CONTACT_EMAIL is not set" }, { status: 500 });
    }

    const { name, email, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(resendApiKey);

    const result = await resend.emails.send({
      from: "GeoAxis <onboarding@resend.dev>",
      to: toEmail,
      subject: "Ново запитване от GeoAxis",
      html: `
        <h2>Ново запитване</h2>
        <p><b>Име:</b> ${escapeHtml(String(name))}</p>
        <p><b>Имейл:</b> ${escapeHtml(String(email || "—"))}</p>
        <p><b>Съобщение:</b></p>
        <p>${escapeHtml(String(message))}</p>
      `,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email failed";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/contact" });
}

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
