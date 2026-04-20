import StepProgress from "@/components/parts/StepProgress";
import { Section } from "@/components/layout/Section";
import type { WorkflowContent } from "@/config/content/workflow";

export const WorkflowSection = ({
  id,
  kicker,
  title,
  subtitle,
  steps,
}: WorkflowContent) => {
  return (
    <Section id={id} tone="muted">
      <header className="mx-auto max-w-3xl text-center">
        {kicker && <p className="typo-kicker text-accent">{kicker}</p>}
        <h2 className="typo-h2 mt-2">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl typo-subtitle">{subtitle}</p>
      </header>

      <div className="mt-10 sm:mt-12">
        <StepProgress steps={steps} />
      </div>
    </Section>
  );
};
