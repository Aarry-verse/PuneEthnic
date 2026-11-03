import { business } from "@/data/site";
export const waLink = (message: string) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const generalMsg = "Hello Pune Ethnic, I am interested in your ethnic wear collection. Please share more details.";
export const productMsg = (name: string) => `Hello Pune Ethnic, I am interested in "${name}". Please share more details.`;
export const btn = {
  primary: "inline-flex items-center justify-center bg-gold px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-charcoal transition hover:bg-ivory",
  gold: "inline-flex items-center justify-center bg-gold px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-charcoal transition hover:bg-ivory",
  ghost: "inline-flex items-center justify-center border border-charcoal px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-charcoal transition hover:bg-gold hover:border-gold",
};
