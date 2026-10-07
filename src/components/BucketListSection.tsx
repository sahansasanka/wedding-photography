"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Check, Plane } from "lucide-react";

const bucketPlaces = [
  {
    name: "Peru",
    image: "/images/bucket_peru.jpg",
    rotate: "-rotate-3",
    description: "Inca trails & Sacred Valley sunsets",
  },
  {
    name: "New Zealand",
    image: "/images/bucket_nz.jpg",
    rotate: "rotate-2",
    description: "Milford Sound fjords & mountain peaks",
  },
  {
    name: "Maldives",
    image: "/images/bucket_maldives.jpg",
    rotate: "-rotate-1",
    description: "Turquoise waters & coral atolls",
  },
  {
    name: "Japan",
    image: "/images/bucket_japan.jpg",
    rotate: "rotate-3",
    description: "Kyoto cherry blossoms & ancient shrines",
  },
  {
    name: "Portugal",
    image: "/images/bucket_portugal.jpg",
    rotate: "-rotate-2",
    description: "Ericeira surf & Lisbon tile architecture",
  },
];

export default function BucketListSection() {
  const [copied, setCopied] = useState(false);

  const copyBankInfo = () => {
    navigator.clipboard.writeText("DE1234567890");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative bg-cream-100 text-ink-900 pt-16 sm:pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink-900 font-normal mb-4">
          Contribute to our bucket list
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-ink-600 max-w-xl mx-auto font-light leading-relaxed mb-6">
          Having you there is the greatest gift of all. If you&apos;d like to do
          something extra special, a contribution to our honeymoon adventures
          would be deeply appreciated.
        </p>

        {/* Bank Registry Details Bar */}
        <div className="inline-flex items-center space-x-3 bg-cream-200/60 border border-cream-300/80 px-5 py-2.5 rounded-full text-xs font-mono text-ink-800 mb-12 sm:mb-16">
          <span>Bank Transfer: DE1234567890</span>
          <span className="text-ink-400">|</span>
          <span>Message: &quot;Honeymoon Fund&quot;</span>
          <button
            onClick={copyBankInfo}
            className="ml-2 p-1 hover:bg-cream-300 rounded text-ink-700 hover:text-ink-900 transition-colors"
            title="Copy IBAN"
            aria-label="Copy IBAN"
          >
            {copied ? (
              <Check size={14} className="text-olive-700" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>

        {/* 5 Tilted Polaroids Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto items-end pb-8">
          {bucketPlaces.map((place, idx) => (
            <div
              key={idx}
              className={`polaroid-card ${place.rotate} hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer group`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-sand relative">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 text-center">
                <p className="font-serif text-sm sm:text-base text-ink-900 font-medium tracking-wide">
                  {place.name}
                </p>
                <p className="text-[9px] uppercase tracking-wider text-ink-500 font-light mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
