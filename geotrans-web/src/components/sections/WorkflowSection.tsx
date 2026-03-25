import StepProgress from "@/components/parts/StepProgress";
import { Section } from "@/components/layout/Section";
import type { WorkflowContent } from "@/config/content/workflow";

export const WorkflowSection = ({ id, title, subtitle, steps }: WorkflowContent) => {
  return (
    <Section
      id={id}
      className="relative bg-bg-muted py-20 sm:py-24 lg:py-28 overflow-hidden border-y border-br-light"
      // className="relative bg-bg-section py-20 sm:py-24 lg:py-28 overflow-hidden border-y border-br-light"
      containerClassName="container-page"
    >
      {/* Soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-accent/18 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -bottom-28 -z-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl"
      />

      <header className="text-center">
        <h2 className="typo-h2">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl typo-subtitle">{subtitle}</p>
      </header>

      <div className="mt-12 sm:mt-14">
        <StepProgress steps={steps} />
      </div>
    </Section>
  );
};
