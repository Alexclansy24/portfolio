"use client";

import { useState } from "react";
import Section from "./Section";
import RowCard from "./RowCard";
import Modal from "./Modal";
import { posts, type Post } from "@/data/content";

export default function Notes() {
  const [active, setActive] = useState<Post | null>(null);

  return (
    <Section title="Notes">
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <RowCard key={post.title} onClick={() => setActive(post)}>
            <span className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline md:gap-8">
              <span className="block">
                <span className="block font-display text-3xl leading-tight">{post.title}</span>
                <span className="mt-2 block max-w-xl text-sm text-mute transition-colors duration-300 group-hover:text-paper/75">
                  {post.excerpt}
                </span>
              </span>
              <span className="text-sm tabular-nums text-mute transition-colors duration-300 group-hover:text-paper/75 md:text-right">
                {post.date}
                <span className="block">{post.readTime}</span>
              </span>
            </span>
          </RowCard>
        ))}
      </div>

      {active && (
        <Modal
          title={active.title}
          subtitle={`${active.date}, ${active.readTime}`}
          onClose={() => setActive(null)}
        >
          <div className="space-y-4">
            {active.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {active.url && (
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-ink px-6 py-2.5 text-sm transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              Read the full post
            </a>
          )}
        </Modal>
      )}
    </Section>
  );
}
