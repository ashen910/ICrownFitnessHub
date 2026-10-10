import { photos, type Photo } from "@/data/site";
import { GymPhoto } from "./Photo";
import { Reveal } from "./Motion";

/** Only equipment visible in the supplied photos is listed. Span classes make the grid editorial, not uniform. */
const TILES: { title: string; photo: Photo; span: string }[] = [
  { title: "Dumbbell wall", photo: photos.dumbbells, span: "md:col-span-4 md:row-span-2" },
  { title: "Plate-loaded racks", photo: photos.plateRacks, span: "md:col-span-4" },
  { title: "Cardio floor", photo: photos.treadmillRow, span: "md:col-span-4" },
  { title: "Resistance machines", photo: photos.pec, span: "md:col-span-4 md:row-span-2" },
  { title: "Benches and free-weight zone", photo: photos.bench, span: "md:col-span-8" },
];

/** Facilities: asymmetric editorial grid with a slow image zoom on hover. */
export function Facilities() {
  return (
    <section id="facilities" className="bg-coal py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal><h2 className="max-w-3xl font-display text-5xl uppercase leading-[0.95] md:text-8xl">The floor you <span className="text-ember">train on.</span></h2></Reveal>
        <div className="mt-14 grid auto-rows-[18rem] gap-3 md:grid-cols-12 md:auto-rows-[15rem]">
          {TILES.map(({ title, photo, span }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08} className={`group relative overflow-hidden ${span}`}>
              <GymPhoto photo={photo} sizes="(min-width:768px) 40vw, 100vw" className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <h3 className="absolute bottom-4 left-4 font-display text-2xl uppercase">{title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
