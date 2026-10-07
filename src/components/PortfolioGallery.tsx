"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  galleryData,
  galleryCategories,
  GalleryItem,
} from "@/data/galleryData";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Camera,
  MapPin,
  Sparkles,
} from "lucide-react";
import TornDivider from "./TornDivider";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Stories");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items dynamically based on category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All Stories") {
      return galleryData;
    }
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="relative bg-cream-100 text-ink-900 pt-20 sm:pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-olive-800 text-xs tracking-[0.25em] uppercase font-medium mb-3">
            <Sparkles size={14} />
            <span>Curated Portfolio Archive</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink-900 font-normal tracking-tight mb-4">
            The Wedding Gallery
          </h2>
          <p className="text-xs sm:text-sm text-ink-600 font-light leading-relaxed max-w-xl mx-auto">
            Explore 53 authentic photographs from our destination commissions.
            Every frame is captured with intentional light, raw emotion, and
            timeless fine-art composition.
          </p>

          {/* Dynamic Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {galleryCategories.map((category) => {
              const count =
                category === "All Stories"
                  ? galleryData.length
                  : galleryData.filter((i) => i.category === category).length;

              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleCount(12);
                  }}
                  className={`text-xs uppercase tracking-[0.16em] px-4 py-2 rounded-full transition-all duration-300 font-light flex items-center space-x-1.5 ${
                    isActive
                      ? "bg-olive-900 text-cream-100 shadow-md font-medium"
                      : "bg-cream-200/70 hover:bg-cream-300/80 text-ink-700 border border-cream-300"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] ml-1 px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-olive-800 text-cream-200"
                        : "bg-cream-300 text-ink-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid (Dynamic Masonry / Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {visibleItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-polaroid hover:shadow-polaroid-lg transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col"
            >
              {/* Photo Container */}
              <div
                className={`relative overflow-hidden bg-cream-200 ${
                  item.orientation === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors">
                      <Maximize2 size={14} />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-cream-200 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Minimal Caption Footer */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-cream-200/60">
                <div className="truncate mr-2">
                  <p className="font-serif text-sm text-ink-900 truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-ink-500 uppercase tracking-wider font-light flex items-center mt-0.5 truncate">
                    <MapPin size={10} className="mr-1 flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                </div>
                <span className="text-[10px] font-mono text-ink-400 bg-cream-100 px-2 py-0.5 rounded border border-cream-200 flex-shrink-0">
                  {item.orientation === "portrait" ? "3:4" : "4:3"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-olive-900 hover:bg-olive-950 text-cream-100 text-xs uppercase tracking-[0.22em] font-medium rounded-sm shadow-md transition-all group"
            >
              <span>Load More Photographs</span>
              <span className="text-cream-300 group-hover:translate-y-0.5 transition-transform">
                ({filteredItems.length - visibleCount} remaining)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex! - 1 + filteredItems.length) %
                  filteredItems.length
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex! + 1) % filteredItems.length
              );
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-6xl w-full max-h-[92vh] bg-olive-950 rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row border border-olive-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Pane */}
            <div className="md:w-3/4 flex items-center justify-center bg-black p-2 sm:p-4 max-h-[60vh] md:max-h-[90vh]">
              <img
                src={activeLightboxItem.src}
                alt={activeLightboxItem.title}
                className="max-w-full max-h-[58vh] md:max-h-[85vh] object-contain rounded-xs"
              />
            </div>

            {/* Metadata & Narrative Pane */}
            <div className="md:w-1/4 p-6 sm:p-8 bg-cream-100 text-ink-900 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-ink-500 font-medium mb-3">
                  <span>{activeLightboxItem.category}</span>
                  <span className="font-mono">
                    {lightboxIndex! + 1} / {filteredItems.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 mb-2 leading-tight">
                  {activeLightboxItem.title}
                </h3>

                <p className="text-xs text-olive-800 font-mono flex items-center mb-4">
                  <MapPin size={12} className="mr-1.5" />
                  {activeLightboxItem.location}
                </p>

                <p className="text-xs text-ink-700 leading-relaxed font-light mb-6">
                  {activeLightboxItem.story}
                </p>

                <div className="border-t border-cream-300 pt-4 space-y-2 text-[11px] text-ink-600 font-light">
                  <div className="flex justify-between">
                    <span>File:</span>
                    <span className="font-mono text-ink-800">
                      {activeLightboxItem.filename}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <span className="font-mono text-ink-800">
                      {activeLightboxItem.width} × {activeLightboxItem.height}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Aspect Ratio:</span>
                    <span className="font-mono text-ink-800">
                      {activeLightboxItem.aspectRatio} ({activeLightboxItem.orientation})
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cream-300 mt-6">
                <a
                  href="#rsvp"
                  onClick={() => setLightboxIndex(null)}
                  className="block w-full py-2.5 text-center text-xs uppercase tracking-[0.2em] font-medium bg-olive-900 hover:bg-olive-950 text-cream-100 rounded-sm transition-colors"
                >
                  Inquire For Your Date
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
