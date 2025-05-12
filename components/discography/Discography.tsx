"use client";

import { albums, songs } from "@/constants/MusicData";

import Image from "next/image";
import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function getSongById(id: string) {
  return songs.find((song) => song.id === id) || null;
}

export function FullDiscography() {
  return (
    <div className="space-y-16">
      <Tabs defaultValue={albums[0].id} className="w-full">
        {/* Album Tabs */}
        <TabsList className="mx-auto flex flex-wrap justify-left gap-2 p-2">
          {albums.map((album) => (
            <TabsTrigger
              key={album.id}
              value={album.id}
              className="
                rounded-md border border-foreground/20 bg-transparent p-4 text-sm font-semibold text-foreground
                transition-colors hover:bg-foreground/10 data-[state=active]:border-ado-key data-[state=active]:bg-ado-key data-[state=active]:text-white
            "
            >
              {album.title.english}
            </TabsTrigger>
          ))}
        </TabsList>

        {albums.map((album) => (
          <TabsContent
            key={album.id}
            value={album.id}
            className="mt-10 space-y-12"
          >
            {/* Album Header */}
            <div className="flex flex-col items-start gap-8 md:flex-row">
              {/* Album image */}
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl shadow-lg md:h-48 md:w-48">
                <Image
                  src={album.coverArt || "/placeholder.svg"}
                  alt={`${album.title.english} album cover`}
                  className="h-full w-full object-cover"
                  fill
                  priority
                />
              </div>

              {/* Album text */}
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-4xl font-extrabold">
                  {album.title.english}{" "}
                  <span className="text-2xl font-medium text-ado-key">
                    ({album.title.japanese})
                  </span>
                </h2>
                <p className="text-lg text-accent-foreground">
                  Released:{" "}
                  <span className="font-semibold">{album.releaseDate}</span> •{" "}
                  <span className="font-semibold">{album.tracks.length}</span>{" "}
                  songs
                </p>
              </div>
            </div>

            {/* Track Cards */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {album.tracks.map((track) => {
                const song = getSongById(track.songId);
                if (!song) return null;

                return (
                  <Card
                    key={track.songId}
                    className="flex flex-col overflow-hidden rounded-2xl bg-background/70 shadow-md backdrop-blur transition-all hover:scale-[1.02] hover:shadow-xl gap-0 py-0"
                  >
                    <div className="relative aspect-video overflow-hidden bg-accent">
                      {song.youtubeId ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${song.youtubeId}`}
                          title={`${song.title.english} by Ado`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="border-0"
                        ></iframe>
                      ) : (
                        <div className="bg-muted/50 flex h-full w-full items-center justify-center">
                          <p className="text-sm text-accent-foreground italic">
                            No official video available
                          </p>
                        </div>
                      )}
                    </div>

                    <CardHeader className="p-5">
                      <div className="flex items-center gap-3">
                        <span className="bg-muted rounded-md px-2 py-1 text-sm font-bold text-foreground">
                          #{track.trackNumber}
                        </span>
                        <h3 className="text-xl font-bold">
                          {song.title.english}{" "}
                          <span className="text-lg font-medium text-ado-key">
                            ({song.title.japanese})
                          </span>
                        </h3>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-2 p-5 pt-0">
                      <p className="text-sm text-muted-foreground">
                        {song.length} • {song.releaseDate}
                      </p>
                      <p className="text-sm text-accent-foreground">
                        {song.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
