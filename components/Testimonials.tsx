import { Star } from "lucide-react";
import { reviews, site } from "@/data/site";
import { Reveal } from "./Motion";

/** Five-star row (every supplied review is 5 stars). */
function Stars() {
  return <div className="flex gap-1 text-amber" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((n) => <Star key={n} size={16} fill="currentColor" />)}</div>;
}

/** Testimonials: first review set large as a pull quote, the rest staggered beside it. Real Google reviews only. */
export function Testimonials() {
  const [featured, ...others] = reviews;
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal><h2 className="font-display text-5xl uppercase leading-[0.95] md:text-8xl">Straight from <span className="text-ember">our members.</span></h2></Reveal>
      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <figure className="border-l-4 border-ember pl-6 md:pl-10">
            <Stars />
            <blockquote className="mt-4 font-display text-3xl uppercase leading-tight md:text-5xl">{featured.text}</blockquote>
            <figcaption className="mt-6 text-smoke">{featured.author} · Google review</figcaption>
          </figure>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
          {others.map((review, i) => (
            <Reveal key={review.author} delay={i * 0.08} className={i % 2 ? "sm:mt-10" : ""}>
              <figure className="h-full bg-coal p-6">
                <Stars />
                <blockquote className="mt-3 text-bone/90">{review.text}</blockquote>
                <figcaption className="mt-4 text-sm text-smoke">{review.author} · Google review</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
      <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-12 inline-block border-b-2 border-ember pb-1 font-semibold uppercase tracking-widest transition hover:text-ember">Read more on Google Maps</a>
    </section>
  );
}
