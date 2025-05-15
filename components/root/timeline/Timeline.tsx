import React from "react";

import { TimelineClient } from "@/components/root/timeline/TimelineClient";

import { getTimelineSongs } from "@/constants/MusicData";

export async function DiscographyTimeline() {
  try {
    const songs = await getTimelineSongs();
    return <TimelineClient songs={songs} />;
  } catch (error) {
    console.error("Failed to load the songs:", error);
    return null;
  }
}
