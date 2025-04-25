"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"

interface TimelineSong {
  id: string
  title: {
    english: string
    japanese: string
  }
  releaseDate: string
  year: number
  description: string
  youtubeId: string
  lyrics: {
    japanese: string
    romaji: string
    english: string
  }
}

const timelineSongs: TimelineSong[] = [
  {
    id: "usseewa",
    title: {
      english: "Usseewa",
      japanese: "うっせぇわ",
    },
    releaseDate: "October 2020",
    year: 2020,
    description:
      "Ado's breakthrough hit that catapulted her to fame with its raw emotion and powerful vocals addressing societal pressures.",
    youtubeId: "Qp3b-RXtz4w",
    lyrics: {
      japanese:
        "うっせぇうっせぇうっせぇわ\nあなたが思うより健康です\n一応定職についてます\nコンビニバイトしてます\n...",
      romaji:
        "Usseē usseē usseē wa\nAnata ga omou yori kenkou desu\nIchiou teishoku ni tsuite masu\nKonbini baito shite masu\n...",
      english:
        "Shut up, shut up, shut up\nI'm healthier than you think\nI have a proper job\nI work part-time at a convenience store\n...",
    },
  },
  {
    id: "readymade",
    title: {
      english: "Readymade",
      japanese: "レディメイド",
    },
    releaseDate: "February 2021",
    year: 2021,
    description: "A high-energy track showcasing Ado's versatile vocal range and expressive delivery style.",
    youtubeId: "jg09lNupc1s",
    lyrics: {
      japanese: "ほら、また今日も\n誰かの声に惑わされて\n自分の声を押し殺して\n...",
      romaji: "Hora, mata kyou mo\nDareka no koe ni madowasarete\nJibun no koe wo oshikoroshite\n...",
      english: "Look, again today\nMisled by someone's voice\nSuppressing your own voice\n...",
    },
  },
  {
    id: "gira-gira",
    title: {
      english: "Gira Gira",
      japanese: "ギラギラ",
    },
    releaseDate: "April 2021",
    year: 2021,
    description: "A powerful song that showcases Ado's incredible vocal range and emotional delivery.",
    youtubeId: "sOiMD45QGLs",
    lyrics: {
      japanese: "ギラギラ燃えてしまえ\nこの世界全部真っ白になるまで\n...",
      romaji: "Gira gira moete shimae\nKono sekai zenbu masshiro ni naru made\n...",
      english: "Burn brightly\nUntil this whole world turns pure white\n...",
    },
  },
  {
    id: "odo",
    title: {
      english: "Odo",
      japanese: "踊",
    },
    releaseDate: "August 2021",
    year: 2021,
    description: "An energetic track with a traditional Japanese influence that showcases Ado's versatility.",
    youtubeId: "YnSW8ian29w",
    lyrics: {
      japanese: "さあ踊れ 踊れ 踊れ\n今宵は雨の踊り\n...",
      romaji: "Saa odore odore odore\nKoyoi wa ame no odori\n...",
      english: "Come on, dance, dance, dance\nTonight is a dance in the rain\n...",
    },
  },
  {
    id: "new-genesis",
    title: {
      english: "New Genesis",
      japanese: "新時代",
    },
    releaseDate: "August 2022",
    year: 2022,
    description: "The opening theme for the One Piece Film: Red, demonstrating Ado's incredible vocal power.",
    youtubeId: "6lnnPnr_0SU",
    lyrics: {
      japanese: "新時代 新時代\nワ・ワ・ワールド\n...",
      romaji: "Shin jidai shin jidai\nWa wa wārudo\n...",
      english: "New era, new era\nWo-wo-world\n...",
    },
  },
  {
    id: "backlight",
    title: {
      english: "Backlight",
      japanese: "逆光",
    },
    releaseDate: "August 2022",
    year: 2022,
    description: "Another song from the One Piece Film: Red soundtrack, showcasing Ado's emotional range.",
    youtubeId: "gt-v_YCkaMY",
    lyrics: {
      japanese: "",
      romaji: "",
      english: "",
    },
  },
  {
    id: "aishite-aishite-aishite",
    title: {
      english: "Aishite Aishite Aishite",
      japanese: "愛して愛して愛して",
    },
    releaseDate: "July 2023",
    year: 2023,
    description: "A cover of another popular Vocaloid song, showcasing Ado's emotional delivery and vocal control.",
    youtubeId: "U8BlNEKq0r8",
    lyrics: {
      japanese: "愛して 愛して 愛して もっともっと\n愛して 愛して 狂おしいほどに\n苦しい 苦しい 呪縛を 解いて解いて ねえ\n止められない ah...",
      romaji: "",
      english: "",
    },
  },
]

export function DiscographyTimeline() {
  const [selectedSong, setSelectedSong] = useState<TimelineSong | null>(null)
  const [open, setOpen] = useState(false)

  const handleSongClick = (song: TimelineSong) => {
    setSelectedSong(song)
    setOpen(true)
  }

  // Group songs by year
  const songsByYear = timelineSongs.reduce(
    (acc, song) => {
      if (!acc[song.year]) {
        acc[song.year] = []
      }
      acc[song.year].push(song)
      return acc
    },
    {} as Record<number, TimelineSong[]>,
  )

  // Get years in ascending order
  const years = Object.keys(songsByYear)
    .map(Number)
    .sort((a, b) => a - b)

  // Extract month from release date
  const getMonth = (releaseDate: string) => {
    return releaseDate.split(" ")[0]
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Discography Timeline</h2>
        <p className="text-center text-accent-foreground mb-12 max-w-2xl mx-auto">
          Explore Ado's musical journey from 2020 to the present. Click on any song to learn more.
        </p>

        <div className="space-y-16">
          {years.map((year) => (
            <div key={year} className="relative">
              {/* Year marker */}
              <div className="flex justify-center mb-12">
                <div className="bg-ado-key text-white px-6 py-2 rounded-full text-lg font-bold z-10">{year}</div>
              </div>

              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ado-key/30 -z-10"></div>

              {/* Songs for this year */}
              <div className="space-y-16">
                {songsByYear[year].map((song, songIndex) => (
                  <div key={song.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ado-key rounded-full z-10"></div>

                    <div
                      className={`flex flex-col ${songIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                    >
                      {/* Video/Image side */}
                      <div className="md:w-1/2">
                        <div className="bg-background/50 rounded-lg overflow-hidden hover:bg-background/80 transition-colors">
                          <div className="aspect-video bg-accent relative overflow-hidden">
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
                      </div>

                      {/* Content side */}
                      <div className="md:w-1/2 space-y-4">
                        <div className="inline-block bg-ado-key text-white px-4 py-1 rounded-full text-sm">
                          {getMonth(song.releaseDate)} {song.year}
                        </div>
                        <h3 className="text-2xl font-bold">
                          {song.title.english} <span className="text-ado-key">({song.title.japanese})</span>
                        </h3>
                        <p className="text-accent-foreground">{song.description}</p>
                        <button
                          onClick={() => handleSongClick(song)}
                          className="text-ado-key hover:text-ado-key/80 transition-colors font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Song details modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedSong?.title.english} <span className="text-ado-key">({selectedSong?.title.japanese})</span>
            </DialogTitle>
            <DialogDescription>Released: {selectedSong?.releaseDate}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-accent-foreground mb-6">{selectedSong?.description}</p>

            <div className="aspect-video bg-accent rounded-md overflow-hidden mb-6">
              {selectedSong && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedSong.youtubeId}`}
                  title={`${selectedSong.title.english} by Ado`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              )}
            </div>

            <h4 className="text-lg font-semibold mb-2">Lyrics</h4>
            <Tabs defaultValue="japanese" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="japanese">Japanese</TabsTrigger>
                <TabsTrigger value="romaji">Romaji</TabsTrigger>
                <TabsTrigger value="english">English</TabsTrigger>
              </TabsList>
              <TabsContent value="japanese" className="mt-4 whitespace-pre-line">
                {selectedSong?.lyrics.japanese}
              </TabsContent>
              <TabsContent value="romaji" className="mt-4 whitespace-pre-line">
                {selectedSong?.lyrics.romaji}
              </TabsContent>
              <TabsContent value="english" className="mt-4 whitespace-pre-line">
                {selectedSong?.lyrics.english}
              </TabsContent>
            </Tabs>
          </div>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  )
}
