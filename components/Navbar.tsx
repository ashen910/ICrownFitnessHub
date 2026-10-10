"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site, navLinks } from "@/data/site";

/** Official iCrown logo (recoloured for dark backgrounds). */
export function Logo() {
  return (
    <a href="#home" className="flex items-center" aria-label={`${site.name} home`}>
      <Image src="/media/logo.png" alt={site.name} width={520} height={428} priority className="h-14 w-auto" />
    </a>
  );
}

/** Transparent-to-solid navbar with active-section highlight and full-screen mobile menu. */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Switch to a solid background after leaving the hero
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // Lock page scroll and close on Escape while the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${isScrolled || isOpen ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />
        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} aria-current={active === id ? "true" : undefined}
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-ember ${active === id ? "text-ember" : "text-bone/80"}`}>{label}</a></li>
          ))}
          <li><a href="#membership" className="bg-ember px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-amber active:scale-95">Join now</a></li>
        </ul>
        <button className="relative z-50 grid h-10 w-10 place-items-center lg:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span className={`absolute h-0.5 w-6 bg-bone transition ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-6 bg-bone transition ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 lg:hidden">
            <ul className="space-y-2">
              {navLinks.map(([label, id], i) => (
                <motion.li key={id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <a href={`#${id}`} onClick={() => setIsOpen(false)} className="font-display text-5xl uppercase hover:text-ember">{label}</a>
                </motion.li>
              ))}
            </ul>
            <a href="#membership" onClick={() => setIsOpen(false)} className="mt-10 bg-ember py-4 text-center font-semibold uppercase tracking-widest text-black">Join now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
