import Image from "next/image";
import type { CSSProperties } from "react";
import { profile } from "@/data/content";

export default function Hero() {
  const words = profile.name.split(" ");

  return (
    <section className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl items-center px-6 py-14">
      <div className="grid w-full items-end gap-12 md:grid-cols-[auto_1fr] md:gap-16">
        {/* Photo in an arch, with an offset outline behind it */}
        <div className="relative mx-auto w-56 sm:w-64 md:mx-0 md:w-80">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-accent"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-line">
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              fill
              priority
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h1 className="font-display text-[clamp(3.75rem,12vw,9rem)] leading-[0.92] tracking-[-0.02em]">
            {words.map((word, i) => (
              <span key={i} className="block overflow-hidden py-[0.03em]">
                <span
                  className={`rise ${i % 2 === 1 ? "md:pl-[0.5em]" : ""}`}
                  style={{ "--delay": `${0.1 + i * 0.12}s` } as CSSProperties}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-5 text-sm">
            <p>{profile.profession}</p>
            <p className="text-mute">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
