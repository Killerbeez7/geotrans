import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { Content } from "@/config/ContentConfig";

function ContactItem({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-(--accent-soft) text-(--color-accent) text-lg border border-(--color-border-default)">
                {icon}
            </div>

            <div>
                <h4 className="text-lg font-semibold text-(--tx-inverse)">
                    {title}
                </h4>
                <p className="mt-1 text-white/80 leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
}

function FloatingInput({
    label,
    type = "text",
}: {
    label: string;
    type?: string;
}) {
    return (
        <div className="relative">
            <input
                type={type}
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-xl
                bg-white border border-(--color-border-default)
                text-(--tx-primary) placeholder-transparent
                focus:outline-none focus:border-(--color-accent)
                focus:ring-2 focus:ring-(--color-accent)/20
                transition-all duration-200"
            />
            <label
                className="absolute left-4 top-1/2 -translate-y-1/2
                text-(--tx-muted) text-base transition-all duration-200
                peer-focus:text-(--color-accent)
                peer-focus:text-sm peer-focus:top-2 peer-focus:translate-y-0
                peer-not-placeholder-shown:text-(--color-accent)
                peer-not-placeholder-shown:text-sm
                peer-not-placeholder-shown:top-2
                peer-not-placeholder-shown:translate-y-0
                pointer-events-none"
            >
                {label}
            </label>
        </div>
    );
}

function FloatingTextarea({ label }: { label: string }) {
    return (
        <div className="relative">
            <textarea
                required
                rows={4}
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-xl
                bg-white border border-(--color-border-default)
                text-(--tx-primary) placeholder-transparent resize-none
                focus:outline-none focus:border-(--color-accent)
                focus:ring-2 focus:ring-(--color-accent)/20
                transition-all duration-200"
            />
            <label
                className="absolute left-4 top-5 -translate-y-1/2
                text-(--tx-muted) text-base transition-all duration-200
                peer-focus:text-(--color-accent)
                peer-focus:text-sm peer-focus:top-2 peer-focus:translate-y-0
                peer-not-placeholder-shown:text-(--color-accent)
                peer-not-placeholder-shown:text-sm
                peer-not-placeholder-shown:top-2
                peer-not-placeholder-shown:translate-y-0
                pointer-events-none"
            >
                {label}
            </label>
        </div>
    );
}

export default function Contacts() {
    const title = Content.contacts.title;
    const description = Content.contacts.description;

    const phone = Content.contacts.phone;
    const email = Content.contacts.email;
    const address = Content.contacts.address
        .split("||")
        .map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));

    return (
        <section className="relative isolate min-h-screen pt-28 pb-28 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/images/contacts-bg.webp)",
                }}
            />

            {/* Brand Overlay */}
            <div className="absolute inset-0 -z-10 bg-[rgba(63,76,69,0.85)]" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid items-start gap-20 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <ContactItem icon={<FaPhone />} title="Телефон" text={phone} />
                        <ContactItem icon={<FaEnvelope />} title="Имейл" text={email} />
                        <ContactItem icon={<FaHome />} title="Адрес" text={address} />
                    </div>

                    {/* Form */}
                    <div className="rounded-2xl bg-(--bg-surface) p-10 shadow-2xl border border-(--color-border-default)">
                        <h3 className="mb-8 text-2xl font-semibold text-(--tx-primary)">
                            Изпратете запитване
                        </h3>

                        <form className="space-y-6">
                            <FloatingInput label="Вашето име" />
                            <FloatingInput label="Имейл адрес" type="email" />
                            <FloatingTextarea label="Вашето съобщение" />

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-(--color-btn-primary)
                                px-6 py-3 text-lg font-semibold text-white
                                shadow-md
                                hover:bg-(--color-btn-primary-hover)
                                transition-all duration-200"
                            >
                                Изпрати съобщение
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
