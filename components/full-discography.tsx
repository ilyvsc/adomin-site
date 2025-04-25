"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Album {
  id: string
  title: string
  releaseYear: number
  coverImage: string
  songs: Song[]
}

interface Song {
  id: string
  trackNumber: number
  title: {
    english: string
    japanese: string
  }
  length: string
  releaseDate: string
  description: string
  youtubeId: string | null
}

const discography: Album[] = [
  {
    id: "kyougen",
    title: "Kyōgen (狂言)",
    releaseYear: 2022,
    coverImage: "https://i.scdn.co/image/ab67616d0000b27364381fb5ba549f149ae74560",
    songs: [
      {
        id: "readymade",
        trackNumber: 1,
        title: {
          english: "Readymade",
          japanese: "レディメイド",
        },
        length: "3:05",
        releaseDate: "February 14, 2021",
        description: "A high-energy track showcasing Ado's versatile vocal range and expressive delivery style.",
        youtubeId: "jg09lNupc1s",
      },
      {
        id: "gira-gira",
        trackNumber: 2,
        title: {
          english: "Gira Gira",
          japanese: "ギラギラ",
        },
        length: "3:36",
        releaseDate: "April 26, 2021",
        description: "A powerful song that showcases Ado's incredible vocal range and emotional delivery.",
        youtubeId: "EEbWRjavSVw",
      },
      {
        id: "odo",
        trackNumber: 3,
        title: {
          english: "Odo",
          japanese: "踊",
        },
        length: "3:40",
        releaseDate: "August 22, 2021",
        description: "An energetic track with a traditional Japanese influence that showcases Ado's versatility.",
        youtubeId: "YnSW8ian29w",
      },
      {
        id: "usseewa",
        trackNumber: 4,
        title: {
          english: "Usseewa",
          japanese: "うっせぇわ",
        },
        length: "3:18",
        releaseDate: "October 23, 2020",
        description:
          "Ado's breakthrough hit that catapulted her to fame with its raw emotion and powerful vocals addressing societal pressures.",
        youtubeId: "Qp3b-RXtz4w",
      },
      {
        id: "yoru-no-pierrot",
        trackNumber: 5,
        title: {
          english: "Yoru no Pierrot",
          japanese: "夜のピエロ",
        },
        length: "3:22",
        releaseDate: "June 4, 2021",
        description: "A melancholic yet powerful song that demonstrates Ado's ability to convey deep emotions.",
        youtubeId: "ZRtdQ81jPUQ",
      },
      {
        id: "ashura-chan",
        trackNumber: 8,
        title: {
          english: "Ashura-chan",
          japanese: "阿修羅ちゃん",
        },
        length: "3:45",
        releaseDate: "January 14, 2022",
        description: "A powerful and energetic song with traditional Japanese elements.",
        youtubeId: null,
      },
      {
        id: "kura-kura",
        trackNumber: 9,
        title: {
          english: "Kura Kura",
          japanese: "くらくら",
        },
        length: "3:12",
        releaseDate: "January 28, 2022",
        description: "A dizzy, swirling song that showcases Ado's playful side.",
        youtubeId: null,
      },
    ],
  },
  {
    id: "uta-no-uta",
    title: "Uta no Uta One Piece Film Red (ウタの歌 ONE PIECE FILM RED)",
    releaseYear: 2022,
    coverImage: "/placeholder.svg?height=500&width=500",
    songs: [
      {
        id: "new-genesis",
        trackNumber: 1,
        title: {
          english: "New Genesis",
          japanese: "新時代",
        },
        length: "3:52",
        releaseDate: "August 10, 2022",
        description: "The opening theme for the One Piece Film: Red, demonstrating Ado's incredible vocal power.",
        youtubeId: "1FliVTcX8bQ",
      },
      {
        id: "backlight",
        trackNumber: 2,
        title: {
          english: "Backlight",
          japanese: "逆光",
        },
        length: "4:05",
        releaseDate: "August 10, 2022",
        description: "Another song from the One Piece Film: Red soundtrack, showcasing Ado's emotional range.",
        youtubeId: "jg1iBUDMFIc",
      },
    ],
  },
]

export function FullDiscography() {
  return (
    <div className="space-y-12">
      <Tabs defaultValue={discography[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {discography.map((album) => (
            <TabsTrigger key={album.id} value={album.id}>
              {album.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {discography.map((album) => (
          <TabsContent key={album.id} value={album.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src={album.coverImage || "/placeholder.svg"}
                  alt={`${album.title} album cover`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-2">{album.title}</h2>
                <p className="text-accent-foreground mb-4">Released: {album.releaseYear} - {album.songs.length} songs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {album.songs.map((song) => (
                <div
                  key={song.id}
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
                        <p className="text-sm text-accent-foreground">No official video available</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent-foreground text-sm">{song.trackNumber}</span>
                      <h3 className="text-xl font-bold">
                        {song.title.english} <span className="text-ado-key">({song.title.japanese})</span>
                      </h3>
                    </div>
                    <p className="text-accent-foreground text-sm mb-2">
                      {song.length} • {song.releaseDate}
                    </p>
                    <p className="text-accent-foreground">{song.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
