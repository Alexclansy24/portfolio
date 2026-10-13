const chip =
  "rounded-full border border-line px-3 py-1 text-xs text-mute transition-colors duration-300 group-hover:border-paper/30 group-hover:text-paper/80";

/**
 * Shows technologies as small pills. Pass `max` to cap the list;
 * anything beyond it collapses into a "+N more" pill.
 * Uses <span> only so it can sit safely inside a <button>.
 */
export default function TechChips({ items, max }: { items: string[]; max?: number }) {
  const shown = max ? items.slice(0, max) : items;
  const rest = max ? Math.max(0, items.length - max) : 0;

  return (
    <span className="flex flex-wrap gap-2">
      {shown.map((tech) => (
        <span key={tech} className={chip}>
          {tech}
        </span>
      ))}
      {rest > 0 && <span className={chip}>+{rest} more</span>}
    </span>
  );
}
