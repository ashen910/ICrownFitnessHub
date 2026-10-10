"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { photos } from "@/data/site";
import { GymPhoto } from "./Photo";

const HEADLINE = ["BUILD YOUR", "STRONGER", "SELF."];

/** Cinematic hero: real gym photo with scroll parallax and a masked headline reveal. */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <GymPhoto photo={photos.hexHall} sizes="100vw" priority className="h-full w-full object-cover" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <h1 className="font-display text-[clamp(3.5rem,13vw,11rem)] uppercase leading-[0.9]">
          {HEADLINE.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span className={`block ${i === 2 ? "text-ember" : ""}`} initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>{line}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg text-bone/80">Train with purpose. Push your limits. Become the strongest version of yourself at iCrown Fitness Hub.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#membership" className="bg-ember px-7 py-4 font-semibold uppercase tracking-widest text-black transition hover:bg-amber active:scale-95">Join the gym</a>
            <a href="#facilities" className="border border-bone/40 px-7 py-4 font-semibold uppercase tracking-widest transition hover:border-ember hover:text-ember active:scale-95">Explore the gym</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
