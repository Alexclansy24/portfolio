import Link from "next/link";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Section from "@/components/Section";
import ProjectList from "@/components/ProjectList";
import Contact from "@/components/Contact";
import { projects } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Section id="projects" title="Projects">
        <ProjectList projects={projects.slice(0, 4)} />
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-ink px-7 py-3 text-sm transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            More projects
          </Link>
        </div>
      </Section>
      <Contact />
    </>
  );
}
