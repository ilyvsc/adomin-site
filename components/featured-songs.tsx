"use client";

import Link from "next/link";
import React from "react";
import { featuredSongs } from "@/app/songs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function FeaturedSongs() {
  return (
    <section className="bg-ado-key/5 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Featured Songs
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-accent-foreground">
          Explore some of Ado's most popular and influential songs that showcase
          her incredible vocal talent and emotional depth.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredSongs.map((song) => (
            <Card
              key={song.id}
              className="overflow-hidden bg-background/50 transition-colors hover:bg-background/80"
            >
              <div className="relative aspect-video overflow-hidden bg-accent">
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
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-bold">
                  {song.title.english}{" "}
                  <span className="text-lg font-normal text-ado-key">
                    ({song.title.japanese})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-accent-foreground">{song.description}</p>
              </CardContent>
            </Card>
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
