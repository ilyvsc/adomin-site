"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function FanAppreciation() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="mx-auto h-12 w-12 text-ado-key mb-6" />
          </motion.div>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-foreground"
          >
            A Tribute from the Heart
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="italic text-xl md:text-2xl text-accent-foreground mb-12 leading-relaxed"
          >
            "As a devoted fan, I created this website to express my gratitude
            for Ado's incredible music. Her powerful vocals and emotional
            delivery have been a source of inspiration and joy in my life."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-accent-foreground text-md md:text-lg"
          >
            Debuting in 2020 with the breakout hit{" "}
            <span className="font-semibold text-ado-key">"Usseewa"</span>, Ado's
            voice has captivated millions across the world. In 2022, she lent
            her voice to the character Uta in{" "}
            <span className="font-semibold text-ado-key">
              "One Piece Film: Red"
            </span>
            , further cementing her status as a musical phenomenon.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
