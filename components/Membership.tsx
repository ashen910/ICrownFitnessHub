import Image from "next/image";
import { pricing, site } from "@/data/site";
import { Reveal } from "./Motion";

const whatsappLink = `https://wa.me/${site.coach.phoneIntl}?text=${encodeURIComponent("Hi, I'd like to enquire about membership at iCrown Fitness Hub.")}`;

/** Membership: official poster prices. Edit data/site.ts to change them. */
export function Membership() {
  return (
    <section id="membership" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-2">
      <Reveal>
        <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">Your fitness journey <span className="text-ember">starts here.</span></h2>
        <div className="mt-10 border-l-4 border-ember bg-coal p-6 md:p-8">
          <p className="font-semibold uppercase tracking-widest text-amber">{pricing.special.label}</p>
          <p className="mt-2 font-display text-7xl text-ember md:text-8xl">{pricing.special.price} <span className="text-2xl text-smoke">/ {pricing.special.period}</span></p>
          <p className="mt-2 text-bone">{pricing.special.note}</p>
          <p className="text-smoke">{pricing.special.slot}</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {pricing.regular.map((tier) => (
            <div key={tier.label} className="border border-bone/15 p-5">
              <p className="text-sm uppercase tracking-widest text-smoke">Regular · {tier.label}</p>
              <p className="mt-1 font-display text-4xl">{tier.price} <span className="text-base text-smoke">/ month</span></p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-ember px-6 py-4 font-semibold uppercase tracking-widest text-black transition hover:bg-amber active:scale-95">Enquire on WhatsApp</a>
          <a href={`tel:+${site.coach.phoneIntl}`} className="border border-bone/40 px-6 py-4 font-semibold uppercase tracking-widest transition hover:border-ember hover:text-ember active:scale-95">Call the gym</a>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <Image src="/media/offer-poster.webp" alt="iCrown Fitness Hub After O/Ls fitness special poster with membership prices" width={861} height={1280} sizes="(min-width:1024px) 45vw, 100vw" className="mx-auto w-full max-w-md" />
      </Reveal>
    </section>
  );
}
