import Link from "next/link";
import { business, collections, images, products } from "@/data/site";
import { btn, generalMsg, waLink } from "@/lib/whatsapp";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { GalleryGrid } from "@/components/GalleryGrid";

export default function Home() {
  return (
    <>
      <section className="bg-beige text-charcoal">
        <div className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.1fr_.9fr] md:gap-20 lg:px-8">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.28em]">{business.tagline}</p>
            <div className="my-6 flex w-64 max-w-full items-center gap-3" aria-hidden="true">
              <span className="h-px flex-1 bg-gold" /><span className="size-1.5 rotate-45 bg-gold" /><span className="h-px flex-1 bg-gold" />
            </div>
            <h1 className="font-serif text-5xl font-normal tracking-[0.06em] md:text-7xl lg:text-8xl">PUNE ETHNIC</h1>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em]">
              {business.offerings.split(" • ").map((o, i, a) => (
                <li key={o} className="flex items-center gap-5">{o}{i < a.length - 1 && <span className="size-[5px] rotate-45 bg-gold" aria-hidden="true" />}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/collections" className={btn.gold}>EXPLORE COLLECTION</Link>
              <Link href="/contact" className={btn.ghost}>BOOK A VISIT</Link>
            </div>
          </div>
          <div className="relative order-1 mx-auto w-[calc(100%-16px)] max-w-sm md:order-2 md:max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-gold" aria-hidden="true" />
            <Photo src={images.hero || undefined} alt="Model wearing an embroidered sherwani" label="Hero: model in sherwani" ratio="aspect-[768/1124]" className="relative rounded-t-full" priority sizes="(min-width:768px) 40vw, 90vw" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl">Featured collections</h2>
          <p className="mt-3 text-charcoal/70">Categories shown are proposals and will match the store's actual inventory.</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {collections.map((c) => (
            <Link key={c.slug} href={`/collections?c=${c.slug}`} className="group relative block">
              <Photo src={c.image} alt={c.name} label={c.name} ratio="aspect-[3/4]" />
              <div className="absolute inset-x-0 bottom-0 bg-beige/90 p-4 text-charcoal transition group-hover:bg-gold group-hover:text-charcoal">
                <h3 className="font-serif text-xl md:text-2xl">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl">A CELEBRATION OF INDIAN ELEGANCE</h2>
          <p className="mt-6 leading-relaxed text-charcoal/75">Pune Ethnic offers ethnic wear from Sadashiv Peth, Pune, for weddings, festivals and family occasions. Visit the store to see the range in person, or message us on WhatsApp to ask about a particular piece.</p>
          <Link href="/about" className={btn.primary + " mt-8"}>ABOUT THE STORE</Link>
        </Reveal>
      </section>

      <section className="relative isolate bg-beige px-5 py-24 text-center text-charcoal lg:py-36">
        <Photo src={images.weddingBanner || undefined} alt="Groom wedding fashion" label="Wedding banner photo" ratio="" className="absolute inset-0 -z-10 !bg-beige opacity-50" sizes="100vw" />
        <h2 className="mx-auto max-w-3xl font-serif text-4xl md:text-6xl">MAKE EVERY WEDDING MOMENT TIMELESS.</h2>
        <Link href="/wedding-wear" className={btn.gold + " mt-8"}>EXPLORE WEDDING COLLECTION</Link>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-4xl md:text-5xl">Gallery</h2>
          <Link href="/gallery" className="text-sm underline underline-offset-4 hover:text-gold">View all</Link>
        </div>
        <GalleryGrid limit={4} />
      </section>

      <section className="relative isolate bg-beige px-5 py-24 text-charcoal lg:py-32">
        <Photo src={images.about || undefined} alt="Pune Ethnic storefront" label="Storefront" ratio="" className="absolute inset-0 -z-10 !bg-beige opacity-30" sizes="100vw" />
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Visit our store</h2>
            <div className="mt-4 h-px w-16 bg-gold" />
            <address className="mt-6 space-y-2 not-italic">
              <p className="font-serif text-2xl">{business.name}</p>
              <p>{business.address}</p>
              <p><a className="underline" href={`tel:${business.phone}`}>{business.phoneDisplay}</a></p>
              <p>{business.hours}</p>
            </address>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={btn.gold}>GET DIRECTIONS</a>
            <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className={btn.ghost}>WHATSAPP ENQUIRY</a>
          </div>
        </div>
      </section>
    </>
  );
}
