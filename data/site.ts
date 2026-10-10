/** CENTRAL CONFIG: every business detail and media path lives here. */
export const site = {
  name: "iCrown Fitness Hub",
  tagline: "Train Strong. Live Strong.",
  mapsUrl: "https://maps.app.goo.gl/tupKpFzc4B3Rs4F16",
  // Coordinates resolved from the Google Maps link. The street address is not exposed by the link, so it is left blank.
  mapEmbedUrl: "https://www.google.com/maps?q=7.0666941,80.0121295&z=17&output=embed",
  address: "Balummahra Junction, Gampaha 11056",
  hours: "", // not provided yet
  coach: { name: "Malinga Fernando", phoneDisplay: "071 996 9699", phoneIntl: "94719969699" },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579352010667",
    tiktok: "https://www.tiktok.com/@icrown.fitness.hu",
  },
};

/** Prices taken from the official offer poster (prices are per month). */
export const pricing = {
  special: { label: "After O/Ls Fitness Special", price: "Rs. 4,500", note: "18 & below · Ladies & Gents", period: "per month", slot: "Training time 1:00 PM – 4:00 PM only" },
  regular: [{ label: "Gents", price: "Rs. 7,000" }, { label: "Ladies", price: "Rs. 5,500" }],
};

/** Real Google reviews supplied by the gym owner (text kept as posted). Add new ones here. */
export const reviews = [
  { author: "Tharusha Ganepola", text: "Great gym with a fantastic team of coaches. They understand your needs and customize training. I feel stronger and more confident." },
  { author: "CHAN", text: "I don't usually write reviews, but gotta say this is one of the nicest gyms I've been to in the area. Other gyms in the area are pretty mid. Ngl this gym is pretty nice. AC, good equipment, excellent coaches and really good customer service. Highly recommend. I drive 30mins to this place cuz it's really good. Worth every penny." },
  { author: "Sindusanka Gamage", text: "Nice environment and have good machines.. Also good trainers are there. Ranil and Hussan are supportive trainers. Can recommend the place." },
  { author: "D. Sandaruwan Thennakoon", text: "Supiri 💪💪💪💪. Best equipment, Best trainers. As well as trainees have good attitude. Couldn't you find a GYM? No doubt this is the place you are looking. Truest me. …" },
  { author: "Asker", text: "The coqches are really nice and the crowd is also chill. Good overall quality in the gym." },
];

export type Photo = { file: string; alt: string; portrait: boolean };
const p = (file: string, alt: string, portrait = false): Photo => ({ file, alt, portrait });

/** All gym photos (public/media/photos/*.webp), in lightbox order. */
export const photos: Record<string, Photo> = {
  hexHall: p("hex-hall", "Main training floor under the hexagon LED ceiling"),
  hexHallWide: p("hex-hall-wide", "Wide view of the gym floor and hexagon lighting"),
  panorama: p("floor-panorama", "Open gym floor with dumbbells and benches"),
  dumbbells: p("dumbbell-wall", "Rack of rubber hex dumbbells", true),
  plateRacks: p("plate-racks-hex-2", "Weight plate racks beneath the LED ceiling", true),
  plateRacksB: p("plate-racks-hex", "Plate-loaded racks and machines", true),
  treadmill: p("treadmill-neon", "Treadmills lit by red neon", true),
  treadmillRow: p("treadmill-row-neon", "Row of treadmills and machines"),
  pec: p("pec-machine", "Pec fly machine with bench", true),
  bench: p("bench-incline-floor", "Benches and incline station on the floor"),
  inclineBench: p("incline-bench-floor", "Incline bench station", true),
  spin: p("spin-bike-neon", "Spin bike beside the neon-lit window", true),
  smith: p("plate-rack-smith", "Plate storage and smith machine", true),
  racksHall: p("racks-hall", "Squat racks and machines across the hall"),
  signFloor: p("neon-sign-floor", "Neon sign above the training floor"),
  signMachines: p("neon-sign-machines", "Neon sign above the machine area", true),
  signAisle: p("neon-sign-aisle", "Neon-lit aisle through the gym", true),
  hexRacks: p("hex-ceiling-racks", "Power racks under the hexagon lights", true),
};
export const photoSrc = (photo: Photo) => `/media/photos/${photo.file}.webp`;
export const photoSize = (photo: Photo) => (photo.portrait ? { width: 1200, height: 1600 } : { width: 1600, height: 1200 });

/** Workout reels (public/media/videos). Portrait 9:16. */
export const videos = [1, 2, 3].map((n) => ({ src: `/media/videos/workout-${n}.mp4`, poster: `/media/videos/workout-${n}.jpg`, title: `Workout reel ${n}` }));

export const navLinks = [["Home", "home"], ["About", "about"], ["Facilities", "facilities"], ["Gallery", "gallery"], ["Reviews", "reviews"], ["Membership", "membership"], ["Contact", "contact"]] as const;
