import type { Metadata } from "next";
import { Suspense } from "react";
import { collections, products } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { CollectionsBrowser } from "@/components/CollectionsBrowser";

export const metadata: Metadata = { title: "Collections", description: "Browse ethnic wear categories at Pune Ethnic, Sadashiv Peth, Pune, and enquire on WhatsApp." };

export default async function Page({ searchParams }: { searchParams: Promise<{ c?: string }> }) {
  const { c } = await searchParams;
  const initial = collections.some((x) => x.slug === c) ? c : "all";
  return (
    <>
      <PageHero title="Collections" text="Sample products are labelled. Prices and sizes appear only once verified." />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Suspense><CollectionsBrowser key={initial} collections={collections} products={products} initial={initial} /></Suspense>
      </section>
    </>
  );
}
