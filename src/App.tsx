import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ArtistSpotlight } from "./components/ArtistSpotlight";
import { Calendar } from "./components/Calendar";
import { Gallery } from "./components/Gallery";
import { MenuPreview } from "./components/Menu";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="bottom-right" theme="dark" />
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-black">
          <Navbar />
          <Hero />
          <ArtistSpotlight />
          <Calendar />
          <Gallery />
          <MenuPreview />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
