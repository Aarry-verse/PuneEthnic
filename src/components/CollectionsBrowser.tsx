"use client";
import { useState } from "react";
import type { Collection, Product } from "@/data/site";
import { ProductCard } from "./ProductCard";

export function CollectionsBrowser({ collections, products, initial = "all" }: { collections: Collection[]; products: Product[]; initial?: string }) {
  const [cat, setCat] = useState(initial);
  const list = cat === "all" ? products : products.filter((p) => p.collection === cat);
  const tabs = [{ slug: "all", name: "All" }, ...collections];
  return (
    <div>
      <div role="tablist" aria-label="Categories" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t.slug} role="tab" aria-selected={cat === t.slug} onClick={() => setCat(t.slug)}
            className={`border px-4 py-2 text-sm transition ${cat === t.slug ? "border-gold bg-gold text-charcoal" : "border-beige hover:border-gold"}`}>{t.name}</button>
        ))}
      </div>
      {list.length ? (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      ) : <p className="mt-10 text-charcoal/70">No pieces listed in this category yet. Ask us on WhatsApp for what is in store.</p>}
    </div>
  );
}
