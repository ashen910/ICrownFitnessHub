import { Reveal } from "./Motion";

/** Statements come from the gym's own poster slogans; typography carries the section. */
const LINES = ["Build strength.", "Stay active.", "Start young, train right."];

/** Why train here: oversized type separated by rules, no icon cards. */
export function Mantra() {
  return (
    <section className="border-y border-bone/10 bg-coal py-24 md:py-36" aria-label="Our approach">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {LINES.map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <p className={`border-b border-bone/10 py-6 font-display text-[clamp(2.5rem,9vw,8rem)] uppercase leading-none transition-colors hover:text-ember ${i === 1 ? "md:pl-[12vw]" : i === 2 ? "md:pl-[24vw]" : ""}`}>{line}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
