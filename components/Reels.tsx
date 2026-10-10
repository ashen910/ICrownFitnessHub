"use client";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { videos } from "@/data/site";
import { Reveal } from "./Motion";

/** One portrait reel: poster only until tapped, then plays muted with native controls. */
function ReelCard({ src, poster, title }: (typeof videos)[number]) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const startPlayback = () => { setIsPlaying(true); videoRef.current?.play(); };
  return (
    <div className="relative aspect-[9/16] overflow-hidden bg-coal">
      <video ref={videoRef} src={src} poster={poster} preload="none" playsInline muted controls={isPlaying} aria-label={title}
        onEnded={() => setIsPlaying(false)} className="h-full w-full object-cover" />
      {!isPlaying && (
        <button onClick={startPlayback} aria-label={`Play ${title}`} className="group absolute inset-0 grid place-items-center bg-ink/30">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-ember text-black transition group-hover:scale-110 group-active:scale-95"><Play fill="currentColor" /></span>
        </button>
      )}
    </div>
  );
}

/** Reel gallery: staggered vertical offsets on desktop for an editorial feel. */
export function Reels() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36" aria-labelledby="reels-title">
      <Reveal><h2 id="reels-title" className="font-display text-5xl uppercase leading-[0.95] md:text-8xl">Feel the energy.<br /><span className="text-ember">See the difference.</span></h2></Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {videos.map((video, i) => (
          <Reveal key={video.src} delay={i * 0.1} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}><ReelCard {...video} /></Reveal>
        ))}
      </div>
    </section>
  );
}
