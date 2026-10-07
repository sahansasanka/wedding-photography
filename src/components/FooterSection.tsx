"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { featuredPhotos } from "@/data/galleryData";

export default function FooterSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 264,
    hours: 4,
    minutes: 43,
  });

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
        setTimeLeft({ days, hours, minutes });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-cream-100 text-ink-900 pt-16 sm:pt-24 pb-8 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Interlocking Rings Emblem */}
        <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
          <img
            src="/images/rings_icon.png"
            alt="Wedding Rings"
            className="w-10 h-10 object-contain opacity-80"
          />
        </div>

        {/* Closing Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink-900 font-normal max-w-2xl mx-auto leading-tight mb-14 sm:mb-20">
          We can&apos;t wait to celebrate this special day with you.
        </h2>

        {/* Fanned Polaroids Spread using Real Wedding Photos */}
        <div className="relative max-w-xl mx-auto mb-16 sm:mb-24 flex items-center justify-center py-6">
          <div className="relative flex items-center justify-center w-full h-[280px] sm:h-[340px]">
            {/* Left Polaroid */}
            <div className="polaroid-card absolute w-[160px] sm:w-[210px] transform -rotate-12 -translate-x-16 sm:-translate-x-28 hover:-translate-y-4 hover:rotate-[-6deg] transition-all duration-300 z-10">
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src={featuredPhotos.footerPolaroid1.src}
                  alt="Wedding celebration memory"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-script text-xs sm:text-sm text-ink-800 text-center pt-2">
                Pure Joy
              </p>
            </div>

            {/* Center Polaroid */}
            <div className="polaroid-card absolute w-[170px] sm:w-[230px] transform -translate-y-3 hover:-translate-y-6 transition-all duration-300 z-20 shadow-polaroid-lg">
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src={featuredPhotos.footerPolaroid2.src}
                  alt="Wedding celebration memory"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-script text-xs sm:text-sm text-ink-800 text-center pt-2">
                Timeless Romance
              </p>
            </div>

            {/* Right Polaroid */}
            <div className="polaroid-card absolute w-[160px] sm:w-[210px] transform rotate-12 translate-x-16 sm:translate-x-28 hover:-translate-y-4 hover:rotate-[6deg] transition-all duration-300 z-10">
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src={featuredPhotos.footerPolaroid3.src}
                  alt="Wedding celebration memory"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-script text-xs sm:text-sm text-ink-800 text-center pt-2">
                Forever &amp; Always
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Links on Left, Wedding Countdown on Right */}
        <div className="border-t border-cream-300 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-600 font-light gap-4">
          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6">
            <a href="/" className="hover:text-ink-900 transition-colors">
              Home
            </a>
            <a href="/#gallery" className="hover:text-ink-900 transition-colors">
              Gallery
            </a>
            <a href="/#story" className="hover:text-ink-900 transition-colors">
              Our Story
            </a>
            <a href="/packages" className="hover:text-ink-900 transition-colors font-medium text-olive-800">
              Packages
            </a>
            <a href="/#contact" className="hover:text-ink-900 transition-colors">
              Contact Us
            </a>
            <a href="/#contact" className="hover:text-ink-900 text-[#ca8b52] font-semibold transition-colors">
              Get In Touch
            </a>
          </div>

          <div className="font-mono text-ink-700 tracking-wider">
            Wedding countdown : {timeLeft.days} : {String(timeLeft.hours).padStart(2, "0")} : {String(timeLeft.minutes).padStart(2, "0")}
          </div>
        </div>

        <div className="text-center text-[10px] text-ink-400 font-light pt-4">
          © {new Date().getFullYear()} Irene &amp; John Wedding Photography · Fine Art &amp; Destination Storytelling
        </div>
      </div>
    </footer>
  );
}
