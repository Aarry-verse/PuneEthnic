import Image from "next/image";
export function Photo({ src, alt, label, ratio = "aspect-[4/5]", className = "", priority = false, sizes = "(min-width:1024px) 33vw, 100vw" }:
  { src?: string; alt: string; label?: string; ratio?: string; className?: string; priority?: boolean; sizes?: string }) {
  return (
    <div className={`relative overflow-hidden bg-beige ${ratio} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover transition duration-700 group-hover:scale-105" />
      ) : (
        <div role="img" aria-label={`${alt} (placeholder)`} className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-charcoal/55">
          <span className="text-[10px] tracking-[0.3em]">PLACEHOLDER PHOTO</span>
          <span className="font-serif text-xl">{label ?? alt}</span>
        </div>
      )}
    </div>
  );
}
