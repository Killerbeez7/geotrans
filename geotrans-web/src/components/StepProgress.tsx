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

export default function StepProgress({ steps, currentStep = 2 }: StepProgressProps) {
  const progress = steps.length > 1 ? ((currentStep - 1) / (steps.length - 1)) * 100 : 0;

  return (
    <div className="w-full mx-auto sm:px-6 md:px-8 py-10 sm:py-12 lg:py-14 max-w-6xl">
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-0">
        {/* Background line – full width */}
        <div className="hidden md:block absolute top-5.5 sm:top-6 left-0 right-0 h-0.5 bg-gray-200 -z-10" />

        {/* Progress line */}
        <div
          className="hidden md:block absolute top-5.5 sm:top-6 left-0 h-0.5 bg-success/50 transition-all duration-500 ease-out -z-10"
          style={{ width: `${progress}%` }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isActive = currentStep === stepNumber;

          return (
            <div
              key={index}
              className={`
                relative flex md:flex-col items-center flex-1
                gap-4 md:gap-3
                ${index > 0 ? "md:pl-4 lg:pl-6" : ""}
                ${index < steps.length - 1 ? "pb-4 md:pb-0" : ""}
              `}
            >
              {/* Circle */}
              <div
                className={clsx(
                  "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 ",
                  "rounded-full flex items-center justify-center shrink-0",
                  "border-2 shadow-sm transition-all duration-300",
                  `${
                    isCompleted
                      ? "bg-success border-success text-white shadow-md"
                      : isActive
                        ? "bg-white border-accent text-(--text-secondary) shadow-lg ring-2 ring-accent/30 scale-105"
                        : "bg-white border-border-default text-(--text-secondary)"
                  }`
                )}
              >
                {isCompleted ? (
                  <FaCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <span className="text-sm sm:text-base md:text-lg font-semibold">
                    {stepNumber}
                  </span>
                )}
              </div>

              {/* Boxed label */}
              <div
                className={clsx(
                  "flex-1 sm:flex-none md:text-center",
                  "px-4 py-3.5 sm:px-4 sm:py-4",
                  "rounded-xl border shadow-sm",
                  "transition-all duration-300",
                  "bg-white mt-3 sm:mt-4 max-w-80",
                  `${
                    isActive
                      ? "border-accent/50 bg-accent/5 font-medium"
                      : isCompleted
                        ? "border-success/30 bg-success/5"
                        : "border-border-light text-(-text-secondary)"
                  }`
                )}
              >
                <div className="text-xs sm:text-sm md:text-base font-semibold leading-tight">
                  {step.title}
                </div>
                {step.desc && (
                  <div className="mt-1.5 text-xs sm:text-sm leading-relaxed opacity-85">
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
