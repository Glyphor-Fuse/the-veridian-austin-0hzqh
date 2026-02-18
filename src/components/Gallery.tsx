import { motion } from "framer-motion";

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/images/venue-lounge.png",
    alt: "VIP Lounge Area",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/cocktail-emerald.png",
    alt: "Signature Emerald Cocktail",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/crowd-atmosphere.png",
    alt: "Concert Crowd Atmosphere",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/artist-solo.png",
    alt: "Live Performance Close-up",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export function Gallery() {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-6xl">
            The <span className="text-primary">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Immerse yourself in a space designed for sonic perfection and visual splendor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:auto-rows-[300px] md:grid-cols-4">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
