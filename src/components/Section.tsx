import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto grid max-w-6xl scroll-mt-20 gap-8 px-6 py-20 md:grid-cols-[200px_1fr] md:gap-12 md:py-28"
    >
      <h2 className="font-display text-4xl md:sticky md:top-28 md:self-start md:text-5xl">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
