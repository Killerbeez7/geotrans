import Link from "next/link";

import { Content } from "../config/ContentConfig";
import { HorizontalDivider } from "../components/parts/HorizontalDivider";
// Sections
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ContactHighlights } from "@/components/sections/ContactHighlights";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Stats } from "@/components/sections/StatsSection";

export default function Home() {
    return (
        <>
            <HeroSection
                title={Content.hero.title}
                desc={Content.hero.description}
                image={Content.hero.image}
                ctaLabel={Content.cta.label}
                ctaHref={Content.cta.href}
            />

            <ServiceSection
                title={Content.services.title}
                subtitle={Content.services.description}
            />

            <WorkflowSection
                title={Content.workflow.title}
                desc={Content.workflow.description}
                steps={Content.workflow.steps}
            />

            <ContactHighlights />

            <Stats />

            <ProjectsSection />
        </>
    );
}
