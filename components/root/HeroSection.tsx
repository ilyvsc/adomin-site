"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
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
      <motion.div
        variants={{
          hidden: { scale: 1.1 },
          show: { scale: 1, transition: { duration: 1.5 } },
        }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="https://dyvx7gvcyc9io.cloudfront.net/ado/adonobestadobum/mainvisual_bg1.png"
          alt="Ado Visual"
          fill
          priority
          className="h-full w-full object-cover blur-sm brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ado-white/10 to-background dark:via-black/30"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="z-20 px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          className="z-20 px-6 text-center flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-2 md:mb-0">
            <Image
              src="https://sp.universal-music.co.jp/ado/5thanniversary/assets/images/img-icon.png"
              alt="Ado Logo"
              width={80}
              height={80}
              className="h-32 w-32 md:h-50 md:w-50 object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-foreground drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            <span className="sr-only">Ado --</span>The Voice That Shook Japan
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-3xl text-md leading-relaxed text-accent-foreground md:text-2xl dark:text-gray-300"
          >
            A force of nature. A whirlwind of raw emotion. A voice that defies
            expectations and leaves hearts trembling in its wake.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
