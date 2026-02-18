import { motion } from "framer-motion";
import { Link } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center border-b border-border/5 bg-background/80 px-6 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Wordmark */}
        <div className="flex items-center gap-2">
          <a href="#" className="font-display text-2xl font-bold uppercase tracking-tighter text-foreground hover:text-primary transition-colors">
            Veridian
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Lineup", "Experience", "Menu", "Private Events"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="#calendar" className="hidden rounded-full border border-primary/50 bg-primary/10 px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all md:block">
            Tickets
          </a>
          <button className="block md:hidden text-foreground">
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
            </div>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
