import WorkflowStep, { StepProps } from "./WorkflowStep";

type WorkflowSectionProps = {
    title: string;
    desc: string;
    steps: Omit<StepProps, "number">[];
};

export default function WorkflowSection({ title, desc, steps }: WorkflowSectionProps) {
    return (
        <section className="py-16 sm:py-20 bg-linear-to-b from-white to-gray-50">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                {/* Header */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-3 text-lg text-text-secondary max-w-2xl mx-auto">
                        {desc}
                    </p>
                </div>

                {/* Timeline with connecting line */}
                <div className="relative">
                    {/* Desktop connecting line */}
                    <div className="absolute top-6 left-0 right-0 hidden lg:flex justify-center">
                        <div className="w-3/4 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
                    </div>

                    {/* Steps grid */}
                    <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-4 md:grid-cols-2">
                        {steps.map((step, index) => (
                            <WorkflowStep
                                key={index}
                                number={index + 1}
                                title={step.title}
                                desc={step.desc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
