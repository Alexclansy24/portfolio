"use client";

import { useState } from "react";
import Section from "./Section";
import RowCard from "./RowCard";
import TechChips from "./TechChips";
import Modal, { BulletList, ModalBlock } from "./Modal";
import { experience, type Job } from "@/data/content";

export default function Experience() {
  const [active, setActive] = useState<Job | null>(null);

  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-3">
        {experience.map((job) => (
          <RowCard key={job.company + job.tenure} onClick={() => setActive(job)}>
            <span className="grid gap-2 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
              <span className="font-display text-3xl leading-tight">{job.company}</span>
              <span className="text-mute transition-colors duration-300 group-hover:text-paper/75">
                {job.role}
              </span>
              <span className="text-sm tabular-nums text-mute transition-colors duration-300 group-hover:text-paper/75 md:text-right">
                {job.tenure}
              </span>
            </span>
          </RowCard>
        ))}
      </div>

      {active && (
        <Modal
          title={active.company}
          subtitle={`${active.role}, ${active.tenure}`}
          onClose={() => setActive(null)}
        >
          <p className="text-mute">
            {active.type}, {active.location}
          </p>
          <p>{active.summary}</p>
          <ModalBlock title="What I did">
            <BulletList items={active.responsibilities} />
          </ModalBlock>
          <ModalBlock title="Highlights">
            <BulletList items={active.highlights} />
          </ModalBlock>
          <ModalBlock title="Tech used">
            <TechChips items={active.tech} />
          </ModalBlock>
        </Modal>
      )}
    </Section>
  );
}
