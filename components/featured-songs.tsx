import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredSongs } from "@/app/songs";

export function FeaturedSongs() {
  return (
    <section className="py-20 bg-ado-key/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Featured Songs
        </h2>
        <p className="text-center text-accent-foreground mb-12 max-w-2xl mx-auto">
          Explore some of Ado's most popular and influential songs that showcase
          her incredible vocal talent and emotional depth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredSongs.map((song) => (
            <div
              key={song.id}
              className="space-y-4 bg-background/50 rounded-lg overflow-hidden hover:bg-background/80 transition-colors"
            >
              <div className="aspect-video bg-accent relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${song.youtubeId}`}
                  title={`${song.title.english} by Ado`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {song.title.english}{" "}
                  <span className="text-ado-key">({song.title.japanese})</span>
                </h3>
                <p className="text-accent-foreground mt-2">
                  {song.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/discography">
            <Button
              variant="default"
              size="lg"
              className="bg-ado-key hover:bg-ado-key/80"
            >
              View Full Discography
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
