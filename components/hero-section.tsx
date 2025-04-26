import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ado-shop.com/cdn/shop/files/Ado_BEST_5000x2000_banner_ENG2.jpg?width=2000"
          alt="Ado Fan Art"
          fill
          priority
          className="object-cover opacity-40 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
          <span className="text-ado-key">A fan web</span> for Japan's Vocal
          Powerhouse
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-accent-foreground">
          This fan-made site celebrates the incredible talent and artistry of
          Ado, whose music has touched millions of hearts worldwide.
        </p>
      </div>
    </section>
  );
}
