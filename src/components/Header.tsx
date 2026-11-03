"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { business } from "@/data/site";
import { btn, generalMsg, waLink } from "@/lib/whatsapp";

export const nav = [
  { href: "/", label: "Home" }, { href: "/collections", label: "Collections" },
  { href: "/wedding-wear", label: "Wedding Wear" }, { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" },
];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="sticky top-0 z-40 border-b border-beige bg-ivory/95 backdrop-blur">
      {business.announcement && <p className="bg-beige px-4 py-2 text-center text-xs tracking-wide text-charcoal">{business.announcement}</p>}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="font-serif text-2xl tracking-[0.18em]" onClick={() => setOpen(false)}>PUNE ETHNIC</Link>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined}
              className={`text-sm transition hover:text-gold ${active(n.href) ? "text-gold" : ""}`}>{n.label}</Link>
          ))}
          <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className={btn.primary + " !py-2.5"}>WHATSAPP ENQUIRY</a>
        </nav>
        <button className="p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <span className="block h-px w-6 bg-[#2B1722]" /><span className="mt-1.5 block h-px w-6 bg-[#2B1722]" /><span className="mt-1.5 block h-px w-4 bg-[#2B1722]" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-beige lg:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`py-3 font-serif text-2xl ${active(n.href) ? "text-gold" : ""}`}>{n.label}</Link>
              ))}
              <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className={btn.primary + " mt-3"}>WHATSAPP ENQUIRY</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
