import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EVENTS = [
  {
    date: "OCT 12",
    day: "THU",
    artist: "Neon Shadows",
    support: "w/ Cyber Lust",
    price: "$45",
    status: "Selling Fast",
  },
  {
    date: "OCT 15",
    day: "SUN",
    artist: "The Velvet Echo",
    support: "w/ Soft Static",
    price: "$35",
    status: "Available",
  },
  {
    date: "OCT 18",
    day: "WED",
    artist: "Iron & Ash",
    support: "Acoustic Set",
    price: "$50",
    status: "Low Tickets",
  },
  {
    date: "OCT 22",
    day: "SAT",
    artist: "Midnight Protocol",
    support: "All Night Long",
    price: "$30",
    status: "Available",
  },
  {
    date: "OCT 29",
    day: "SAT",
    artist: "Emerald City",
    support: "Halloween Special",
    price: "$60",
    status: "Sold Out",
  },
];

export function Calendar() {
  return (
    <section id="calendar" className="w-full bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Upcoming <span className="text-primary-foreground/50">Shows</span>
          </h2>
          <Button variant="link" className="text-primary hover:text-primary/80">
            View Full Calendar &rarr;
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center gap-6 overflow-hidden rounded-xl border border-border/5 bg-card/40 p-6 transition-all hover:border-primary/50 hover:bg-card/60 md:flex-row"
            >
              {/* Date Box */}
              <div className="flex w-full shrink-0 flex-row items-center justify-between gap-4 md:w-32 md:flex-col md:justify-center md:border-r md:border-border/10 md:pr-6">
                <span className="font-display text-3xl font-bold text-foreground">{event.date}</span>
                <span className="text-sm font-medium text-muted-foreground">{event.day}</span>
              </div>

              {/* Artist Info */}
              <div className="flex grow flex-col items-start gap-1">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-primary md:text-3xl">
                  {event.artist}
                </h3>
                <p className="text-sm text-muted-foreground">{event.support}</p>
              </div>

              {/* Actions */}
              <div className="flex w-full flex-row items-center justify-between gap-6 md:w-auto">
                <div className="flex flex-col items-end gap-1">
                   {event.status === "Sold Out" ? (
                     <Badge variant="destructive" className="bg-red-900/50 text-red-200 hover:bg-red-900/50">Sold Out</Badge>
                   ) : event.status === "Low Tickets" ? (
                     <Badge variant="secondary" className="bg-background-900/30 text-foreground-200 hover:bg-background-900/30">Low Tickets</Badge>
                   ) : (
                     <span className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100">Presale</span>
                   )}
                </div>
                <Button
                  disabled={event.status === "Sold Out"}
                  className={`min-w-[140px] font-bold ${
                    event.status === "Sold Out"
                      ? "opacity-50"
                      : "bg-background text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {event.status === "Sold Out" ? "Join Waitlist" : `Buy ${event.price}`}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calendar;
