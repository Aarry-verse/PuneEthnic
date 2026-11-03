import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, products } from "@/data/site";
import { btn, productMsg, waLink } from "@/lib/whatsapp";
import { Photo } from "@/components/Photo";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = products.find((x) => x.slug === (await params).slug);
  return p ? { title: p.name, description: p.description } : {};
}

export default async function ProductPage({ params }: Props) {
  const p = products.find((x) => x.slug === (await params).slug);
  if (!p) notFound();
  const cat = collections.find((c) => c.slug === p.collection);
  const imgs = p.images?.length ? p.images : [undefined];
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
      <Link href={`/collections?c=${p.collection}`} className="text-sm underline underline-offset-4 hover:text-gold">← {cat?.name ?? "Collections"}</Link>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="group space-y-4">
          {imgs.map((src, i) => <div key={i} className="overflow-hidden"><Photo src={src} alt={`${p.name} ${i + 1}`} label={p.name} priority={i === 0} sizes="(min-width:768px) 50vw, 100vw" /></div>)}
        </div>
        <div className="md:sticky md:top-28 md:self-start">
          {p.placeholder && <p className="mb-3 inline-block bg-beige px-2 py-1 text-[10px] tracking-widest">SAMPLE PRODUCT</p>}
          <h1 className="font-serif text-4xl md:text-5xl">{p.name}</h1>
          {p.price && <p className="mt-3 text-xl">{p.price}</p>}
          <p className="mt-6 leading-relaxed text-charcoal/75">{p.description}</p>
          {p.sizes?.length ? <p className="mt-6 text-sm">Available sizes: {p.sizes.join(", ")}</p> : <p className="mt-6 text-sm text-charcoal/60">Ask on WhatsApp for sizes and availability.</p>}
          <a href={waLink(productMsg(p.name))} target="_blank" rel="noopener noreferrer" className={btn.primary + " mt-8"}>ENQUIRE ON WHATSAPP</a>
        </div>
      </div>
    </div>
  );
}
