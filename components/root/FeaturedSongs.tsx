"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { featuredSongs } from "@/constants/MusicData";

import { NicoNicoPlayer, YouTubePlayer } from "@/utils/VideoEmbed";

export function FeaturedSongs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="bg-ado-key/5 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center"
        >
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Featured Songs
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/70">
            Explore some of Ado's most popular and influential songs that
            showcase her incredible vocal talent and emotional depth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredSongs.map((song) => (
            <motion.div
              key={song.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                className="
                  overflow-hidden border-ado-white dark:border-ado-white/30
                  bg-background/50 transition-all hover:bg-background/80 gap-0 py-0
                  backdrop-blur-sm hover:border-ado-key/30 hover:shadow-ado-key/20 hover:shadow-xl
                "
              >
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

                <CardHeader className="px-4 pt-4 pb-2">
                  <CardTitle className="text-xl font-bold">
                    {song.title.english}{" "}
                    <span className="text-lg font-normal text-ado-key">
                      ({song.title.japanese})
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-4 pt-0">
                  <p className="text-foreground dark:text-ado-white">
                    {song.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <Link href="/discography">
            <Button
              variant="default"
              size="lg"
              className="bg-ado-key hover:bg-ado-key/90 text-ado-white"
            >
              View Full Discography
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
