import React from "react";

import { FeaturedSongsClient } from "@/components/root/featured-songs/FeaturedSongsClient";

import { getFeaturedSongs } from "@/constants/MusicData";

export async function FeaturedSongs() {
  try {
    const songs = await getFeaturedSongs();
    return <FeaturedSongsClient songs={songs} />;
  } catch (error) {
    console.error("Failed to load featured songs:", error);
    return null;
  }
}
