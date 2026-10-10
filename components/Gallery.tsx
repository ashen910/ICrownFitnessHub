"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos, photoSrc } from "@/data/site";
import { GymPhoto } from "./Photo";
import { Reveal } from "./Motion";

const allPhotos = Object.values(photos);

/** Masonry gallery with keyboard-accessible lightbox (Esc, arrows, prev/next buttons). */
export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((dir: number) => setOpenIndex((i) => (i === null ? i : (i + dir + allPhotos.length) % allPhotos.length)), []);

  // Keyboard controls and scroll lock while open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", onKey); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [openIndex, close, step]);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-36">
      <Reveal><h2 className="font-display text-5xl uppercase md:text-8xl">Inside <span className="text-ember">iCrown</span></h2></Reveal>
      <div className="mt-12 columns-2 gap-3 md:columns-3">
        {allPhotos.map((photo, i) => (
          <button key={photo.file} onClick={() => setOpenIndex(i)} aria-label={`Enlarge: ${photo.alt}`} className="group mb-3 block w-full overflow-hidden">
            <GymPhoto photo={photo} sizes="(min-width:768px) 33vw, 50vw" className="w-full transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label="Photo viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4" onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photoSrc(allPhotos[openIndex])} alt={allPhotos[openIndex].alt} className="max-h-[88vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
            <button onClick={close} aria-label="Close" autoFocus className="absolute right-4 top-4 p-3"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-2 p-3"><ChevronLeft size={36} /></button>
            <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-2 p-3"><ChevronRight size={36} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
