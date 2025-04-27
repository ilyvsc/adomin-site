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
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl">
          Discography Explorer
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <div key={album.id} className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg transition-all hover:shadow-2xl"
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
                  <p className="text-sm text-accent-foreground">
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
          <DialogContent className="max-h-[80vh] max-w-3xl overflow-y-auto p-6">
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

                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {album.tracks.map((track) => {
                      const song = getSongById(track.songId);
                      if (!song) return null;

                      return (
                        <div key={track.songId} className="space-y-2">
                          <p className="truncate text-sm font-semibold text-foreground">
                            {track.trackNumber}. {song.title.english} (
                            {song.title.japanese})
                          </p>
                          <div className="aspect-[16/9] overflow-hidden rounded-md">
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

                  <DialogClose className="absolute top-4 right-4">
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
