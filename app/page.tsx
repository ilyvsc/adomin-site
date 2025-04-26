import { HeroSection } from "@/components/hero-section";
import { FanAppreciation } from "@/components/fan-appreciation";
import { FeaturedSongs } from "@/components/featured-songs";
import { DiscographyTimeline } from "@/components/discography-timeline";
import { ConnectSection } from "@/components/connect-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FanAppreciation />
      <FeaturedSongs />
      <DiscographyTimeline />
      <ConnectSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
