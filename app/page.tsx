import { Motion } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Facilities } from "@/components/Facilities";
import { Reels } from "@/components/Reels";
import { Gallery } from "@/components/Gallery";
import { Mantra } from "@/components/Mantra";
import { Testimonials } from "@/components/Testimonials";
import { Membership } from "@/components/Membership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

/** Page story: hook > place > proof > gallery > promise > price > contact. */
export default function HomePage() {
  return (
    <Motion>
      <Navbar />
      <main><Hero /><About /><Facilities /><Reels /><Gallery /><Mantra /><Testimonials /><Membership /><Contact /></main>
      <Footer />
    </Motion>
  );
}
