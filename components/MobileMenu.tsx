"use client";

import { IconMenu2 } from "@tabler/icons-react";
import { useRef } from "react";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute("open");

  return (
    <details ref={ref} className="group relative md:hidden">
      <summary
        aria-label="Open menu"
        className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-[var(--op-gray-border)] text-[var(--op-navy)] [&::-webkit-details-marker]:hidden"
      >
        <IconMenu2 size={20} aria-hidden="true" />
      </summary>
      <div className="absolute right-0 top-12 w-56 rounded-lg border border-[var(--op-gray-border)] bg-white p-3 shadow-lg">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="block rounded-md px-3 py-2 text-[13px] text-[var(--op-gray-text)] hover:bg-[var(--op-navy-light)] hover:text-[var(--op-navy)]"
          >
            {link.label}
          </a>
        ))}
        <a className="btn-primary mt-2 w-full px-4 py-2 text-[13px]" href="#contact" onClick={close}>
          Request a Demo
        </a>
      </div>
    </details>
  );
}
