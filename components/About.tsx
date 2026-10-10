import { photos } from "@/data/site";
import { GymPhoto } from "./Photo";
import { Reveal } from "./Motion";

/** About: split layout, large photo with an offset secondary image. */
export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-12">
      <div className="relative lg:col-span-7">
        <Reveal><GymPhoto photo={photos.panorama} sizes="(min-width:1024px) 58vw, 100vw" className="aspect-[4/3] w-full object-cover" /></Reveal>
        <Reveal delay={0.15} className="absolute -bottom-10 right-4 hidden w-1/3 border-8 border-ink md:block">
          <GymPhoto photo={photos.dumbbells} sizes="20vw" className="aspect-[3/4] w-full object-cover" />
        </Reveal>
      </div>
      <div className="flex flex-col justify-center lg:col-span-5">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">More than a gym. A commitment to <span className="text-ember">yourself.</span></h2>
          <p className="mt-6 max-w-md text-lg text-smoke">iCrown Fitness Hub is a place to build strength, stay consistent and track your own progress, in a training space lit to keep you moving.</p>
          <a href="#contact" className="mt-8 inline-block border-b-2 border-ember pb-1 font-semibold uppercase tracking-widest transition hover:text-ember">Find the gym</a>
        </Reveal>
      </div>
    </section>
  );
}
