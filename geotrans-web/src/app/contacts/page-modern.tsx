import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { Content } from "@/config/ContentConfig";
import clsx from "clsx";

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
        <div className="flex items-start gap-5 group">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-cyan-400 text-xl transition group-hover:scale-110 group-hover:bg-cyan-500/20">
                {icon}
            </div>

            <div>
                <h4 className="text-lg font-semibold text-white">{title}</h4>
                <p className="mt-1 text-white/80 leading-relaxed">{text}</p>
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
                className="peer w-full px-4 pt-6 pb-2 rounded-xl
                bg-white/5 border border-white/20
                text-white placeholder-transparent
                focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
                transition-all duration-200"
            />
            <label
                className="absolute left-4 top-1/2 -translate-y-1/2
                text-white/60 text-base transition-all duration-200
                peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:top-2 peer-focus:translate-y-0
                peer-not-placeholder-shown:text-cyan-400 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0
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
                bg-white/5 border border-white/20
                text-white placeholder-transparent resize-none
                focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
                transition-all duration-200"
            />
            <label
                className={clsx(
                    "absolute left-4 top-5 -translate-y-1/2",
                    "text-white/60 text-base transition-all duration-200,",
                    "peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:top-2 peer-focus:translate-y-0",
                    "peer-not-placeholder-shown:text-cyan-400 peer-not-placeholder-shown:text-sm",
                    "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0",
                    "pointer-events-none",
                )}
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
    const address = Content.contacts.address.split("||").map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));

    return (
        <section className="relative isolate min-h-screen pt-24 pb-24 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/images/contacts-bg.webp)",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

            {/* Accent Glow */}
            <div className="absolute top-1/3 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
                        <ContactItem icon={<FaHome />} title="Адрес" text={address} />
                    </div>

                    {/* Form */}
                    <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-10 shadow-2xl">
                        <h3 className="mb-8 text-2xl font-semibold text-white">
                            Изпратете запитване
                        </h3>

                        <form className="space-y-6">
                            <FloatingInput label="Вашето име" />
                            <FloatingInput label="Имейл адрес" type="email" />
                            <FloatingTextarea label="Вашето съобщение" />

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-linear-to-r from-cyan-500 to-cyan-400 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
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
