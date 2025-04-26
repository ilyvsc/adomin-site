import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ado Fan Tribute | Japan's Vocal Powerhouse",
  description:
    "A fan-made tribute to the incredible talent and artistry of Ado, whose music has touched millions of hearts worldwide.",
  // Basic SEO
  keywords: ["Ado", "Ado Fan Site", "Ado Music", "Japanese Singer"],
  authors: [{ name: "Luis Diaz (ilyvsc)", url: "https://github.com/ilyvsc" }],
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
      </head>

      <body className={clsx(inter.className, poppins.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
