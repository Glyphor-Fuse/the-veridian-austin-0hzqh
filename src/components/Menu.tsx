import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MenuPreview() {
  return (
    <section id="menu" className="bg-secondary py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-secondary-foreground md:text-5xl">
            Curated <span className="text-primary">Tastes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/70">
            Craft cocktails and small plates designed to accompany the show, not interrupt it.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-border/5 bg-background/30 backdrop-blur-sm transition-colors hover:bg-background/50">
            <CardHeader>
              <Star className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="font-display text-2xl uppercase text-foreground">Signature Sips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="flex justify-between">
                <span>The Veridian 75</span>
                <span className="text-foreground">$16</span>
              </div>
              <div className="flex justify-between">
                <span>Smoke & Mirrors</span>
                <span className="text-foreground">$18</span>
              </div>
              <div className="flex justify-between">
                <span>Austin Midnight</span>
                <span className="text-foreground">$15</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/5 bg-background/30 backdrop-blur-sm transition-colors hover:bg-background/50">
            <CardHeader>
              <Star className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="font-display text-2xl uppercase text-foreground">Wine & Bubbles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="flex justify-between">
                <span>House Cabernet</span>
                <span className="text-foreground">$14</span>
              </div>
              <div className="flex justify-between">
                <span>Pet-Nat Sparkler</span>
                <span className="text-foreground">$16</span>
              </div>
              <div className="flex justify-between">
                <span>Orange Natural</span>
                <span className="text-foreground">$15</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/5 bg-background/30 backdrop-blur-sm transition-colors hover:bg-background/50">
            <CardHeader>
              <Star className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="font-display text-2xl uppercase text-foreground">Small Plates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="flex justify-between">
                <span>Truffle Arancini</span>
                <span className="text-foreground">$14</span>
              </div>
              <div className="flex justify-between">
                <span>Wagyu Sliders (2)</span>
                <span className="text-foreground">$18</span>
              </div>
              <div className="flex justify-between">
                <span>Charcuterie Board</span>
                <span className="text-foreground">$24</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default MenuPreview;
