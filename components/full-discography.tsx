"use client";

import Image from "next/image";
import React from "react";
import { albums, songs } from "@/app/songs";
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
        <TabsList className="inline-flex items-center justify-center flex-wrap gap-2 px-4 py-2 rounded-lg bg-muted mx-auto">
          {albums.map((album) => (
            <TabsTrigger
              key={album.id}
              value={album.id}
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-background hover:bg-muted data-[state=active]:bg-ado-key data-[state=active]:text-white"
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
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Album image */}
              <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-xl overflow-hidden shadow-lg shrink-0">
                <Image
                  src={album.coverArt || "/placeholder.svg"}
                  alt={`${album.title.english} album cover`}
                  className="object-cover w-full h-full"
                  fill
                  priority
                />
              </div>

              {/* Album text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-extrabold mb-4">
                  {album.title.english}{" "}
                  <span className="text-ado-key text-2xl font-medium">
                    ({album.title.japanese})
                  </span>
                </h2>
                <p className="text-accent-foreground text-lg">
                  Released:{" "}
                  <span className="font-semibold">{album.releaseDate}</span> •{" "}
                  <span className="font-semibold">{album.tracks.length}</span>{" "}
                  songs
                </p>
              </div>
            </div>

            {/* Track Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {album.tracks.map((track) => {
                const song = getSongById(track.songId);
                if (!song) return null;

                return (
                  <Card
                    key={track.songId}
                    className="flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.02] bg-background/70 backdrop-blur"
                  >
                    <div className="aspect-video bg-accent relative overflow-hidden">
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
                        <div className="w-full h-full flex items-center justify-center bg-muted/50">
                          <p className="text-sm text-accent-foreground italic">
                            No official video available
                          </p>
                        </div>
                      )}
                    </div>

                    <CardHeader className="p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-foreground bg-muted px-2 py-1 rounded-md">
                          #{track.trackNumber}
                        </span>
                        <h3 className="text-xl font-bold">
                          {song.title.english}{" "}
                          <span className="text-ado-key text-lg font-medium">
                            ({song.title.japanese})
                          </span>
                        </h3>
                      </div>
                    </CardHeader>

                    <CardContent className="p-5 pt-0 flex flex-col gap-2">
                      <p className="text-muted-foreground text-sm">
                        {song.length} • {song.releaseDate}
                      </p>
                      <p className="text-accent-foreground text-sm">
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
