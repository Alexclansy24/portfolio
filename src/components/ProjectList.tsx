"use client";

import { useState } from "react";
import RowCard from "./RowCard";
import TechChips from "./TechChips";
import Modal, { ModalBlock } from "./Modal";
import type { Project } from "@/data/content";

const linkBase =
  "inline-flex items-center rounded-full px-6 py-2.5 text-sm transition-colors duration-300";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <RowCard key={project.name} onClick={() => setActive(project)}>
            <span className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-center md:gap-8">
              <span className="font-display text-3xl leading-tight">{project.name}</span>
              <TechChips items={project.tech} max={3} />
            </span>
          </RowCard>
        ))}
      </div>

      {active && (
        <Modal
          title={active.name}
          subtitle={`${active.tagline} (${active.year})`}
          onClose={() => setActive(null)}
        >
          {(active.liveUrl || active.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {active.liveUrl && (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkBase} bg-ink text-paper hover:bg-accent`}
                >
                  Live site
                </a>
              )}
              {active.githubUrl && (
                <a
                  href={active.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkBase} border border-ink hover:bg-ink hover:text-paper`}
                >
                  GitHub
                </a>
              )}
            </div>
          )}
          <ModalBlock title="About">
            <div className="space-y-3">
              {active.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ModalBlock>
          <ModalBlock title="Tech used">
            <TechChips items={active.tech} />
          </ModalBlock>
        </Modal>
      )}
    </>
  );
}
