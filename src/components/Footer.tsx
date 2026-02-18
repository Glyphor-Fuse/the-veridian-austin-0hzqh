import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/10 bg-background pt-24 text-foreground">
      {/* Background Loop for vibe */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden opacity-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover grayscale"
        >
          <source src="/videos/atmosphere-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="mb-6 font-display text-4xl font-bold uppercase tracking-tighter text-primary">
              The Veridian
            </h2>
            <p className="max-w-md text-muted-foreground">
              A refined sanctuary of sound in the heart of Austin. 
              Elevating the live music experience through design, fidelity, and hospitality.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold uppercase">Visit</h3>
            <address className="not-italic text-muted-foreground">
              200 Congress Ave<br />
              Austin, TX 78701<br />
              <br />
              <a href="mailto:hello@veridianaustin.com" className="hover:text-primary">
                hello@veridianaustin.com
              </a>
            </address>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold uppercase">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/10 hover:border-primary hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/10 hover:border-primary hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border/10 hover:border-primary hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border/5 pt-8 text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} The Veridian Austin.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
