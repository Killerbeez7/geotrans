"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { siteContent } from "@/config/site-content";
import type { ProjectsContent } from "@/config/content/projects";

import { ProjectsLightbox } from "./ProjectsLightbox";
import { Section } from "@/components/layout/Section";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProjectDisplayCard } from "@/components/parts/ProjectDisplayCard";

export default function ProjectsPageClient() {
  const [selectedImage, setSelectedImage] = useState<
    ProjectsContent["items"][number] | null
  >(null);

  const { title, subtitle, items } = siteContent.projects;

  const hasFew = useMemo(() => items.length < 6, [items.length]);

  return (
    <>
      <Section
        id="projects"
        variant="hero"
        tone="page"
        className="pt-28 pb-20 md:pt-36 md:pb-28"
      >
        <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-14">
          <header className="col-span-12 text-center lg:col-span-8 lg:col-start-3">
            <h1 className="typo-hero text-tx-primary">{title}</h1>
            <p className="typo-lead mt-5 text-lg text-tx-secondary sm:text-xl">
              {subtitle}
            </p>
          </header>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((img) => (
            <ProjectDisplayCard
              key={img.id}
              image={img}
              onClick={() => setSelectedImage(img)}
              // className="mb-0!"
            />
          ))}
        </div>

        {hasFew && (
          <div className="mt-16 text-center text-tx-secondary">
            <p className="text-lg">Още проекти се добавят редовно.</p>
            <Link
              href="/contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent
                         px-6 py-3 text-base font-semibold text-white transition
                         hover:bg-accent-hover"
            >
              Попитайте за ваш проект →
            </Link>
          </div>
        )}
      </Section>

      <ProjectsLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      <FinalCta />
    </>
  );
}
