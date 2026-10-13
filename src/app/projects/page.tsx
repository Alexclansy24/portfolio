import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        intro="Things I have built, from weekend experiments to tools other people rely on. Select one to see the details."
      />
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-10">
        <ProjectList projects={projects} />
      </div>
    </>
  );
}
