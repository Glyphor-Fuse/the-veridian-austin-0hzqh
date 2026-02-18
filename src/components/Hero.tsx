import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Star } from 'lucide-react';

export function Hero() {
  const scrollToCalendar = () => {
    document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/videos/hero-concert.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-background/50 px-4 py-4.5 text-sm font-medium uppercase tracking-widest text-primary backdrop-blur-md">
            Austin's Premier Sound Sanctuary
          </span>
          <h1 className="font-display text-6xl font-bold uppercase tracking-tighter text-foreground sm:text-8xl md:text-9xl">
            The <span className="text-transparent bg-clip-text bg-gradient-to-b from-background to-background/60">Veridian</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Where high-fidelity sound meets modern luxury. <br className="hidden md:block" />
            Experience the night in its purest form.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button 
            size="lg" 
            onClick={scrollToCalendar}
            className="group h-14 bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-primary/90"
          >
            <Star className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
            Get Tickets
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 border-border/20 bg-background/5 px-8 text-base text-foreground backdrop-blur-sm hover:bg-background/10 hover:text-primary"
          >
            View Venue
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
