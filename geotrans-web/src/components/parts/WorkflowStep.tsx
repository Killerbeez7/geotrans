import { FaCheck } from "react-icons/fa6";
import clsx from "clsx";

export interface Step {
    title: string;
    desc?: string;
}

interface StepProgressProps {
    steps: Step[];
    currentStep?: number; // 1-based
}

export default function StepProgress({ steps, currentStep = 1 }: StepProgressProps) {
    const progress =
        steps.length > 1 ? ((currentStep - 1) / (steps.length - 1)) * 100 : 0;

    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
            <div className="relative hidden md:block">
                {/* Background line */}
                <div className="absolute top-6 left-[5%] right-[5%] h-px bg-green-300" />

                {/* Progress line */}
                <div
                    className="absolute top-6 left-[5%] h-px bg-amber-600 transition-all duration-500"
                    style={{ width: `${progress * 0.9}%` }}
                />
            </div>

            <div className="relative flex flex-col md:flex-row items-start gap-8 md:gap-0">
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = currentStep > stepNumber;
                    const isActive = currentStep === stepNumber;

                    return (
                        <div
                            key={index}
                            className="relative flex flex-1 flex-row md:flex-col items-start md:items-center gap-4"
                        >
                            {/* Circle */}
                            <div
                                className={clsx(
                                    "z-10 flex h-11 w-11 items-center justify-center rounded-full border transition-all",
                                    isCompleted &&
                                        "bg-red border-amber-400 text-(--tx-muted)",
                                    isActive &&
                                        "bg-amber-700 border-accent text-accent ring-4 ring-accent/20",
                                    !isCompleted &&
                                        !isActive &&
                                        "bg-amber-600 border-gray-300 text-(--tx-muted)",
                                )}
                            >
                                {isCompleted ? (
                                    <FaCheck className="h-5 w-5" />
                                ) : (
                                    <span className="text-sm font-semibold">
                                        {stepNumber}
                                    </span>
                                )}
                            </div>

                            {/* Label */}
                            <div
                                className={clsx(
                                    "md:mt-3 max-w-56 text-left md:text-center",
                                    isActive && "text-(--tx-primary)",
                                    !isActive && "text-(--tx-muted)",
                                )}
                            >
                                <div className="text-sm font-semibold leading-snug">
                                    {step.title}
                                </div>
                                {step.desc && (
                                    <div className="mt-1 text-xs leading-relaxed opacity-80">
                                        {step.desc}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
