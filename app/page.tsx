import React from "react";

import { Footer } from "@/components/layout/Footer";
import { FanAppreciation } from "@/components/root/AppreciationNote";
import { ConnectSection } from "@/components/root/ConnectSection";
import { HeroSection } from "@/components/root/HeroSection";
import { NewsletterSection } from "@/components/root/Newsletter";
import { FeaturedSongs } from "@/components/root/featured-songs/FeaturedSongs";
import { DiscographyTimeline } from "@/components/root/timeline/Timeline";

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
