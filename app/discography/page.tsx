import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Footer } from "@/components/footer";
import { FullDiscography } from "@/components/full-discography";

export default function DiscographyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-ado-key hover:text-ado-key/80 transition-colors"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Ado's Complete Discography
          </h1>
          <p className="text-muted-foreground mt-2">
            A comprehensive collection of Ado's music, organized by album and
            release date.
          </p>
        </div>
        <FullDiscography />
      </div>
      <Footer />
    </main>
  );
}
