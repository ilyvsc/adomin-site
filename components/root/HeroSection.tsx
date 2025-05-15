"use client";

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const contentVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const backgroundVariants: Variants = {
  initial: {
    scale: 1.05,
    filter: "brightness(0.3) blur(42px)",
  },
  animate: {
    scale: 1,
    filter: "brightness(0.5) blur(4px)",
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const backgroundControls = useAnimation();
  const contentControls = useAnimation();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      backgroundControls.start("animate");
    }
  }, [imageLoaded, backgroundControls]);

  useEffect(() => {
    if (isInView && imageLoaded) {
      const timer = setTimeout(() => {
        contentControls.start("animate");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isInView, imageLoaded, contentControls]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-black"
    >
      <motion.div
        initial="initial"
        animate={backgroundControls}
        variants={backgroundVariants}
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          opacity: 1,
          willChange: "transform, filter",
        }}
      >
        <Image
          src="https://dyvx7gvcyc9io.cloudfront.net/ado/adonobestadobum/mainvisual_bg1.png"
          alt="Ado Visual"
          fill
          priority
          className="h-full w-full object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-background"></div>

      <motion.div
        initial="initial"
        animate={contentControls}
        variants={contentVariants}
        className="z-20 px-6 text-center flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <Image
            src="https://sp.universal-music.co.jp/ado/5thanniversary/assets/images/img-icon.png"
            alt="Ado Logo"
            width={80}
            height={80}
            className="h-32 w-32 md:h-40 md:w-40 object-contain"
            priority
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="sr-only">Ado --</span>The Voice That Shook Japan
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-3xl text-md leading-relaxed md:text-2xl text-white"
        >
          A force of nature. A whirlwind of raw emotion. A voice that defies
          expectations and leaves hearts trembling in its wake.
        </motion.p>
      </motion.div>
    </section>
  );
}
