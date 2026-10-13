"use client";

import { useState } from "react";
import Section from "./Section";
import RowCard from "./RowCard";
import Modal from "./Modal";
import { sideQuests, type SideQuest } from "@/data/content";

export default function SideQuests() {
  const [active, setActive] = useState<SideQuest | null>(null);

  return (
    <Section title="Beyond code">
      <div className="flex flex-col gap-3">
        {sideQuests.map((quest) => (
          <RowCard key={quest.title} onClick={() => setActive(quest)}>
            <span className="grid gap-2 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
              <span className="font-display text-3xl leading-tight">{quest.title}</span>
              <span className="text-mute transition-colors duration-300 group-hover:text-paper/75">
                {quest.place}
              </span>
              <span className="text-sm tabular-nums text-mute transition-colors duration-300 group-hover:text-paper/75 md:text-right">
                {quest.period}
              </span>
            </span>
          </RowCard>
        ))}
      </div>

      {active && (
        <Modal
          title={active.title}
          subtitle={`${active.place}, ${active.period}`}
          onClose={() => setActive(null)}
        >
          <div className="space-y-3">
            {active.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Modal>
      )}
    </Section>
  );
}
