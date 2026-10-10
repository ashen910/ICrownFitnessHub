import { MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Motion";

const linkClass = "inline-flex items-center gap-2 border border-bone/30 px-5 py-3 font-semibold uppercase tracking-widest transition hover:border-ember hover:text-ember active:scale-95";

/** Contact: coach details, social links and the embedded map. */
export function Contact() {
  return (
    <section id="contact" className="bg-coal py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">Ready to start your <span className="text-ember">journey?</span></h2>
          <p className="mt-8 text-smoke">Coach</p>
          <p className="font-display text-3xl uppercase">{site.coach.name}</p>
          <a href={`tel:+${site.coach.phoneIntl}`} className="mt-1 inline-flex items-center gap-2 text-2xl font-semibold text-ember"><Phone size={22} /> {site.coach.phoneDisplay}</a>
          {site.address && <p className="mt-4 text-bone/80">{site.address}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}><MapPin size={18} /> Google Maps</a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>Facebook</a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className={linkClass}>TikTok</a>
          </div>
          <p className="mt-10 font-display text-3xl uppercase">Follow the movement.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <iframe title="iCrown Fitness Hub on Google Maps" src={site.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full border-0" />
        </Reveal>
      </div>
    </section>
  );
}
