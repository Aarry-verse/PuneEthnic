// EDIT THIS FILE to update business details, collections and products.
// Anything left empty ("" or undefined) is simply not shown on the site.

export const business = {
  name: "Pune Ethnic",
  phone: "+919834142285",
  phoneDisplay: "+91 98341 42285",
  whatsapp: "919834142285",
  // Verify and replace with the full street address (building, lane, pincode).
  address: "Sadashiv Peth, Pune, Maharashtra, India",
  hours: "10 AM – 10 PM, every day (as listed on Google; please verify)",
  mapsUrl: "https://maps.app.goo.gl/bBS3pTaimE1fLp5TA",
  mapsEmbedQuery: "Pune Ethnic, Sadashiv Peth, Pune",
  instagram: "", // e.g. "https://instagram.com/yourhandle"
  tagline: "Designer Clothes", // verify areas/spelling with the owner
  offerings: "Premium Sherwanis • Designer Suits • Jodhpuri • Indo-Western • Blazers • Custom Fittings Available",
  rating: "4.3/5 on Google (44 reviews)",
  announcement: "", // Only add a verified announcement, e.g. "Open daily until 10 PM"
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://puneethnic.example",
};

export type Collection = { slug: string; name: string; blurb: string; image?: string };
export type Product = {
  slug: string; name: string; collection: string; description: string;
  weddingFeatured?: boolean;
  price?: string;       // only when verified, e.g. "₹12,500"
  sizes?: string[];     // only when verified
  images?: string[];    // e.g. ["/images/products/sherwani-1.jpg"]
  placeholder?: boolean;
};

// Proposed categories: rename, remove or add to match real inventory.
export const collections: Collection[] = [
  { slug: "sherwanis", name: "Sherwanis", blurb: "Embroidered statement pieces for the groom.", image: "/images/photos/sherwani-grey-embroidery.jpg" },
  { slug: "wedding-wear", name: "Wedding Wear", blurb: "Outfits for the big day and the celebrations around it.", image: "/images/photos/ivory-sherwani-safa.jpg" },
  { slug: "indo-western", name: "Indo-Western", blurb: "Traditional silhouettes with a contemporary cut.", image: "/images/photos/store-interior.jpg" },
  { slug: "traditional-kurtas", name: "Traditional Kurtas", blurb: "Classic kurtas for everyday and occasion wear.", image: "/images/photos/kurtas-mannequins.jpg" },
  { slug: "festive-wear", name: "Festive Wear", blurb: "Dressed up for festivals and family gatherings.", image: "/images/photos/floral-embroidery-jacket.jpg" },
  { slug: "mens-ethnic", name: "Men's Ethnic Fashion", blurb: "The wider ethnic menswear range.", image: "/images/photos/sherwani-mannequins.jpg" },
];

// SAMPLE PRODUCTS: replace with the real catalogue. Remove `placeholder: true` once real.
const sample = (slug: string, name: string, collection: string, weddingFeatured = false, img?: string): Product => ({
  slug, name, collection, weddingFeatured, placeholder: true, images: img ? [img] : undefined,
  description: "Sample product description. Replace with the real details of this garment: fabric, work, colour and occasion.",
});
export const products: Product[] = [
  sample("sample-sherwani-1", "Sample Sherwani 1", "sherwanis", true, "/images/photos/sherwani-grey-embroidery.jpg"),
  sample("sample-sherwani-2", "Sample Sherwani 2", "sherwanis", true, "/images/photos/ivory-sherwani-safa.jpg"),
  sample("sample-wedding-1", "Sample Wedding Outfit 1", "wedding-wear", true, "/images/photos/rack-white-sherwanis.jpg"),
  sample("sample-indo-western-1", "Sample Indo-Western 1", "indo-western", true, "/images/photos/store-interior.jpg"),
  sample("sample-kurta-1", "Sample Kurta 1", "traditional-kurtas", false, "/images/photos/kurtas-mannequins.jpg"),
  sample("sample-festive-1", "Sample Festive Outfit 1", "festive-wear", false, "/images/photos/floral-embroidery-jacket.jpg"),
  sample("sample-mens-1", "Sample Menswear 1", "mens-ethnic", false, "/images/photos/sherwani-mannequins.jpg"),
  sample("sample-indo-western-2", "Sample Indo-Western 2", "indo-western", true, "/images/photos/indo-western-jacket.jpg"),
];

// Gallery: add { src: "/images/gallery/xyz.jpg", alt: "..." }. `ratio` is a Tailwind aspect class.
export const gallery: { src?: string; alt: string; ratio: string }[] = [
  { src: "/images/photos/rack-white-sherwanis.jpg", alt: "Rack of white sherwanis and turbans", ratio: "aspect-[4/5]" },
  { src: "/images/photos/storefront-day.jpg", alt: "Storefront by day", ratio: "aspect-[4/5]" },
  { src: "/images/photos/store-interior.jpg", alt: "Store interior", ratio: "aspect-[4/5]" },
  { src: "/images/photos/sherwani-grey-embroidery.jpg", alt: "Embroidered sherwani detail", ratio: "aspect-[4/5]" },
  { src: "/images/photos/floral-embroidery-jacket.jpg", alt: "Floral embroidered jacket", ratio: "aspect-[4/5]" },
  { src: "/images/photos/ivory-sherwani-safa.jpg", alt: "Ivory sherwani with safa", ratio: "aspect-[4/5]" },
  { src: "/images/photos/storefront-night.jpg", alt: "Storefront at night", ratio: "aspect-[3/2]" },
];

// Hero / banner images. Put files in /public/images and set the path.
export const images = { hero: "/images/photos/model-arch.jpg", weddingBanner: "/images/photos/sherwani-grey-embroidery.jpg", about: "/images/photos/storefront-day.jpg" } as Record<string, string>;
