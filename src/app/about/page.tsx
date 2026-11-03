import type { Metadata } from "next";
import { business, images } from "@/data/site";
import { btn, generalMsg, waLink } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = { title: "About Us", description: "About Pune Ethnic, an ethnic wear store in Sadashiv Peth, Pune." };

export default function Page() {
  return (
    <>
      <PageHero title="About Pune Ethnic" />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:px-8">
        <Photo src={images.about || undefined} alt="Pune Ethnic store" label="Store photograph" />
        <div className="space-y-5 leading-relaxed text-charcoal/80">
          <h2 className="font-serif text-4xl text-charcoal">Ethnic wear in Sadashiv Peth</h2>
          <p>Pune Ethnic is an ethnic clothing store in Sadashiv Peth, Pune, with outfits for weddings, festivals and special occasions.</p>
          <p>Our approach is simple: help you find an outfit that suits the occasion. Visit the store or message us on WhatsApp to ask about what is available.</p>
          <p className="text-sm text-charcoal/50">Owner: add your own story, philosophy and store photographs here (src/app/about/page.tsx).</p>
        </div>
      </section>
      <section className="bg-beige px-5 py-16 text-center">
        <address className="space-y-1 not-italic"><p className="font-serif text-2xl">{business.name}</p><p>{business.address}</p><p>{business.phoneDisplay}</p><p>{business.hours}</p></address>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={btn.primary}>GET DIRECTIONS</a>
          <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className={btn.ghost}>WHATSAPP</a>
        </div>
      </section>
    </>
  );
}
