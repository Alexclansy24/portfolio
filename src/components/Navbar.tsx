"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";

const links = [
  { href: "/extra", label: "Extra" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl leading-none">
          {profile.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-sm sm:gap-8">
            {links.map((link) => {
              const active = !link.href.includes("#") && pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "underline decoration-accent decoration-2 underline-offset-8"
                        : "text-mute transition-colors hover:text-ink"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
