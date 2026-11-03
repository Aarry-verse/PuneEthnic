import Link from "next/link";
import { business } from "@/data/site";
import { generalMsg, waLink } from "@/lib/whatsapp";
import { nav } from "./Header";

export function Footer() {
  return (
    <footer className="bg-beige text-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em]">PUNE ETHNIC</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/70">Ethnic wear in {business.address.split(",")[0]}, Pune.</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {nav.map((n) => <Link key={n.href} href={n.href} className="text-charcoal/80 hover:text-gold">{n.label}</Link>)}
        </nav>
        <address className="space-y-2 text-sm not-italic text-charcoal/80">
          <p>{business.address}</p>
          <p><a className="hover:text-gold" href={`tel:${business.phone}`}>{business.phoneDisplay}</a></p>
          <p><a className="hover:text-gold" href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          <p><a className="hover:text-gold" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a></p>
          <p>{business.instagram ? <a className="hover:text-gold" href={business.instagram} target="_blank" rel="noopener noreferrer">Instagram</a> : <span className="text-charcoal/40">Instagram: add link in src/data/site.ts</span>}</p>
        </address>
      </div>
      <p className="border-t border-gold/40 py-6 text-center text-xs text-charcoal/50">© {new Date().getFullYear()} Pune Ethnic. All rights reserved.</p>
    </footer>
  );
}
