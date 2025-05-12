"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-background dark:bg-black"
    >
      {/* Background layers */}
      <motion.div
        variants={{
          hidden: { scale: 1.1 },
          show: { scale: 1, transition: { duration: 1.5 } },
        }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="block md:hidden">
          <Image
            src="https://wallpapercave.com/wp/wp13142487.jpg"
            alt="Ado Mobile Visual"
            fill
            priority
            className="h-full w-full object-cover blur-md brightness-75 dark:brightness-50"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="https://wallpapercave.com/wp/wp13142509.jpg"
            alt="Ado Desktop Visual"
            fill
            priority
            className="h-full w-full object-cover blur-md brightness-75 dark:brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-background dark:via-black/30"></div>
      </motion.div>

      {/* Foreground content */}
      <motion.div
        variants={containerVariants}
        className="z-20 px-6 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-foreground drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
        >
          <span className="text-ado-key">Ado</span> — The Voice That Shook Japan
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-accent-foreground md:text-2xl dark:text-gray-300"
        >
          A force of nature. A whirlwind of raw emotion. A voice that defies
          expectations and leaves hearts trembling in its wake.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { delay: 1.2 } },
          }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-ado-key"
          >
            <ArrowDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
