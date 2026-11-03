import type { Metadata } from "next";
import { business } from "@/data/site";
import { btn, generalMsg, waLink } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Contact Pune Ethnic in Sadashiv Peth, Pune by phone, WhatsApp or visit the store." };

export default function Page() {
  return (
    <>
      <PageHero title="Contact" />
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <address className="space-y-2 not-italic">
            <p className="font-serif text-3xl">{business.name}</p>
            <p>{business.address}</p>
            <p><a className="underline" href={`tel:${business.phone}`}>{business.phoneDisplay}</a></p>
            <p>{business.hours}</p>
          </address>
          <div className="flex flex-wrap gap-4">
            <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className={btn.primary}>WHATSAPP ENQUIRY</a>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={btn.ghost}>OPEN IN MAPS</a>
          </div>
          <iframe title="Pune Ethnic on Google Maps" loading="lazy" className="h-72 w-full border-0"
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapsEmbedQuery)}&output=embed`} referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div><h2 className="mb-6 font-serif text-3xl">Send an enquiry</h2><ContactForm /></div>
      </section>
    </>
  );
}
