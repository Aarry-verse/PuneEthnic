"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { gallery } from "@/data/site";
import { Photo } from "./Photo";

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  const [i, setI] = useState<number | null>(null);
  const go = useCallback((d: number) => setI((c) => (c === null ? c : (c + d + items.length) % items.length)), [items.length]);
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setI(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [i, go]);
  return (
    <>
      <div className="columns-2 gap-4 lg:columns-4">
        {items.map((g, n) => (
          <button key={n} onClick={() => setI(n)} className="group mb-4 block w-full break-inside-avoid" aria-label={`Open image: ${g.alt}`}>
            <Photo src={g.src} alt={g.alt} ratio={g.ratio} sizes="(min-width:1024px) 25vw, 50vw" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {i !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-beige/95 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setI(null)}>
            <div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
              <Photo src={items[i].src} alt={items[i].alt} ratio={items[i].ratio} sizes="90vw" />
              <p className="mt-3 text-center text-sm text-charcoal/80">{items[i].alt}</p>
            </div>
            <button className="absolute right-5 top-5 text-3xl text-charcoal" aria-label="Close" onClick={() => setI(null)}>×</button>
            <button className="absolute left-3 top-1/2 p-3 text-3xl text-charcoal" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
            <button className="absolute right-3 top-1/2 p-3 text-3xl text-charcoal" aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
