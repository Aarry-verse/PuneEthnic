import type { Metadata } from "next";
import Link from "next/link";
import { images, products } from "@/data/site";
import { btn, generalMsg, waLink } from "@/lib/whatsapp";
import { Photo } from "@/components/Photo";
import { ProductCard } from "@/components/ProductCard";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = { title: "Wedding Wear", description: "Sherwanis and Indo-Western wedding outfits at Pune Ethnic, Sadashiv Peth, Pune. Enquire on WhatsApp." };

const Group = ({ title, slug }: { title: string; slug: string }) => (
  <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
    <div className="mb-8 flex items-end justify-between">
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      <Link href={`/collections?c=${slug}`} className="text-sm underline underline-offset-4 hover:text-gold">View all</Link>
    </div>
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
      {products.filter((p) => p.collection === slug).map((p) => <ProductCard key={p.slug} p={p} />)}
    </div>
  </section>
);

export default function Page() {
  return (
    <>
      <section className="relative isolate flex min-h-[70vh] items-end bg-beige text-charcoal">
        <Photo src={images.weddingBanner || undefined} alt="Groom in wedding attire" label="Groom fashion hero" ratio="" className="absolute inset-0 -z-10 !bg-beige opacity-60" priority sizes="100vw" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8">
          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">THE PERFECT LOOK FOR YOUR BIG DAY.</h1>
          <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className={btn.gold + " mt-8"}>ENQUIRE ON WHATSAPP</a>
        </div>
      </section>
      <Group title="Sherwani collection" slug="sherwanis" />
      <Group title="Indo-Western collection" slug="indo-western" />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <h2 className="mb-8 font-serif text-3xl md:text-4xl">Wedding outfit gallery</h2>
        <GalleryGrid limit={4} />
      </section>
      <section className="bg-beige px-5 py-20 text-center text-charcoal">
        <h2 className="font-serif text-4xl">Planning a wedding look?</h2>
        <p className="mx-auto mt-4 max-w-md text-charcoal/70">Message the store to ask about outfits and availability.</p>
        <a href={waLink("Hello Pune Ethnic, I am looking for wedding wear. Please share more details.")} target="_blank" rel="noopener noreferrer" className={btn.gold + " mt-8"}>ENQUIRE ON WHATSAPP</a>
      </section>
    </>
  );
}
