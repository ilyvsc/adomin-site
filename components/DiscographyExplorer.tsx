// components/DiscographyExplorer.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { albums, songs } from "@/app/songs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

function getSongById(id: string) {
  return songs.find((song) => song.id === id);
}

export function DiscographyExplorer() {
  const [openAlbumId, setOpenAlbumId] = useState<string | null>(null);

  const handleAlbumClick = (albumId: string) => {
    setOpenAlbumId(albumId);
  };

  const handleClose = () => {
    setOpenAlbumId(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Discography Explorer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                onClick={() => handleAlbumClick(album.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={album.coverArt || "/placeholder.svg"}
                    alt={album.title.english}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {album.title.english}
                  </h3>
                  <p className="text-accent-foreground text-sm">
                    {album.releaseDate}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded album view */}
      {openAlbumId && (
        <Dialog open={!!openAlbumId} onOpenChange={handleClose}>
          <DialogContent className="max-w-3xl p-6 overflow-y-auto max-h-[80vh]">
            {albums
              .filter((album) => album.id === openAlbumId)
              .map((album) => (
                <div key={album.id}>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {album.title.english}
                    </DialogTitle>
                    <DialogDescription>
                      Released: {album.releaseDate}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {album.tracks.map((track) => {
                      const song = getSongById(track.songId);
                      if (!song) return null;

                      return (
                        <div key={track.songId} className="space-y-2">
                          <p className="text-foreground text-sm font-semibold truncate">
                            {track.trackNumber}. {song.title.english} (
                            {song.title.japanese})
                          </p>
                          <div className="aspect-[16/9] rounded-md overflow-hidden">
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
                      );
                    })}
                  </div>

                  <DialogClose className="absolute right-4 top-4">
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
              ))}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
