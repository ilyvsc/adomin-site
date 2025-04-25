import type React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faInstagram, faYoutube, faSpotify, faDiscord, faReddit } from "@fortawesome/free-brands-svg-icons"
import { Globe } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Alert, AlertDescription } from "./ui/alert"

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  description: string
}

const officialLinks: SocialLink[] = [
  {
    name: "@ado_staff",
    url: "https://x.com/ado_staff",
    icon: <FontAwesomeIcon icon={faSquareXTwitter} className="h-5 w-5" />,
    description: "Official X (formely Twitter) account managed by Ado's staff",
  },
  {
    name: "@ado1024imokenp",
    url: "https://x.com/ado1024imokenp",
    icon: <FontAwesomeIcon icon={faSquareXTwitter} className="h-5 w-5" />,
    description: "Official X (formely Twitter) account managed by Ado",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Ado1024",
    icon: <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />,
    description: "Official YouTube channel with music videos and announcements",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ado_staff_official/",
    icon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />,
    description: "Official Instagram account with updates and photos",
  },
  {
    name: "Official Shop Website",
    url: "https://ado-shop.com/",
    icon: <Globe className="h-5 w-5" />,
    description: "Ado's official online store, the place to buy merchandise",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/6mEQK9m2krja6X1cfsAjfl",
    icon: <FontAwesomeIcon icon={faSpotify} className="h-5 w-5" />,
    description: "Listen to Ado's music on Spotify",
  },
]

const fanLinks: SocialLink[] = [
  {
    name: "Reddit",
    url: "https://www.reddit.com/r/Ado/",
    icon: <FontAwesomeIcon icon={faReddit} className="h-5 w-5" />,
    description: "Fan community to discuss Ado's music and news in Reddit",
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/qNU3sQcYUJ",
    icon: <FontAwesomeIcon icon={faDiscord} className="h-5 w-5" />,
    description: "Join the Ado Hangout server in Discord to connect with other Ado fans",
  },
]

export function ConnectSection() {
  return (
    <section className="py-20 bg-ado-key/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Connect with Ado</h2>
        <p className="text-center text-accent-foreground mb-12 max-w-2xl mx-auto">
          Follow Ado's official accounts for the latest updates or join fan communities to connect with other fans.
        </p>

        <Tabs defaultValue="official" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="official">Official</TabsTrigger>
            <TabsTrigger value="fan">Fan Communities</TabsTrigger>
          </TabsList>

          <TabsContent value="official" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {officialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-ado-key hover:text-ado-key/80 transition-colors"
                >
                  <Card
                    key={link.name}
                    className="overflow-hidden bg-card hover:bg-card/80 transition-colors border-ado-key/20 hover:border-ado-key/40 h-full"
                  >
                    <CardHeader className="pb-6 h-full flex flex-col justify-between">
                      <CardTitle className="flex items-center text-lg">
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </CardTitle>
                      <CardDescription>{link.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fan" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fanLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-ado-key hover:text-ado-key/80 transition-colors"
                >
                  <Card
                    className="overflow-hidden bg-card hover:bg-card/80 transition-colors border-ado-key/20 hover:border-ado-key/40 h-full"
                  >
                    <CardHeader className="pb-6 h-full flex flex-col justify-between">
                      <CardTitle className="flex items-center text-lg">
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </CardTitle>
                      <CardDescription>{link.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* <div className="mt-12 text-center text-sm text-accent-foreground max-w-2xl mx-auto">
          <div className="w-full lg:min-w-3/4">
            <Alert className="mb-6">
              <AlertDescription>
                This is a fan-made website created to express appreciation for Ado's music. It is not affiliated with,
                endorsed by, or connected to Ado or her management.
              </AlertDescription>
            </Alert>
          </div>
        </div> */}
      </div>
    </section>
  )
}
