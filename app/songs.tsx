export interface Song {
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
  youtubeId: string | null;
  coverArt: string;
}

export interface Album {
  id: string;
  title: {
    english: string;
    japanese: string;
  };
  releaseDate: string;
  type: "single" | "ep" | "album";
  tracks: AlbumTrack[];
  coverArt: string;
}

export interface AlbumTrack {
  songId: string;
  trackNumber: number;
  isBonusTrack?: boolean;
}

export const songs: Song[] = [
  {
    id: "usseewa",
    title: { english: "Usseewa", japanese: "うっせぇわ" },
    length: "3:18",
    year: 2020,
    releaseDate: "2020-10-23",
    description:
      "Ado's breakthrough hit that catapulted her to fame with its raw emotion and powerful vocals addressing societal pressures.",
    youtubeId: "Qp3b-RXtz4w",
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b27389e3b38cb86ef8cfb0cd8def",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
  {
    id: "readymade",
    title: { english: "Readymade", japanese: "レディメイド" },
    length: "3:05",
    year: 2021,
    releaseDate: "2021-02-14",
    description:
      "A high-energy track showcasing Ado's versatile vocal range and expressive delivery style.",
    youtubeId: "jg09lNupc1s",
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b27360fe03540adbfc0a842ebd1d",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
  {
    id: "gira-gira",
    title: { english: "Gira Gira", japanese: "ギラギラ" },
    length: "3:36",
    year: 2021,
    releaseDate: "2021-04-26",
    description:
      "A powerful song that showcases Ado's incredible vocal range and emotional delivery.",
    youtubeId: "sOiMD45QGLs",
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b273a017946e3afa6b0d4e7eb123",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
  {
    id: "odo",
    title: { english: "Odo", japanese: "踊" },
    length: "3:40",
    year: 2021,
    releaseDate: "2021-08-22",
    description:
      "An energetic track with a traditional Japanese influence that showcases Ado's versatility.",
    youtubeId: "YnSW8ian29w",
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b2730f7bef8299e3738350d6846e",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
  {
    id: "yoru-no-pierrot",
    title: { english: "Yoru no Pierrot", japanese: "夜のピエロ" },
    length: "3:22",
    year: 2021,
    releaseDate: "2021-06-04",
    description:
      "A melancholic yet powerful song that demonstrates Ado's ability to convey deep emotions.",
    youtubeId: "ZRtdQ81jPUQ",
    coverArt: "",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
  {
    id: "ashura-chan",
    title: { english: "Ashura-chan", japanese: "阿修羅ちゃん" },
    length: "3:45",
    year: 2022,
    releaseDate: "2022-01-14",
    description:
      "A powerful and energetic song with traditional Japanese elements.",
    youtubeId: null,
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b273b3dea665dd662e399ae6a2f2",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
  {
    id: "kura-kura",
    title: { english: "Kura Kura", japanese: "くらくら" },
    length: "3:12",
    year: 2022,
    releaseDate: "2022-01-28",
    description: "A dizzy, swirling song that showcases Ado's playful side.",
    youtubeId: null,
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b2733078277dccc526cca9bacbe5",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
  {
    id: "new-genesis",
    title: { english: "New Genesis", japanese: "新時代" },
    length: "3:52",
    year: 2022,
    releaseDate: "2022-08-10",
    description:
      "The opening theme for the One Piece Film: Red, demonstrating Ado's incredible vocal power.",
    youtubeId: "1FliVTcX8bQ",
    lyrics: { japanese: "", romaji: "", english: "" },
    coverArt: "",
  },
  {
    id: "backlight",
    title: { english: "Backlight", japanese: "逆光" },
    length: "4:05",
    year: 2022,
    releaseDate: "2022-08-10",
    description:
      "Another song from the One Piece Film: Red soundtrack, showcasing Ado's emotional range.",
    youtubeId: "jg1iBUDMFIc",
    coverArt: "",
    lyrics: { japanese: "", romaji: "", english: "" },
  },
];

export const albums: Album[] = [
  {
    id: "kyougen",
    title: { english: "Kyōgen", japanese: "狂言" },
    releaseDate: "2022-01-01",
    type: "album",
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b27364381fb5ba549f149ae74560",
    tracks: [
      { songId: "readymade", trackNumber: 1 },
      { songId: "gira-gira", trackNumber: 2 },
      { songId: "odo", trackNumber: 3 },
      { songId: "usseewa", trackNumber: 4 },
      { songId: "yoru-no-pierrot", trackNumber: 5 },
      { songId: "ashura-chan", trackNumber: 8, isBonusTrack: true },
      { songId: "kura-kura", trackNumber: 9, isBonusTrack: true },
    ],
  },
  {
    id: "uta-no-uta",
    title: {
      english: "Uta no Uta One Piece Film Red",
      japanese: "ウタの歌 ONE PIECE FILM RED",
    },
    releaseDate: "2022-01-01",
    type: "album",
    coverArt: "/placeholder.svg?height=500&width=500",
    tracks: [
      { songId: "new-genesis", trackNumber: 1 },
      { songId: "backlight", trackNumber: 2 },
    ],
  },
];

function getSongs(ids: string[]): Song[] {
  return ids.map((id) => {
    const song = songs.find((s) => s.id === id);
    if (!song) throw new Error(`Song with ID "${id}" not found.`);
    return song;
  });
}

export const featuredSongs = getSongs([
  "readymade",
  "gira-gira",
  "new-genesis",
]);

export const timelineSongs = getSongs([
  "readymade",
  "usseewa",
  "gira-gira",
  "new-genesis",
]);
