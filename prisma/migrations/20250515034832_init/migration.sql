-- CreateEnum
CREATE TYPE "AlbumType" AS ENUM ('single', 'ep', 'album');

-- CreateTable
CREATE TABLE "Song" (
    "id" TEXT NOT NULL,
    "titleEnglish" TEXT NOT NULL,
    "titleJapanese" TEXT NOT NULL,
    "lyricsJapanese" TEXT NOT NULL DEFAULT '',
    "lyricsRomaji" TEXT NOT NULL DEFAULT '',
    "lyricsEnglish" TEXT NOT NULL DEFAULT '',
    "length" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "nicoId" TEXT,
    "youtubeId" TEXT,
    "coverArt" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" TEXT NOT NULL,
    "titleEnglish" TEXT NOT NULL,
    "titleJapanese" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "type" "AlbumType" NOT NULL,
    "coverArt" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumTrack" (
    "albumId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "trackNumber" INTEGER NOT NULL,
    "isBonusTrack" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AlbumTrack_pkey" PRIMARY KEY ("albumId","songId")
);

-- CreateIndex
CREATE UNIQUE INDEX "AlbumTrack_albumId_trackNumber_key" ON "AlbumTrack"("albumId", "trackNumber");

-- AddForeignKey
ALTER TABLE "AlbumTrack" ADD CONSTRAINT "AlbumTrack_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumTrack" ADD CONSTRAINT "AlbumTrack_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
