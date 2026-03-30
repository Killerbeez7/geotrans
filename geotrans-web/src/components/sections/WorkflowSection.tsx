import StepProgress from "@/components/parts/StepProgress";
import { Section } from "@/components/layout/Section";
import clsx from "clsx";
import type { WorkflowContent } from "@/config/content/workflow";

export const WorkflowSection = ({ id, title, subtitle, steps }: WorkflowContent) => {
  return (
    <Section
      id={id}
      className={clsx(
        "relative overflow-hidden border-y border-br-light bg-bg-muted",
        // "bg-[linear-gradient(180deg,var(--color-bg-section)_0%,var(--color-bg-muted)_100%)]",
        "py-20 sm:py-24 lg:py-28"
      )}
      containerClassName="container-page"
    >
      {/* background atmosphere */}
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_34%)]"
        )}
      />

      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 opacity-[0.06]",
          "[background-image:linear-gradient(to_right,var(--color-border-muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-muted)_1px,transparent_1px)]",
          "[background-size:42px_42px]"
        )}
      />

      <header className="relative mx-auto max-w-3xl text-center">
        <p className="typo-kicker text-accent">Как работим</p>
        <h2 className="typo-h2 mt-3">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl typo-subtitle text-tx-secondary">
          {subtitle}
        </p>
      </header>

      <div className="relative mt-12 sm:mt-14">
        <div
          className={clsx(
            "relative overflow-hidden rounded-[2rem] border",
            "border-white/40 bg-white/55",
            "shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)]",
            "backdrop-blur-sm"
          )}
        >
          <div
            aria-hidden
            className={clsx(
              "pointer-events-none absolute inset-x-0 top-0 h-px",
              "bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            )}
          />

          <div
            aria-hidden
            className={clsx(
              "pointer-events-none absolute inset-0 opacity-40",
              "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_42%)]"
            )}
          />

          <div className="relative p-5 sm:p-7 lg:p-8">
            <StepProgress steps={steps} />
          </div>
        </div>
      </div>
    </Section>
  );
};
