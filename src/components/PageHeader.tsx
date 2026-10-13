export default function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-4 pt-16 md:pt-24">
      <h1 className="font-display text-[clamp(3.5rem,11vw,8rem)] leading-[0.95] tracking-[-0.02em]">
        {title}
      </h1>
      <p className="mt-6 max-w-md text-mute">{intro}</p>
    </header>
  );
}
