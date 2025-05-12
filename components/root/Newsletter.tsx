"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="absolute h-96 w-96 rounded-full bg-ado-key/30 blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <Mail className="mx-auto mb-4 h-12 w-12 text-ado-key drop-shadow" />

          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Ado Newsletter
          </h2>
          <p className="mx-auto max-w-xl text-base text-accent-foreground">
            Stay updated with the latest news, releases, and events — straight
            from Ado’s team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-xl rounded-2xl border border-ado-key/30 bg-card p-8 shadow-xl backdrop-blur-md transition-shadow hover:shadow-2xl"
        >
          <h3 className="mb-4 text-2xl text-center font-bold text-foreground">
            Subscribe Now
          </h3>

          <p className="mb-6 text-sm text-center leading-relaxed text-accent-foreground">
            You will be redirected to the official signup page managed by Ado's
            team.
          </p>

          <Link
            href="https://umusic.jp/ado_nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full"
          >
            <Button
              size="default"
              className="w-full bg-ado-key font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-ado-key/90"
            >
              Subscribe to Official Newsletter
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <p className="mt-4 text-xs text-center text-muted-foreground">
            Powered by <span className="text-ado-key">umusic.jp</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
