"use client";

import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import React from "react";

export function FanAppreciation() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ado-key/10 to-transparent py-20">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-ado-key/20 rounded-full filter blur-3xl animate-[spin_30s_linear_infinite]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-ado-key/30 rounded-full filter blur-2xl animate-[spin_25s_reverse_linear_infinite]" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="relative mx-auto max-w-4xl rounded-3xl bg-white/30 dark:bg-slate-800/30 p-12 backdrop-blur-md shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HeartHandshake className="mx-auto size-14 md:size-24 text-ado-key" />
          </motion.div>

          <motion.h2
            className="mb-8 text-4xl font-bold text-foreground md:text-5xl"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Tribute from the Heart
          </motion.h2>

          <motion.p
            className="mb-12 text-md leading-snug text-foreground italic md:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            "As a devoted fan, I created this website to express my gratitude
            for Ado's incredible music. Her powerful vocals and emotional
            delivery have been a source of inspiration and joy in my life."
          </motion.p>

          <motion.p
            className="text-sm text-foreground/80 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Debuting in 2020 with the breakout hit{" "}
            <span className="font-semibold text-ado-key">"Usseewa"</span>, Ado's
            voice has captivated millions across the world. In 2022, she lent
            her voice to the character Uta in{" "}
            <span className="font-semibold text-ado-key">
              "One Piece Film: Red"
            </span>{" "}
            , further cementing her status as a musical phenomenon.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
