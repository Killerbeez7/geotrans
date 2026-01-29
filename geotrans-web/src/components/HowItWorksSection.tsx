export const HowItWorksSection = () => {
    const Step = ({ n, title, text }: { n: string; title: string; text: string }) => {
        return (
            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-black/5">
                <p className="text-xs font-semibold text-text-secondary">{n}</p>
                <p className="mt-1 font-semibold">{title}</p>
                <p className="mt-1 text-sm text-text-secondary">{text}</p>
            </div>
        );
    };

    return (
        <section className="relative overflow-hidden px-8 py-16">
            <h2 className="text-2xl font-semibold">Как работим</h2>
            <p className="mt-2 text-text-secondary">Прост процес, без губене на време.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Step
                    n="01"
                    title="Запитване"
                    text="Изпращате кратко описание + адрес/идентификатор."
                />
                <Step
                    n="02"
                    title="Оферта"
                    text="Уточняваме обхват и срокове, даваме ясна цена."
                />
                <Step
                    n="03"
                    title="Изпълнение"
                    text="Извършваме услугата и предоставяме готови материали."
                />
            </div>
        </section>
    );
};
