import type { ReactNode } from "react";

/** A wide, clickable row. Inverts to ink on hover and opens a dialog via onClick. */
export default function RowCard({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      className="group flex w-full cursor-pointer items-center gap-6 rounded-2xl border border-line px-6 py-6 text-left transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper sm:px-8 sm:py-7"
    >
      <span className="block min-w-0 flex-1">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="size-5 shrink-0 text-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
      >
        <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
