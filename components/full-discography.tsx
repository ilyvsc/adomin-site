import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { albums, songs } from "@/app/songs";
import Image from "next/image";

function getSongById(id: string) {
  return songs.find((song) => song.id === id);
}

export function FullDiscography() {
  return (
    <div className="space-y-12">
      <Tabs defaultValue={albums[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {albums.map((album) => (
            <TabsTrigger key={album.id} value={album.id}>
              {album.title.english}
            </TabsTrigger>
          ))}
        </TabsList>

        {albums.map((album) => (
          <TabsContent key={album.id} value={album.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={album.coverArt || "/placeholder.svg"}
                  alt={`${album.title.english} album cover`}
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-2">
                  {album.title.english} ({album.title.japanese})
                </h2>
                <p className="text-accent-foreground mb-4">
                  Released: {album.releaseDate} - {album.tracks.length} songs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {album.tracks.map((track) => {
                const song = getSongById(track.songId);
                if (!song) return null;

                return (
                  <div
                    key={track.songId}
                    className="space-y-4 bg-background/50 rounded-lg overflow-hidden hover:bg-background/80 transition-colors"
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
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-sm text-accent-foreground">
                            No official video available
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-accent-foreground text-sm">
                          {track.trackNumber}
                        </span>
                        <h3 className="text-xl font-bold">
                          {song.title.english}{" "}
                          <span className="text-ado-key">
                            ({song.title.japanese})
                          </span>
                        </h3>
                      </div>
                      <p className="text-accent-foreground text-sm mb-2">
                        {song.length} • {song.releaseDate}
                      </p>
                      <p className="text-accent-foreground">
                        {song.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
