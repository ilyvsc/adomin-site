import React from "react";
import { ConnectSection } from "@/components/connect-section";
import { DiscographyTimeline } from "@/components/discography-timeline";
import { FanAppreciation } from "@/components/fan-appreciation";
import { FeaturedSongs } from "@/components/featured-songs";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { NewsletterSection } from "@/components/newsletter-section";

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
