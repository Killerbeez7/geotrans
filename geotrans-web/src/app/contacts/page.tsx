import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { Content } from "components/config/ContentConfig";

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
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-gray-800">
                {icon}
            </div>

            <div>
                <h4 className="text-lg font-semibold text-cyan-400">{title}</h4>
                <p className="mt-1 text-white">{text}</p>
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
                placeholder=" " // required for peer-placeholder-shown
                className="
          peer w-full px-4 pt-6 pb-2 rounded-xl
          bg-white/10 backdrop-blur-sm border border-gray-400/50
          text-gray-900 placeholder-transparent
          focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
          transition-all duration-200
        "
            />
            <label
                className="
          absolute left-4 top-1/2 -translate-y-1/2
          text-gray-500 text-base transition-all duration-200
          peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:top-2 peer-focus:translate-y-0
          peer-not-placeholder-shown:text-cyan-400 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0
          pointer-events-none origin-left
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
          bg-white/10 backdrop-blur-sm border border-gray-400/50
          text-gray-900 placeholder-transparent resize-none
          focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
          transition-all duration-200
        "
            />
            <label
                className="
          absolute left-4 top-5 -translate-y-1/2
          text-gray-500 text-base transition-all duration-200
          peer-focus:text-cyan-400 peer-focus:text-sm peer-focus:top-2 peer-focus:translate-y-0
          peer-not-placeholder-shown:text-cyan-400 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0
          pointer-events-none origin-left
        "
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
        <section className="relative isolate min-h-[calc(100dvh)] pt-24">
            {/* Background image */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/images/contacts-bg.webp)",
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/80 to-black/70" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="mb-14 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
                        {description}
                    </p>
                </div>

                {/* Content */}
                <div className="grid items-start gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <ContactItem icon={<FaPhone />} title="Phone" text={phone} />

                        <ContactItem icon={<FaEnvelope />} title="Email" text={email} />

                        <ContactItem icon={<FaHome />} title="Address" text={address} />
                    </div>

                    {/* Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-xl">
                        <h3 className="mb-6 text-xl font-semibold text-gray-800">
                            Send Message
                        </h3>

                        <form className="space-y-6">
                            <FloatingInput label="Full Name" type="text" />
                            <FloatingInput label="Email" type="email" />
                            <FloatingTextarea label="Type your Message..." />

                            <button
                                type="submit"
                                className="w-full rounded-md border border-cyan-500 bg-cyan-500 px-4 py-2 text-lg font-medium text-white transition hover:bg-white hover:text-cyan-500"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
