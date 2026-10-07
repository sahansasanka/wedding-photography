"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import TornDivider from "./TornDivider";
import { featuredPhotos } from "@/data/galleryData";

// Curated landscape & atmospheric photos for full-background carousel
const heroBackgrounds = [
  {
    src: "/selected-photos/DSC08527.jpg",
    alt: "Golden hour wedding landscape in Portugal",
  },
  {
    src: "/selected-photos/DSC04787.jpg",
    alt: "Romantic sunset backdrop",
  },
  {
    src: "/selected-photos/DSC08519.jpg",
    alt: "Portuguese wedding estate landscape",
  },
  {
    src: "/selected-photos/DSC00421.jpg",
    alt: "Outdoor wedding celebration scenery",
  },
  {
    src: "/selected-photos/DSC04313 copy.jpg",
    alt: "Dramatic golden horizon",
  },
  {
    src: "/selected-photos/DSC08533.jpg",
    alt: "Sunset golden glow",
  },
  {
    src: "/selected-photos/DSC05354.jpg",
    alt: "Evening wedding reception atmosphere",
  },
  {
    src: "/selected-photos/DSC00816.jpg",
    alt: "Intimate celebration under evening light",
  },
];

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 264,
    hours: 4,
    minutes: 43,
    seconds: 29,
  });
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-playing background image carousel every 4 seconds in continuous loop
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 4000);
    return () => clearInterval(bgTimer);
  }, []);

  // Live countdown timer calculation for 31.03.2027
  useEffect(() => {
    const targetDate = new Date("2027-03-31T14:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-olive-950 text-cream-100 pt-28 sm:pt-36 pb-0 overflow-hidden">
      {/* 1. Full-Background Image Carousel (Auto-playing every 4s with smooth cross-fade) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroBackgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={bg.src}
              alt={bg.alt}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[4000ms] ease-out ${
                idx === currentBgIndex ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}

        {/* 2. Semi-Transparent Dark & Olive Tint Overlay for High-Contrast Text Readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/85 via-olive-950/75 to-olive-900/95 backdrop-blur-[1px]" />

        {/* Radial vignette for soft cinematic lighting */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, transparent 20%, rgba(0,0,0,0.85) 90%)",
          }}
        />
      </div>

      {/* 3. Foreground Elements (Overlaid on top of moving background) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner Tag */}
        <div className="text-center mb-6 sm:mb-8 px-4">
          <span className="text-xs sm:text-sm tracking-[0.28em] uppercase text-cream-200 font-light inline-block drop-shadow-sm">
            Join Us To Tie The Knot
          </span>
        </div>

        {/* Hero Headline & Arched Couple Photo Grid */}
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          {/* Big Editorial Name: IRENE (Left) */}
          <div className="w-full md:w-auto text-center md:text-right md:pr-6 lg:pr-10 z-0">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] tracking-tight font-normal text-cream-100 select-none drop-shadow-lg">
              IRENE
            </h1>
          </div>

          {/* Center Arched / Rounded Photo Card */}
          <div className="relative my-6 md:my-0 z-10 flex-shrink-0 w-[290px] sm:w-[380px] md:w-[420px] lg:w-[480px]">
            <div className="relative rounded-t-[140px] sm:rounded-t-[200px] rounded-b-2xl overflow-hidden shadow-2xl border-4 border-cream-100/20 bg-olive-950/80 backdrop-blur-xs">
              <img
                src={featuredPhotos.hero.src}
                alt="Irene & John wedding portrait"
                className="w-full h-[380px] sm:h-[480px] md:h-[530px] lg:h-[590px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Card Bar inside photo: 31.03.2027 (left) and PORTUGAL + Play icon (right) */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 sm:p-5 flex items-center justify-between text-white">
                <span className="text-[11px] sm:text-xs tracking-[0.2em] font-mono uppercase text-cream-200">
                  31.03.2027
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-light text-cream-200">
                    PORTUGAL
                  </span>
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all group"
                    aria-label="Play teaser film"
                  >
                    <Play
                      size={12}
                      className="text-white fill-white ml-0.5 group-hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Big Editorial Name: JOHN (Right) */}
          <div className="w-full md:w-auto text-center md:text-left md:pl-6 lg:pl-10 z-0">
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] tracking-tight font-normal text-cream-100 select-none drop-shadow-lg">
              JOHN
            </h2>
          </div>
        </div>

        {/* Save The Date Editorial Block */}
        <div className="text-center mt-12 sm:mt-16 max-w-2xl mx-auto px-4">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-cream-100 tracking-wide mb-2 drop-shadow-md">
            Save The Date
          </h3>
          <p className="font-serif text-xl sm:text-2xl text-cream-200 tracking-widest mb-6 drop-shadow-sm">
            31.03.27
          </p>
          <p className="text-cream-200/90 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light mb-8 drop-shadow-sm">
            We are getting married and we could not be happier to share this moment with you.
            Here you&apos;ll find the full wedding details: the schedule, venue, what to wear,
            where to stay, and your RSVP. We can&apos;t wait to see you in Portugal in March!
          </p>

          <a
            href="#rsvp"
            className="inline-flex items-center text-xs tracking-[0.25em] uppercase text-cream-200 hover:text-white border-b border-cream-200/60 hover:border-white pb-1 font-medium transition-all group"
          >
            RSVP
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              &gt;
            </span>
          </a>
        </div>

        {/* Live Countdown Counter */}
        <div className="mt-14 sm:mt-16 mb-12 max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-4 divide-x divide-cream-300/30 text-center bg-olive-950/40 backdrop-blur-sm py-4 rounded-lg border border-cream-200/10">
            <div className="px-2 sm:px-6">
              <span className="block font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-100 font-light drop-shadow-md">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cream-300/90 font-light mt-1 block">
                Days
              </span>
            </div>
            <div className="px-2 sm:px-6">
              <span className="block font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-100 font-light drop-shadow-md">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cream-300/90 font-light mt-1 block">
                Hours
              </span>
            </div>
            <div className="px-2 sm:px-6">
              <span className="block font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-100 font-light drop-shadow-md">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cream-300/90 font-light mt-1 block">
                Minutes
              </span>
            </div>
            <div className="px-2 sm:px-6">
              <span className="block font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-100 font-light drop-shadow-md">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cream-300/90 font-light mt-1 block">
                Seconds
              </span>
            </div>
          </div>
        </div>

        {/* Subtle Carousel Progress Indicators */}
        <div className="flex items-center justify-center space-x-2 pb-10">
          {heroBackgrounds.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBgIndex(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === currentBgIndex
                  ? "w-8 bg-cream-100"
                  : "w-2 bg-cream-100/30 hover:bg-cream-100/60"
              }`}
              aria-label={`Go to background slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Torn Paper Divider: Transition smoothly from bottom of Hero to Cream */}
      <div className="relative z-20">
        <TornDivider type="olive-to-cream" />
      </div>

      {/* Video Modal Preview */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full bg-olive-950 rounded-2xl overflow-hidden shadow-2xl border border-olive-700">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 text-cream-200 hover:text-white bg-black/40 rounded-full p-2"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
                title="Wedding Teaser Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-olive-900 text-center">
              <p className="font-serif text-lg text-cream-100">
                Irene &amp; John · Portugal Wedding Film Teaser
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
