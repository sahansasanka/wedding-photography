"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Clock, Camera, Sparkles, Calendar } from "lucide-react";
import TornDivider from "./TornDivider";

interface Package {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  hours: string;
  deliverables: string[];
  recommended?: boolean;
}

const packages: Package[] = [
  {
    id: "elopement",
    name: "The Intimate Story",
    subtitle: "For elopements & intimate ceremonies up to 30 guests",
    price: "€2,400",
    hours: "5 Hours Coverage",
    deliverables: [
      "1 Lead Fine-Art Photographer (Irene or John)",
      "350+ Curated high-resolution edited images",
      "Online private password-protected gallery",
      "Print release & full reproduction rights",
      "Highlight sneak peek delivered in 48 hours",
      "Personalized location scouting in Portugal",
    ],
  },
  {
    id: "editorial",
    name: "The Full Wedding Story",
    subtitle: "Our signature all-day editorial coverage from prep to party",
    price: "€4,200",
    hours: "10 Hours Coverage",
    recommended: true,
    deliverables: [
      "2 Photographers (Irene & John together)",
      "750+ High-resolution fine-art edited images",
      "35mm Analog film & digital hybrid capture",
      "Online private gallery with unlimited downloads",
      "Luxury linen 30x30cm fine-art album (40 pages)",
      "Full sneak peek gallery in 48 hours",
      "Pre-wedding couple session included",
    ],
  },
  {
    id: "destination",
    name: "The Multi-Day Weekend",
    subtitle: "Complete destination experience: Welcome dinner to Farewell brunch",
    price: "€6,500",
    hours: "3 Days / Full Weekend",
    deliverables: [
      "Full coverage of Welcome Drinks, Wedding Day & Farewell Brunch",
      "2 Photographers + 1 Assistant / Aerial drone pilot",
      "1,200+ Masterfully edited high-res images",
      "Medium format & 35mm film rolls delivered",
      "Custom handcrafted leather heirloom album + 2 parent albums",
      "Same-day preview slides for wedding reception",
      "All travel expenses within mainland Portugal included",
    ],
  },
];

export default function PackagesSection() {
  const [viewMode, setViewMode] = useState<"schedule" | "pricing">("schedule");

  return (
    <section id="packages" className="relative bg-olive-900 text-cream-100 pt-16 sm:pt-24 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle between Wedding Schedule & Photography Packages */}
        <div className="flex items-center justify-center mb-14">
          <div className="inline-flex rounded-full p-1 bg-olive-950/80 border border-olive-700/60 shadow-inner">
            <button
              onClick={() => setViewMode("schedule")}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all font-light ${
                viewMode === "schedule"
                  ? "bg-cream-100 text-olive-900 font-medium shadow-md"
                  : "text-cream-300 hover:text-white"
              }`}
            >
              Wedding Schedule
            </button>
            <button
              onClick={() => setViewMode("pricing")}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all font-light ${
                viewMode === "pricing"
                  ? "bg-cream-100 text-olive-900 font-medium shadow-md"
                  : "text-cream-300 hover:text-white"
              }`}
            >
              Photography Packages
            </button>
          </div>
        </div>

        {/* View 1: Mockup Exact Wedding Day Timeline */}
        {viewMode === "schedule" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 sm:pb-24">
            {/* Left Column: Floating Invitation Card & Vintage Car Backdrop */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[380px]">
                {/* Background image of vintage car wheel */}
                <div className="rounded-lg overflow-hidden shadow-2xl opacity-60">
                  <img
                    src="/images/schedule_backdrop.jpg"
                    alt="Vintage car texture"
                    className="w-full h-[520px] object-cover"
                  />
                </div>

                {/* Floating Cream Invitation Card */}
                <div className="absolute inset-x-4 top-10 bg-cream-100 text-ink-900 p-8 sm:p-10 rounded-sm shadow-2xl border border-cream-300/80 text-center">
                  {/* Crest / Emblem */}
                  <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-olive-900/10 flex items-center justify-center border border-olive-900/20">
                    <span className="font-serif text-lg text-olive-900 font-bold">
                      ❦
                    </span>
                  </div>

                  <p className="text-[10px] tracking-[0.28em] uppercase text-ink-600 font-light mb-4">
                    Join Us To Tie The Knot
                  </p>

                  <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 tracking-wide font-normal mb-3">
                    IRENE &amp; JOHN
                  </h3>

                  <div className="w-12 h-[1px] bg-ink-400/40 mx-auto my-4" />

                  <p className="font-serif text-xl sm:text-2xl text-ink-800 tracking-widest font-light">
                    31.03.27
                  </p>

                  <p className="text-[11px] text-ink-600 font-light mt-6 tracking-wider uppercase">
                    Quinta da Luz do Mar · Portugal
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Schedule Timeline matching mockup */}
            <div className="lg:col-span-7 space-y-12">
              {/* Event 1: Welcome Evening */}
              <div className="border-b border-olive-700/50 pb-8">
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-cream-300/70 border-b border-cream-300/30 pb-0.5 mb-2">
                  Friday · 30 March 2028
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-cream-100 font-normal mb-3">
                  Welcome Evening
                </h3>
                <p className="text-xs sm:text-sm font-light text-cream-200/90 mb-2">
                  14:00 — Terrace at Quinta da Luz do Mar
                </p>
                <p className="text-xs sm:text-sm text-cream-300/70 leading-relaxed font-light">
                  A relaxed gathering to welcome everyone to Ericeira. Join us on
                  the terrace for light bites and sunset views as we ease into
                  the weekend together.
                </p>
              </div>

              {/* Event 2: The Wedding Day */}
              <div className="border-b border-olive-700/50 pb-8">
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-cream-300/70 border-b border-cream-300/30 pb-0.5 mb-2">
                  Saturday · 31 March 2028
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl text-cream-100 font-normal mb-2">
                  The Wedding Day
                </h3>
                <p className="text-xs sm:text-sm text-cream-200/90 italic font-serif mb-6">
                  Location: Quinta da Luz do Mar, Ericeira, Portugal
                </p>

                {/* Sub schedule items */}
                <div className="space-y-5 pl-2 border-l border-olive-600/40">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-cream-100">
                      14:00 — Ceremony
                    </h4>
                    <p className="text-xs text-cream-300/70 font-light mt-0.5">
                      We gather in the gardens of Quinta da Luz for the ceremony.
                      Please arrive a few minutes early — doors open at 13:30.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-cream-100">
                      15:00 — Drinks &amp; mingle
                    </h4>
                    <p className="text-xs text-cream-300/70 font-light mt-0.5">
                      Glasses of prosecco and Aperol spritz await — join us on the
                      terrace for light bites and great company under the Portuguese
                      sky.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-cream-100">
                      17:00 — Dinner in the hall
                    </h4>
                    <p className="text-xs text-cream-300/70 font-light mt-0.5">
                      A candlelit seated dinner in the grand hall. Expect
                      Portuguese inspired cuisine, heartfelt speeches, and a
                      surprise or two.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-cream-100">
                      20:00 — Party &amp; dancing
                    </h4>
                    <p className="text-xs text-cream-300/70 font-light mt-0.5">
                      The night is ours — dancing, laughter, and music under the
                      Portuguese stars. We&apos;ll see you on the dance floor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 3: Farewell Brunch */}
              <div className="pb-4">
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-cream-300/70 border-b border-cream-300/30 pb-0.5 mb-2">
                  Sunday · 1 April 2028
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-cream-100 font-normal mb-3">
                  Farewell Brunch
                </h3>
                <p className="text-xs sm:text-sm font-light text-cream-200/90 mb-2">
                  10:30 AM — 1:00 PM Quinta da Luz do Mar
                </p>
                <p className="text-xs sm:text-sm text-cream-300/70 leading-relaxed font-light">
                  A slow and easy farewell. Coffee, fresh fruit, warm pastries, and
                  one last moment together before departures.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Photography Packages & Pricing */}
        {viewMode === "pricing" && (
          <div className="pb-16 sm:pb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="font-serif text-3xl sm:text-5xl text-cream-100 font-normal mb-3">
                Photography Collections &amp; Investment
              </h3>
              <p className="text-xs sm:text-sm text-cream-300/80 font-light">
                Tailored for lovers of artful, unhurried, editorial imagery.
                Available across Portugal, Europe, and worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${
                    pkg.recommended
                      ? "bg-cream-100 text-ink-900 shadow-polaroid-lg transform md:-translate-y-2 border-2 border-gold-400"
                      : "bg-olive-850 text-cream-100 border border-olive-700/60 shadow-lg"
                  }`}
                >
                  {pkg.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-olive-900 text-cream-100 text-[10px] uppercase tracking-[0.25em] px-4 py-1 rounded-full font-medium shadow-md">
                      Most Beloved Collection
                    </span>
                  )}

                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl mb-1">
                      {pkg.name}
                    </h4>
                    <p
                      className={`text-xs mb-6 font-light ${
                        pkg.recommended ? "text-ink-600" : "text-cream-300/80"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>

                    <div className="mb-6 pb-6 border-b border-current/10">
                      <span className="font-serif text-4xl sm:text-5xl font-light">
                        {pkg.price}
                      </span>
                      <span
                        className={`text-xs ml-2 uppercase tracking-wider ${
                          pkg.recommended ? "text-ink-500" : "text-cream-400"
                        }`}
                      >
                        / {pkg.hours}
                      </span>
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start text-xs font-light">
                          <Check
                            size={14}
                            className={`mr-2.5 mt-0.5 flex-shrink-0 ${
                              pkg.recommended ? "text-olive-700" : "text-gold-300"
                            }`}
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#rsvp"
                    className={`block w-full py-3 text-center text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all ${
                      pkg.recommended
                        ? "bg-olive-900 hover:bg-olive-950 text-cream-100 shadow-md"
                        : "bg-cream-100/10 hover:bg-cream-100 hover:text-olive-900 text-cream-100 border border-cream-200/30"
                    }`}
                  >
                    Inquire For Your Date
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Torn Paper Divider: Olive to Cream */}
      <TornDivider type="olive-to-cream-3" />
    </section>
  );
}
