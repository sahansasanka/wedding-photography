"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import TornDivider from "./TornDivider";
import { featuredPhotos } from "@/data/galleryData";

const venueImages = [
  {
    src: featuredPhotos.venuePhoto.src,
    alt: "Outdoor ceremony setup at Quinta da Luz do Mar",
  },
  {
    src: featuredPhotos.stay1.src,
    alt: "Poolside cocktail terrace overlooking ocean",
  },
  {
    src: featuredPhotos.stay2.src,
    alt: "Sunlit courtyard with coastal greenery",
  },
];

const stays = [
  {
    id: 1,
    title: "Local Quintas & B&Bs",
    image: featuredPhotos.stay1.src,
    description:
      "For an authentic Portuguese experience, we recommend the charming farmhouses and B&Bs around Ericeira — surrounded by nature, minutes from the venue.",
    mapUrl: "https://maps.google.com/?q=Ericeira+Portugal",
    tag: "Charming & Historic",
  },
  {
    id: 2,
    title: "Hotel da Vila Ericeira",
    image: featuredPhotos.stay2.src,
    description:
      "A stylish 4-star hotel in the heart of Ericeira village, a 10-minute drive from the venue. Mention our wedding for preferred rates.",
    mapUrl: "https://maps.google.com/?q=Hotel+da+Vila+Ericeira",
    tag: "10 Min From Venue",
  },
  {
    id: 3,
    title: "Peniche & Mafra Resorts",
    image: featuredPhotos.stay3.src,
    description:
      "5-star options along the Silver Coast, 20-30 min from Quinta da Luz do Mar. Use code IRENE&JOHN2028 for 15% discount. Highly recommended.",
    mapUrl: "https://maps.google.com/?q=Peniche+Resorts+Portugal",
    tag: "15% Off Code",
  },
];

export default function VenueSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % venueImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + venueImages.length) % venueImages.length
    );
  };

  return (
    <section id="location" className="relative bg-cream-100 text-ink-900 pt-16 sm:pt-24 pb-0 overflow-hidden">
      {/* Venue Feature Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          {/* Left Column: Venue Heading */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl xl:text-6xl text-ink-900 font-normal leading-[1.1] mb-3">
              Quinta da Luz do Mar
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-ink-600 font-light italic">
              Ericeira, Portugal
            </p>
          </div>

          {/* Center Column: Venue Carousel */}
          <div className="lg:col-span-4">
            <div className="relative rounded-sm overflow-hidden shadow-polaroid-lg bg-white p-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={venueImages[currentSlide].src}
                  alt={venueImages[currentSlide].alt}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />

                {/* Carousel Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-ink-900 shadow-md transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-ink-900 shadow-md transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center space-x-2 py-2">
                {venueImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlide
                        ? "w-6 bg-olive-800"
                        : "w-1.5 bg-ink-400/40"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Venue Description */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col justify-center">
            <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-light mb-6">
              Set just outside Ericeira, Quinta da Luz do Mar is surrounded by open
              fields and Atlantic air, with views stretching toward the coastline.
              Quiet, natural, and understated, it feels deeply connected to its
              surroundings.
            </p>
            <div>
              <a
                href="https://maps.google.com/?q=Quinta+da+Luz+do+Mar+Ericeira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-medium text-ink-900 border-b border-ink-900/60 hover:border-ink-900 pb-1 group"
              >
                Find on Google Maps
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Accommodation / Where to sleep Section */}
        <div id="hotels" className="pt-8 pb-16 sm:pb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h3 className="font-serif text-3xl sm:text-5xl text-ink-900 font-normal mb-3">
              Where to sleep and recover after the party
            </h3>
            <p className="text-xs sm:text-sm text-ink-600 font-light">
              To make your trip easier, we&apos;ve curated the best nearby stays and travel tips.
            </p>
          </div>

          {/* 3 Columns Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stays.map((stay) => (
              <div
                key={stay.id}
                className="bg-white rounded-sm overflow-hidden shadow-polaroid hover:shadow-polaroid-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={stay.image}
                      alt={stay.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-olive-900/80 text-cream-100 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-sm backdrop-blur-xs font-light">
                      {stay.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-xl sm:text-2xl text-ink-900 mb-2">
                      {stay.title}
                    </h4>
                    <p className="text-xs text-ink-700 leading-relaxed font-light">
                      {stay.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href={stay.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium bg-olive-800 hover:bg-olive-900 text-cream-100 rounded-sm transition-colors group"
                  >
                    Find on Google Maps
                    <ExternalLink
                      size={12}
                      className="ml-2 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Torn Paper Divider: Cream to Olive */}
      <TornDivider type="cream-to-olive-2" />
    </section>
  );
}
