import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { Content } from "@/config/ContentConfig";
import { CtaButton } from "@/components/parts/CtaButton";

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
            <div
                className="
                flex h-14 w-14 shrink-0 items-center justify-center
                rounded-2xl
                bg-white/5
                backdrop-blur-md
                border border-white/10
                text-(--color-accent)
                text-lg
                transition
                group-hover:bg-(--color-accent)/10
                group-hover:scale-105
            "
            >
                {icon}
            </div>

            <div>
                <h4 className="text-lg font-semibold text-white">{title}</h4>
                <p className="mt-1 text-white/70 leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function FloatingInput({ label, type = "text" }: { label: string; type?: string }) {
    return (
        <div className="relative">
            <input
                type={type}
                required
                placeholder=" "
                className="
                peer w-full px-4 pt-6 pb-2 rounded-xl
                bg-white/5
                border border-white/10
                text-white placeholder-transparent
                backdrop-blur-md
                focus:outline-none
                focus:border-(--color-accent)
                focus:ring-2 focus:ring-(--color-accent)/20
                transition-all duration-200
            "
            />
            <label
                className="
                absolute left-4 top-1/2 -translate-y-1/2
                text-white/50 text-base
                transition-all duration-200
                peer-focus:text-(--color-accent)
                peer-focus:text-sm
                peer-focus:top-2
                peer-focus:translate-y-0
                peer-not-placeholder-shown:text-(--color-accent)
                peer-not-placeholder-shown:text-sm
                peer-not-placeholder-shown:top-2
                peer-not-placeholder-shown:translate-y-0
                pointer-events-none
            "
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
                className="
                peer w-full px-4 pt-6 pb-2 rounded-xl
                bg-white/5
                border border-white/10
                text-white placeholder-transparent resize-none
                backdrop-blur-md
                focus:outline-none
                focus:border-(--color-accent)
                focus:ring-2 focus:ring-(--color-accent)/20
                transition-all duration-200
            "
            />
            <label
                className="
                absolute left-4 top-5 -translate-y-1/2
                text-white/50 text-base
                transition-all duration-200
                peer-focus:text-(--color-accent)
                peer-focus:text-sm
                peer-focus:top-2
                peer-focus:translate-y-0
                peer-not-placeholder-shown:text-(--color-accent)
                peer-not-placeholder-shown:text-sm
                peer-not-placeholder-shown:top-2
                peer-not-placeholder-shown:translate-y-0
                pointer-events-none
            "
            >
                {label}
            </label>
        </div>
    );
}

export default function Contacts() {
    const { title, description, phone, email, address } = Content.contacts;

    const formattedAddress = address.split("||").map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));

    return (
        <section className="relative isolate min-h-screen pt-28 pb-28 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/images/contacts-bg.webp)",
                }}
            />

            {/* Green Brand Overlay */}
            <div className="absolute inset-0 -z-10 bg-[rgba(63,76,69,0.88)]" />

            {/* Subtle Amber Glow */}
            <div className="absolute top-1/3 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-(--color-accent)/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
                {/* Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white">
                        {title}
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid items-start gap-16 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <ContactItem icon={<FaPhone />} title="Телефон" text={phone} />
                        <ContactItem icon={<FaEnvelope />} title="Имейл" text={email} />
                        <ContactItem
                            icon={<FaHome />}
                            title="Адрес"
                            text={formattedAddress}
                        />
                    </div>

                    {/* Glass Form */}
                    <div
                            className="
                            rounded-3xl
                            bg-white/5
                            backdrop-blur-xl
                            border border-white/10
                            p-12
                            shadow-2xl
                        "
                    //     className="
                    //     rounded-3xl
                    //   bg-white/4
                    //     backdrop-blur-2xl
                    //     border border-white/8
                    //     p-12
                    //     shadow-2xl
                    // "
                    >
                        <h3 className="mb-8 text-2xl font-semibold text-white">
                            Изпратете запитване
                        </h3>

                        <form className="space-y-6">
                            <FloatingInput label="Вашето име" />
                            <FloatingInput label="Имейл адрес" type="email" />
                            <FloatingTextarea label="Вашето съобщение" />

                            <CtaButton
                                type="submit"
                                size="lg"
                                variant="glassAccent"
                                className="w-full"
                            >
                                Изпрати съобщение
                            </CtaButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
