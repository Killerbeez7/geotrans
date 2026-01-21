export default function Contacts() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-4xl text-primary font-bold mb-2">Контакти</h1>
                <p className="text-accent text-lg">
                    Свържете се с нас за геодезически, кадастрални и инженерни услуги
                </p>
            </header>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                {/* Left Column – Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Информация за контакт</h2>
                    <ul className="space-y-3 text-dark">
                        <li>
                            <strong>Адрес:</strong> ул. „Примерна“ 123, София
                        </li>
                        <li>
                            <strong>Телефон:</strong>{" "}
                            <a href="tel:+359888000000" className="text-link hover:underline">
                                +359 888 000 000
                            </a>
                        </li>
                        <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:info@geodesy-bg.com" className="text-link hover:underline">
                                info@geodesy-bg.com
                            </a>
                        </li>
                        <li>
                            <strong>Работно време:</strong> Пон–Пет: 9:00 – 18:00
                        </li>
                        <li>
                            <strong>Булстат / ЕИК:</strong> 123456789
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8 mb-3">Социални мрежи</h3>
                    <ul className="space-y-2 text-dark">
                        <li>
                            <a href="#" className="text-link hover:underline">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-link hover:underline">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right Column – Contact Form */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Изпратете запитване</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block font-medium mb-1">Име *</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Телефон *</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Съобщение *</label>
                            <textarea
                                className="w-full border rounded-lg px-3 py-2 h-28"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                        >
                            Изпрати
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
