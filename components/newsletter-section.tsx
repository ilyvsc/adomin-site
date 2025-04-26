"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="relative py-16 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ado-key/5 to-background opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Official Ado Newsletter
          </h2>
          <p className="text-base text-accent-foreground max-w-xl mx-auto">
            Stay updated with the latest news, releases, and events — straight
            from Ado’s team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card border border-ado-key/20 rounded-lg shadow-md p-6 max-w-xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Subscribe Now
          </h3>

          <p className="text-accent-foreground mb-6 text-sm leading-relaxed">
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
              className="w-full bg-ado-key hover:bg-ado-key/90 text-white font-semibold transition-all duration-300"
            >
              Subscribe to Official Newsletter
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <p className="text-xs text-muted-foreground mt-4">
            Powered by <span className="text-ado-key">umusic.jp</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
