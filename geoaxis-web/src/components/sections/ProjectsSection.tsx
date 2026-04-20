"use client";

import { useMemo, useState } from "react";
import { CtaButton } from "../parts/CtaButton";
import { ProjectDisplayCard } from "../parts/ProjectDisplayCard";
import { ProjectsLightbox } from "@/app/projects/ProjectsLightbox";
import type { ProjectItem, ProjectsContent } from "@/config/content/projects";

import { Section } from "@/components/layout/Section";

export function ProjectsSection({
  id,
  kicker,
  title,
  subtitle,
  items,
  cta,
}: ProjectsContent) {
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);
  const maxItems = 6;

  const visible = useMemo(() => items.slice(0, maxItems), [items, maxItems]);

  return (
    <Section id={id} tone="page">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <span className="typo-kicker">{kicker}</span>
          <h2 className="typo-h2">{title}</h2>
          <p className="mt-2 typo-subtitle">{subtitle}</p>
        </div>

        <CtaButton variant="primary" href={cta.href} className="shrink-0">
          {cta.label}
        </CtaButton>
      </div>

      <div className="mt-10 sm:mt-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {visible.map((image) => (
            <ProjectDisplayCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <ProjectsLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </Section>
  );
}
