import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = { title: "Gallery", description: "Photographs of ethnic wear and the Pune Ethnic store in Sadashiv Peth, Pune." };

export default function Page() {
  return (
    <>
      <PageHero title="Gallery" text="Placeholder frames until real store photographs are added." />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><GalleryGrid /></section>
    </>
  );
}
