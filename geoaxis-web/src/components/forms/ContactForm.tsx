"use client";

import { useActionState, useEffect, useRef } from "react";
import clsx from "clsx";
import { CtaButton } from "@/components/parts/CtaButton";

type ContactFormState = {
  error: string | null;
  success: boolean;
};

async function contactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let data: { error?: string; success?: boolean } | null = null;

    try {
      data = await res.json();
    } catch {
      return {
        error: "Сървърът върна невалиден отговор.",
        success: false,
      };
    }

    if (!res.ok) {
      return {
        error: data?.error || "Грешка при изпращане. Опитайте отново.",
        success: false,
      };
    }

    return { error: null, success: true };
  } catch {
    return {
      error: "Грешка при изпращане. Опитайте отново.",
      success: false,
    };
  }
}

function FloatingInput({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required={required}
        placeholder=" "
        className={clsx(
          "peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-6 pb-2",
          "text-white placeholder-transparent backdrop-blur-md",
          "transition-all duration-200",
          "focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
        )}
      />
      <label
        className={clsx(
          "pointer-events-none absolute top-1/2 left-4 -translate-y-1/2",
          "text-base text-white/50 transition-all duration-200",
          "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-accent",
          "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0",
          "peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-accent"
        )}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name }: { label: string; name: string }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        required
        rows={4}
        placeholder=" "
        className={clsx(
          "peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 pt-6 pb-2",
          "text-white placeholder-transparent backdrop-blur-md",
          "transition-all duration-200",
          "focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
        )}
      />
      <label
        className={clsx(
          "pointer-events-none absolute top-5 left-4 -translate-y-1/2",
          "text-base text-white/50 transition-all duration-200",
          "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-accent",
          "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0",
          "peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-accent"
        )}
      >
        {label}
      </label>
    </div>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(contactAction, {
    error: null,
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/8 bg-white/4 p-12 shadow-2xl backdrop-blur-2xl"
      )}
    >
      <h3 className="typo-h3 mb-8 text-tx-inverse">Изпратете запитване</h3>

      <form ref={formRef} action={formAction} className="space-y-6">
        <FloatingInput name="name" label="Вашето име" />
        <FloatingInput name="email" label="Имейл адрес" type="email" />
        <FloatingTextarea name="message" label="Вашето съобщение" />

        <CtaButton
          type="submit"
          size="lg"
          variant="glassAccent"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Изпращане..." : "Изпрати съобщение"}
        </CtaButton>

        {state.success && (
          <p className="text-sm text-green-400">
            Успешно изпратено! Ще се свържем с вас.
          </p>
        )}

        {state.error && <p className="text-sm text-red-400">{state.error}</p>}
      </form>
    </div>
  );
}
