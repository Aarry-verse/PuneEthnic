import type { MetadataRoute } from "next";
import { business, products } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/collections", "/wedding-wear", "/about", "/gallery", "/contact", ...products.map((p) => `/collections/${p.slug}`)];
  return pages.map((p) => ({ url: `${business.siteUrl}${p}` }));
}
