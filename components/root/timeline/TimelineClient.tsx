"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Song } from "@/types/Music";

import { NicoNicoPlayer, YouTubePlayer } from "@/utils/VideoEmbed";

interface TimelineClientProps {
  readonly songs: readonly Song[];
}

export function TimelineClient({ songs }: TimelineClientProps) {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [open, setOpen] = useState(false);

  const handleSongClick = (song: Song) => {
    setSelectedSong(song);
    setOpen(true);
  };

  // Group songs by year
  const songsByYear = songs.reduce(
    (acc, song) => {
      acc[song.year] ??= [];
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
    <section className="bg-background py-20">
      <div className="container mx-auto max-w-5xl px-4 lg:px-6">
        <h2 className="mb-8 text-center text-4xl font-bold text-foreground md:text-5xl">
          Ado's Musical Journey
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-accent-foreground">
          Explore Ado's discography from 2020 to the present. Click on any song
          to learn more.
        </p>

        <div className="relative pb-12">
          {/* Vertical timeline line */}
          <div className="absolute inset-y-0 left-1/2 hidden w-[3px] bg-ado-key/30 md:block"></div>

          {/* Timeline entries */}
          <div className="space-y-24">
            {years.map((year, yearIndex) => (
              <div key={year} className="relative">
                {/* Year marker */}
                <div className="mb-12 flex justify-center">
                  <div className="z-10 rounded-full bg-ado-key px-6 py-2 text-lg font-bold text-white">
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
                        className={`relative flex flex-col items-center md:flex-row md:items-start ${
                          isLeft ? "md:flex-row" : "md:flex-row-reverse"
                        } gap-8`}
                      >
                        {/* Video */}
                        <div className="w-full md:w-1/2">
                          <div className="overflow-hidden rounded-xl bg-background/60 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.015]">
                            <div className="relative aspect-video overflow-hidden">
                              {song.youtubeId ? (
                                <YouTubePlayer song={song} />
                              ) : song.nicoId ? (
                                <NicoNicoPlayer song={song} />
                              ) : (
                                <div className="flex h-full items-center justify-center text-muted-foreground">
                                  No preview available
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="w-full space-y-4 md:w-1/2">
                          <div className="inline-block rounded-full bg-ado-key px-4 py-1 text-sm text-white">
                            {song.releaseDate}
                          </div>
                          <h3 className="text-2xl font-bold">
                            {song.title.english}{" "}
                            {song.title.japanese && (
                              <span className="text-ado-key">
                                ({song.title.japanese})
                              </span>
                            )}
                          </h3>
                          <p className="text-accent-foreground">
                            {song.description}
                          </p>
                          <Button
                            variant="default"
                            size="default"
                            className="h-9 bg-ado-key text-ado-white hover:bg-ado-key/80"
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
        <DialogContent className="sm:max-w-2xl lg:max-w-4xl xl:max-w-5/6xl rounded-xl bg-background/90 shadow-2xl backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              {selectedSong?.title.english}{" "}
              {selectedSong?.title.japanese && (
                <span className="text-ado-key">
                  ({selectedSong?.title.japanese})
                </span>
              )}
            </DialogTitle>

            <DialogDescription className="text-left text-sm">
              Released: {selectedSong?.releaseDate}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <p className="mb-6 text-accent-foreground">
              {selectedSong?.description}
            </p>
            <div className="mb-6 aspect-video overflow-hidden rounded-md bg-accent">
              {selectedSong?.youtubeId ? (
                <YouTubePlayer song={selectedSong} />
              ) : selectedSong?.nicoId ? (
                <NicoNicoPlayer song={selectedSong} />
              ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  No preview available
                </div>
              )}
            </div>

            {/* TODO: refactor lyrics section... */}
            {/* <h4 className="mb-2 text-lg font-semibold">Lyrics</h4>
            <Tabs defaultValue="japanese">
              <TabsList className="grid grid-cols-3 w-full items-center justify-center p-2">
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
            </Tabs> */}
          </div>

          <DialogClose className="absolute top-4 right-4">
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
