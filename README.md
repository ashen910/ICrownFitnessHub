# iCrown Fitness Hub

A cinematic, mobile-first website for iCrown Fitness Hub, a gym at Balummahra Junction, Gampaha, Sri Lanka. It is built around the gym's real photos and workout reels.

## Features

- **Parallax hero:** a full-screen gym photo with a masked headline reveal.
- **Navbar:** transparent over the hero, solid after scrolling, highlights the current section, and has a full-screen animated mobile menu.
- **About and facilities:** an editorial photo layout, using only equipment visible in the gym's photos.
- **Workout reels:** three portrait videos that load and play only when tapped, with native controls.
- **Gallery:** 18 gym photos in a masonry layout with a lightbox. Esc closes it and the arrow keys step through photos.
- **Member reviews:** real Google reviews supplied by the gym.
- **Membership pricing:** monthly prices shown beside the offer poster, with WhatsApp and call buttons.
- **Contact:** coach details and a Google Maps embed centred on the gym.
- **Search and sharing:** page metadata, Open Graph image, favicon and LocalBusiness structured data.
- **Accessibility:** reduced-motion support, visible focus styles, semantic HTML and descriptive alt text.

## Tech stack

Next.js (App Router), TypeScript, Tailwind CSS 4, Motion (Framer Motion), Lucide React.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # TypeScript check
npm run build      # production build
npm start          # run the production build
```

No environment variables are needed. The project deploys to Vercel as it is.

## Project structure

```
app/            layout, page, global styles, favicon
components/     Navbar, Hero, About, Facilities, Reels, Gallery,
                Mantra, Testimonials, Membership, Contact, Footer
data/site.ts    all business details, prices, reviews and media paths
public/media/   logo, offer poster, photos/ (webp), videos/ (mp4 + posters)
```

## Updating content

Everything the gym may want to change is in `data/site.ts`.

| What | Where in `data/site.ts` |
| --- | --- |
| Address, coach name, phone, social links, map | `site` |
| Prices and offer details | `pricing` |
| Customer reviews | `reviews` |
| Gallery and facility photos | `photos` (files go in `public/media/photos`) |
| Workout videos | `videos` (files go in `public/media/videos`) |

Opening hours are not set yet. Add them to `site.hours`.

To add a photo, save it as a `.webp` of about 1600px on the long edge in `public/media/photos`. Then add an entry to `photos`, marking it `portrait` if it is taller than wide.

## Content notes

- Prices, address, contact details and reviews were supplied by the gym owner. Reviews are shown as posted on Google.
- No ratings, review counts, opening hours or other figures are shown, because none have been verified.
- All photos and videos belong to the gym.
