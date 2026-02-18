import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar as CalendarIcon } from "lucide-react";

type Artist = {
  id: number;
  name: string;
  date: string;
  genre: string;
  image: string;
};

const ARTISTS: Artist[] = [
  {
    id: 1,
    name: "Neon Shadows",
    date: "OCT 12",
    genre: "Synthwave / Electronic",
    image: "/images/artist-solo.png",
  },
  {
    id: 2,
    name: "The Velvet Echo",
    date: "OCT 15",
    genre: "Indie Alt-Rock",
    image: "/images/artist-band.png",
  },
  {
    id: 3,
    name: "Midnight Protocol",
    date: "OCT 22",
    genre: "Deep House",
    image: "/images/artist-dj.png",
  },
];

export function ArtistSpotlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ARTISTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-6xl">
              Featured <span className="text-primary">Acts</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Hand-picked headliners bringing world-class performance to the Veridian stage this month.
            </p>
          </div>
          <div className="flex gap-2">
            {ARTISTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-12 bg-primary" : "w-4 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl rounded-3xl border border-border/10 bg-background/50 p-2 md:aspect-[21/9]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={ARTISTS[index].id}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="relative h-full w-full overflow-hidden rounded-2xl"
            >
              <img
                src={ARTISTS[index].image}
                alt={ARTISTS[index].name}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 flex h-full flex-col justify-end p-8 md:w-1/2 md:p-12">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary"
                >
                  <CalendarIcon className="h-4 w-4" />
                  {ARTISTS[index].date}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-5xl font-bold uppercase text-foreground md:text-7xl"
                >
                  {ARTISTS[index].name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-2 text-lg text-foreground/80"
                >
                  {ARTISTS[index].genre}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button className="group bg-background text-foreground hover:bg-primary hover:text-primary-foreground">
                    Secure Tickets
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpotlight;
