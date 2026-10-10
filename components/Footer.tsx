import { site, navLinks } from "@/data/site";
import { Logo } from "./Navbar";

/** Footer with branding, quick links and dynamic copyright year. */
export function Footer() {
  return (
    <footer className="px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div><Logo /><p className="mt-4 font-display text-2xl uppercase text-smoke">{site.tagline}</p></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-widest text-smoke">
          {navLinks.map(([label, id]) => <li key={id}><a href={`#${id}`} className="hover:text-ember">{label}</a></li>)}
          <li><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ember">Google Maps</a></li>
        </ul></nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-smoke">{site.address} · © {new Date().getFullYear()} {site.name}<br/> Developed by <a href="https://ashenwijenayakeportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-ember">Ashen Wijenayake</a></p>
    </footer>
  );
}
