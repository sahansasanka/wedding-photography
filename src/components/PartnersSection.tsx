"use client";

import React from "react";
import Image from "next/image";
import TornDivider from "./TornDivider";
import { featuredPhotos } from "@/data/galleryData";

export default function PartnersSection() {
  return (
    <section className="relative bg-cream-100 text-ink-900 pt-16 sm:pt-24 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink-900 tracking-tight mb-12 sm:mb-16">
          Partners In Life &amp; Love
        </h2>

        {/* Polaroid Cards Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 pb-12 sm:pb-20">
          {/* Polaroid 1: Irene */}
          <div className="polaroid-card w-full max-w-[280px] sm:max-w-[320px] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="overflow-hidden bg-sand aspect-[4/5] relative">
              <img
                src={featuredPhotos.aboutPartner1.src}
                alt="Irene Leon - Lead Photographer"
                className="w-full h-full object-cover contrast-105 hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-4 pb-1 text-center">
              <p className="font-script text-xl sm:text-2xl text-ink-900 tracking-wider">
                IRENE LEON — THE BRIDE
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-600 font-light mt-0.5">
                Lead Fine-Art Photographer
              </p>
            </div>
          </div>

          {/* Polaroid 2: John */}
          <div className="polaroid-card w-full max-w-[280px] sm:max-w-[320px] transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="overflow-hidden bg-sand aspect-[4/5] relative">
              <img
                src={featuredPhotos.aboutPartner2.src}
                alt="John Smith - Creative Director"
                className="w-full h-full object-cover contrast-105 hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-4 pb-1 text-center">
              <p className="font-script text-xl sm:text-2xl text-ink-900 tracking-wider">
                JOHN SMITH — THE GROOM
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-600 font-light mt-0.5">
                Creative Director &amp; Filmmaker
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Paper Divider: Cream to Olive */}
      <TornDivider type="cream-to-olive" />
    </section>
  );
}
