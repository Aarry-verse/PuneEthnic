import Link from "next/link";
import type { Product } from "@/data/site";
import { btn, productMsg, waLink } from "@/lib/whatsapp";
import { Photo } from "./Photo";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group">
      <Link href={`/collections/${p.slug}`} className="block">
        <div className="relative">
          <Photo src={p.images?.[0]} alt={p.name} label={p.name} />
          {p.placeholder && <span className="absolute left-3 top-3 bg-ivory px-2 py-1 text-[10px] tracking-widest">SAMPLE</span>}
        </div>
        <h3 className="mt-4 font-serif text-xl group-hover:text-gold">{p.name}</h3>
      </Link>
      {p.price && <p className="text-sm text-charcoal/70">{p.price}</p>}
      {p.sizes?.length ? <p className="text-xs text-charcoal/60">Sizes: {p.sizes.join(", ")}</p> : null}
      <a href={waLink(productMsg(p.name))} target="_blank" rel="noopener noreferrer" className={btn.ghost + " mt-3 !px-4 !py-2"}>ENQUIRE</a>
    </article>
  );
}
