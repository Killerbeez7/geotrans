import StepProgress, { Step } from "../parts/StepProgress";

type WorkflowSectionProps = {
    title: string;
    desc: string;
    steps: Omit<Step, "number">[];
};

export const WorkflowSection = ({ title, desc, steps }: WorkflowSectionProps) => {
    return (
        <section className="relative py-16 sm:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-linear-to-b from-white to-gray-50" />

            <div className="mx-auto max-w-7xl px-4 sm:px-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="font-semibold tracking-tight text-2xl lg:text-3xl xl:text-4xl">
                        {title}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base xl:text-lg text-(--text-secondary)">
                        {desc}
                    </p>
                </div>

                <StepProgress steps={steps} />
            </div>
        </section>
    );
};
