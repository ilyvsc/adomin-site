"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="block md:hidden">
          <Image
            src="https://wallpapercave.com/wp/wp13142487.jpg"
            alt="Ado Mobile Visual"
            fill
            priority
            className="object-cover scale-105 opacity-50 blur-sm brightness-[0.7] transition-all duration-1000"
          />
        </div>

        <div className="hidden md:block">
          <Image
            src="https://wallpapercave.com/wp/wp13142509.jpg"
            alt="Ado Desktop Visual"
            fill
            priority
            className="object-cover scale-105 opacity-50 blur-sm brightness-[0.7] transition-all duration-1000"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background"></div>
      </div>

      {engineReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-10"
          options={{
            fullScreen: false,
            background: { color: "transparent" },
            particles: {
              number: { value: 100 },
              size: { value: 2 },
              move: { enable: true, speed: 0.3 },
              opacity: { value: 0.3 },
              links: { enable: false },
              color: { value: "#f43f5e" },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse", // "grab" | "bubble" | "repulse" | "attract"
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
          }}
        />
      )}

      {/* Centered Content */}
      <div className="z-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-lg"
        >
          <span className="text-ado-key">Ado</span> — The Voice That Shook Japan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-accent-foreground max-w-3xl mx-auto"
        >
          A tribute to the unstoppable energy, mystery, and power of Ado's
          music.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 animate-bounce text-ado-key flex justify-center"
        >
          <ArrowDown className="h-8 w-8" />
        </motion.div>
      </div>
    </section>
  );
}
