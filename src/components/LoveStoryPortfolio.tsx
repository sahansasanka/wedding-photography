"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronRight, Heart } from "lucide-react";
import TornDivider from "./TornDivider";
import { featuredPhotos } from "@/data/galleryData";

interface StoryItem {
  id: number;
  image: string;
  caption: string;
  category: string;
  alignment: "left" | "right" | "center-right" | "left-bottom";
  title?: string;
  location?: string;
}

const stories: StoryItem[] = [
  {
    id: 1,
    image: featuredPhotos.story1.src,
    caption:
      "It started with one conversation that lasted until sunrise — and we never really stopped talking after that.",
    category: "Sunrise & Intimate",
    alignment: "left",
    title: "The First Sunrise",
    location: "Cascais Coastline",
  },
  {
    id: 2,
    image: featuredPhotos.story2.src,
    caption:
      "We've wandered through markets, shared bad meals in great cities, danced in living rooms, and held each other through the hard moments. Every memory, big and small, led us here.",
    category: "Golden Hour",
    alignment: "right",
    title: "Golden Hour In Sintra",
    location: "Sintra Valleys",
  },
  {
    id: 3,
    image: featuredPhotos.story3.src,
    caption:
      "John asked Irene to marry him on a quiet evening with no fuss — just the two of them, a bottle of wine, and a yes that felt inevitable.",
    category: "The Proposal",
    alignment: "center-right",
    title: "The Sunset Proposal",
    location: "Alentejo Countryside",
  },
  {
    id: 4,
    image: featuredPhotos.story4.src,
    caption:
      "Portugal felt right from the moment we visited. The light, the warmth, the ocean — it's exactly how we want to begin our forever.",
    category: "Destination Mood",
    alignment: "left-bottom",
    title: "Rustic Picnic & Wine",
    location: "Ericeira Bluffs",
  },
];

const portfolioCategories = [
  "All Stories",
  "Editorial Weddings",
  "Intimate Elopements",
  "Destination",
  "Black & White",
];

export default function LoveStoryPortfolio() {
  const [activeTab, setActiveTab] = useState("All Stories");
  const [lightboxImage, setLightboxImage] = useState<StoryItem | null>(null);

  return (
    <section id="story" className="relative bg-olive-900 text-cream-100 pt-16 sm:pt-24 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-cream-100 tracking-tight mb-6">
            Our Love Story
          </h2>
          <p className="text-cream-200/80 text-xs sm:text-sm leading-relaxed font-light">
            We met by chance and chose each other every day since. What began as a
            quiet connection grew into the greatest adventure of our lives — and now
            we&apos;re inviting you to celebrate the next chapter with us in Portugal.
          </p>

          {/* Portfolio Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {portfolioCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-all duration-300 font-light ${
                  activeTab === tab
                    ? "bg-cream-100 text-olive-900 shadow-md font-medium"
                    : "text-cream-300/80 hover:text-white hover:bg-olive-800/60 border border-olive-700/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Staggered Editorial Story Layout (Matching Mockup Flow) */}
        <div className="space-y-16 sm:space-y-28 pb-16 sm:pb-24">
          {/* Story 1: Left Aligned */}
          <div className="flex flex-col md:flex-row items-start justify-start">
            <div className="w-full md:w-[380px] lg:w-[420px] bg-white rounded-sm overflow-hidden shadow-polaroid group">
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(stories[0])}
              >
                <img
                  src={stories[0].image}
                  alt={stories[0].caption}
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/80 text-olive-900 shadow-lg">
                    <Maximize2 size={16} />
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 bg-white text-ink-900">
                <p className="text-xs sm:text-[13px] text-ink-700 leading-relaxed font-light">
                  {stories[0].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Story 2: Right Aligned */}
          <div className="flex flex-col md:flex-row items-end justify-end">
            <div className="w-full md:w-[420px] lg:w-[460px] bg-white rounded-sm overflow-hidden shadow-polaroid group">
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(stories[1])}
              >
                <img
                  src={stories[1].image}
                  alt={stories[1].caption}
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/80 text-olive-900 shadow-lg">
                    <Maximize2 size={16} />
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 bg-white text-ink-900">
                <p className="text-xs sm:text-[13px] text-ink-700 leading-relaxed font-light">
                  {stories[1].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Story 3: Center-Right Aligned */}
          <div className="flex flex-col items-center justify-center md:pl-28">
            <div className="w-full md:w-[380px] lg:w-[410px] bg-white rounded-sm overflow-hidden shadow-polaroid group">
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(stories[2])}
              >
                <img
                  src={stories[2].image}
                  alt={stories[2].caption}
                  className="w-full h-[340px] sm:h-[390px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/80 text-olive-900 shadow-lg">
                    <Maximize2 size={16} />
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 bg-white text-ink-900">
                <p className="text-xs sm:text-[13px] text-ink-700 leading-relaxed font-light">
                  {stories[2].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Story 4: Left Aligned */}
          <div className="flex flex-col md:flex-row items-start justify-start">
            <div className="w-full md:w-[420px] lg:w-[450px] bg-white rounded-sm overflow-hidden shadow-polaroid group">
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(stories[3])}
              >
                <img
                  src={stories[3].image}
                  alt={stories[3].caption}
                  className="w-full h-[340px] sm:h-[390px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/80 text-olive-900 shadow-lg">
                    <Maximize2 size={16} />
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 bg-white text-ink-900">
                <p className="text-xs sm:text-[13px] text-ink-700 leading-relaxed font-light">
                  {stories[3].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Paper Divider: Olive to Cream */}
      <TornDivider type="olive-to-cream-2" />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full bg-cream-100 rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 text-ink-900 hover:text-black bg-white/80 rounded-full p-2"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-2 bg-black max-h-[75vh]">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.caption}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>
              <div className="p-8 flex flex-col justify-between text-ink-900">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-ink-500 font-semibold block mb-2">
                    {lightboxImage.category}
                  </span>
                  <h3 className="font-serif text-2xl text-ink-900 mb-3">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs text-ink-500 font-mono mb-4">
                    Location: {lightboxImage.location}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-light">
                    {lightboxImage.caption}
                  </p>
                </div>
                <div className="pt-6 border-t border-cream-300 flex items-center justify-between">
                  <span className="text-xs tracking-wider text-ink-500">
                    Shot on 35mm Film &amp; Leica M
                  </span>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="text-xs uppercase tracking-widest text-ink-900 font-semibold hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
