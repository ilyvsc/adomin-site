"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Song, timelineSongs } from "@/app/songs";
import { X } from "lucide-react";

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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Discography Timeline
        </h2>
        <p className="text-center text-accent-foreground mb-12 max-w-2xl mx-auto">
          Explore Ado's musical journey from 2020 to the present. Click on any
          song to learn more.
        </p>

        <div className="space-y-16">
          {years.map((year) => (
            <div key={year} className="relative">
              {/* Year marker */}
              <div className="flex justify-center mb-12">
                <div className="bg-ado-key text-white px-6 py-2 rounded-full text-lg font-bold z-10">
                  {year}
                </div>
              </div>

              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ado-key/30 -z-10"></div>

              {/* Songs for this year */}
              <div className="space-y-16">
                {songsByYear[year].map((song, songIndex) => (
                  <div key={song.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ado-key rounded-full z-10"></div>

                    <div
                      className={`flex flex-col ${songIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                    >
                      {/* Video/Image side */}
                      <div className="md:w-1/2">
                        <div className="bg-background/50 rounded-lg overflow-hidden hover:bg-background/80 transition-colors">
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

                      {/* Content side */}
                      <div className="md:w-1/2 space-y-4">
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
                        <button
                          onClick={() => handleSongClick(song)}
                          className="text-ado-key hover:text-ado-key/80 transition-colors font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Song details modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
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
              <TabsList className="grid w-full grid-cols-3">
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
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
