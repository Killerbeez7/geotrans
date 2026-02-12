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
        <div className="flex items-start gap-6 group">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-(--green-800) border border-(--color-border-strong) text-(--color-accent) text-lg transition group-hover:bg-(--green-700)">
                {icon}
            </div>

            <div>
                <h4 className="text-lg font-semibold text-white tracking-wide">
                    {title}
                </h4>
                <p className="mt-1 text-white/70 leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm uppercase tracking-wide text-white/60">
                {label}
            </label>
            <input
                type={type}
                required
                className="w-full px-4 py-3 rounded-md
                bg-(--green-800)
                border border-(--color-border-strong)
                text-white
                focus:outline-none
                focus:border-(--color-accent)
                focus:ring-1 focus:ring-(--color-accent)
                transition-all duration-200"
            />
        </div>
    );
}

function Textarea({ label }: { label: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm uppercase tracking-wide text-white/60">
                {label}
            </label>
            <textarea
                rows={4}
                required
                className="w-full px-4 py-3 rounded-md
                bg-(--green-800)
                border border-(--color-border-strong)
                text-white resize-none
                focus:outline-none
                focus:border-(--color-accent)
                focus:ring-1 focus:ring-(--color-accent)
                transition-all duration-200"
            />
        </div>
    );
}

export default function Contacts() {
    const { title, description, phone, email, address } = Content.contacts;

    const formattedAddress = address
        .split("||")
        .map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));

    return (
        <section className="relative min-h-screen pt-28 pb-28 overflow-hidden bg-(--green-700)">
            {/* Subtle background image */}
            <div
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/contacts-bg.webp)" }}
            />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="mb-24 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white">
                        {title}
                    </h2>

                    <div className="mt-6 h-1 w-20 bg-(--color-accent) mx-auto" />

                    <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid gap-20 lg:grid-cols-2">
                    {/* LEFT SIDE */}
                    <div className="space-y-14">
                        <ContactItem icon={<FaPhone />} title="Телефон" text={phone} />
                        <ContactItem icon={<FaEnvelope />} title="Имейл" text={email} />
                        <ContactItem icon={<FaHome />} title="Адрес" text={formattedAddress} />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-(--green-800) p-12 rounded-xl border border-(--color-border-strong)">
                        <h3 className="text-2xl font-semibold text-white mb-10">
                            Изпратете запитване
                        </h3>

                        <form className="space-y-8">
                            <Input label="Вашето име" />
                            <Input label="Имейл адрес" type="email" />
                            <Textarea label="Вашето съобщение" />

                            <button
                                type="submit"
                                className="w-full mt-4 px-6 py-4
                                bg-(--color-accent)
                                text-(--gray-900)
                                font-semibold
                                rounded-md
                                hover:bg-(--color-accent-hover)
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
