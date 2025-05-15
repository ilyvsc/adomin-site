import { PrismaClient } from "@prisma/client";

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface Song {
  id: string;
  title: {
    english: string;
    japanese: string;
  };
  lyrics: {
    japanese: string;
    romaji: string;
    english: string;
  };
  length: string;
  year: number;
  releaseDate: string;
  description: string;
  nicoId?: string | null;
  youtubeId?: string | null;
  coverArt: string;
}

interface SongData {
  id: string;
  titleEnglish: string;
  titleJapanese: string;
  lyricsJapanese: string;
  lyricsRomaji: string;
  lyricsEnglish: string;
  length: number;
  year: number;
  releaseDate: string;
  description: string;
  nicoId: string;
  youtubeId: string;
  coverArt: string;
}

const jsonPath = join(__dirname, "fixtures", "songs.json");
let songsRaw: Song[] = [];
try {
  const file = readFileSync(jsonPath, "utf-8");
  songsRaw = JSON.parse(file);
} catch (err) {
  console.error("Failed to load fixtures/songs.json:", err);
  process.exit(1);
}

function parseLength(str: string): number {
  const [m, s] = str.split(":").map(Number);
  return m * 60 + s;
}

const songs: SongData[] = songsRaw.map((s) => ({
  id: s.id,
  titleEnglish: s.title.english,
  titleJapanese: s.title.japanese,
  lyricsJapanese: s.lyrics.japanese,
  lyricsRomaji: s.lyrics.romaji,
  lyricsEnglish: s.lyrics.english,
  length: parseLength(s.length),
  year: s.year,
  releaseDate: s.releaseDate,
  description: s.description,
  nicoId: s.nicoId ?? "",
  youtubeId: s.youtubeId ?? "",
  coverArt: s.coverArt,
}));

async function seed() {
  console.log(`Seeding ${songs.length} songs…`);
  await prisma.song.createMany({
    data: songs.map((s) => ({
      id: s.id,
      titleEnglish: s.titleEnglish,
      titleJapanese: s.titleJapanese,
      lyricsJapanese: s.lyricsJapanese,
      lyricsRomaji: s.lyricsRomaji,
      lyricsEnglish: s.lyricsEnglish,
      length: s.length.toString(),
      year: s.year,
      releaseDate: new Date(s.releaseDate),
      description: s.description,
      nicoId: s.nicoId,
      youtubeId: s.youtubeId,
      coverArt: s.coverArt,
    })),
    skipDuplicates: true,
  });
  console.log("🎉 Songs seeded!");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
