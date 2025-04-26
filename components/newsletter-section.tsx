import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Official Ado Newsletter
        </h2>
        <p className="text-accent-foreground mb-8 max-w-2xl mx-auto">
          Stay updated with the latest news, releases, and tour dates directly
          from Ado's official team.
        </p>

        <div className="bg-card border border-ado-key/20 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">
            Subscribe to Ado's Official Newsletter
          </h3>
          <p className="text-accent-foreground mb-6">
            This link will take you to Ado's official newsletter signup page.
            Please note that this is the official Ado newsletter, not affiliated
            with this fan site.
          </p>

          <Link
            href="https://umusic.jp/ado_nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-ado-key hover:bg-ado-key/80 cursor-grab">
              Subscribe to Official Newsletter
              <ExternalLink className="ml-0 h-4 w-4" />
            </Button>
          </Link>

          <p className="text-xs text-accent-foreground mt-4">
            By clicking this button, you will be redirected to the official Ado
            newsletter signup page at{" "}
            <span className="text-ado-key">umusic.jp/ado_nl</span>, which is
            managed by Ado's official team.
          </p>
        </div>
      </div>
    </section>
  );
}
