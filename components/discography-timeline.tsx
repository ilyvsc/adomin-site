"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Song, timelineSongs } from "@/app/songs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DiscographyTimeline() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [open, setOpen] = useState(false);

  const handleSongClick = (song: Song) => {
    setSelectedSong(song);
    setOpen(true);
  };

  // Group songs by year
  const songsByYear = timelineSongs.reduce(
    (acc, song) => {
      if (!acc[song.year]) {
        acc[song.year] = [];
      }
      acc[song.year].push(song);
      return acc;
    },
    {} as Record<number, Song[]>,
  );

  // Get years in ascending order
  const years = Object.keys(songsByYear)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl lg:px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
          Ado's Musical Journey
        </h2>
        <p className="text-center text-accent-foreground mb-16 max-w-2xl mx-auto">
          Explore Ado's discography from 2020 to the present. Click on any song
          to learn more.
        </p>

        <div className="relative pb-12">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-[3px] bg-ado-key/30"></div>

          {/* Timeline entries */}
          <div className="space-y-24">
            {years.map((year, yearIndex) => (
              <div key={year} className="relative">
                {/* Year marker */}
                <div className="flex justify-center mb-12">
                  <div className="bg-ado-key text-white px-6 py-2 rounded-full text-lg font-bold z-10">
                    {year}
                  </div>
                </div>

                {/* Songs for this year */}
                <div className="space-y-24">
                  {songsByYear[year].map((song, songIndex) => {
                    const isLeft = (songIndex + yearIndex) % 2 === 0;
                    return (
                      <div
                        key={song.id}
                        className={`relative flex flex-col md:flex-row items-center md:items-start ${
                          isLeft ? "md:flex-row" : "md:flex-row-reverse"
                        } gap-8`}
                      >
                        {/* Video */}
                        <div className="w-full md:w-1/2">
                          <div className="bg-background/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all hover:scale-[1.015]">
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
                          </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 space-y-4">
                          <div className="inline-block bg-ado-key text-white px-4 py-1 rounded-full text-sm">
                            {song.releaseDate}
                          </div>
                          <h3 className="text-2xl font-bold">
                            {song.title.english}{" "}
                            <span className="text-ado-key">
                              ({song.title.japanese})
                            </span>
                          </h3>
                          <p className="text-accent-foreground">
                            {song.description}
                          </p>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="bg-ado-blue text-ado-white hover:bg-ado-blue/80"
                            onClick={() => handleSongClick(song)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Song details modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl rounded-xl shadow-2xl bg-background/90 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              {selectedSong?.title.english}{" "}
              <span className="text-ado-key">
                ({selectedSong?.title.japanese})
              </span>
            </DialogTitle>
            <DialogDescription>
              Released: {selectedSong?.releaseDate}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-accent-foreground mb-6">
              {selectedSong?.description}
            </p>
            <div className="aspect-video bg-accent rounded-md overflow-hidden mb-6">
              {selectedSong && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedSong.youtubeId}`}
                  title={`${selectedSong.title.english} by Ado`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              )}
            </div>

            <h4 className="text-lg font-semibold mb-2">Lyrics</h4>
            <Tabs defaultValue="japanese" className="w-full">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="japanese">Japanese</TabsTrigger>
                <TabsTrigger value="romaji">Romaji</TabsTrigger>
                <TabsTrigger value="english">English</TabsTrigger>
              </TabsList>

              <TabsContent
                value="japanese"
                className="mt-4 whitespace-pre-line"
              >
                {selectedSong?.lyrics.japanese}
              </TabsContent>
              <TabsContent value="romaji" className="mt-4 whitespace-pre-line">
                {selectedSong?.lyrics.romaji}
              </TabsContent>
              <TabsContent value="english" className="mt-4 whitespace-pre-line">
                {selectedSong?.lyrics.english}
              </TabsContent>
            </Tabs>
          </div>

          <DialogClose className="absolute right-4 top-4">
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
