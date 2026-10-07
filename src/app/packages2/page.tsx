"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/* ─── Package Data ───────────────────────────────────────────── */
const packages = [
  {
    id: "bronze",
    tier: "Bronze",
    tagline: "The Essential Story",
    price: "\u20ac1,800",
    priceNote: "Starting investment",
    hours: "4 Hours",
    images: 250,
    album: "Digital gallery only",
    photographers: "1 Lead Photographer",
    filmAnalog: false,
    sneak: "72-Hour highlight preview",
    travel: "Lisbon area included",
    features: [
      "250+ fully edited high-resolution images",
      "Private online gallery (5-year hosting)",
      "Print release & personal reproduction rights",
      "Personalised pre-wedding consultation",
      "Film-emulation colour grading",
    ],
    cta: "Book the Bronze",
    bg: "/selected-photos/DSC05277.jpg",
    accent: "#b87333",
    accentLight: "#d4956a",
    number: "01",
  },
  {
    id: "silver",
    tier: "Silver",
    tagline: "The Intimate Romance",
    price: "\u20ac2,800",
    priceNote: "All-inclusive",
    hours: "6 Hours",
    images: 450,
    album: "A5 premium photobook",
    photographers: "1 Lead + 1 Second Shooter",
    filmAnalog: true,
    sneak: "48-Hour sneak peek gallery",
    travel: "Mainland Portugal included",
    features: [
      "450+ curated fine-art edited images",
      "A5 30-page premium photobook",
      "35mm analog film roll included",
      "Private gallery with unlimited guest downloads",
      "Pre-wedding engagement session (1 hr)",
    ],
    cta: "Book the Silver",
    bg: "/selected-photos/DSC04787.jpg",
    accent: "#9aa4b2",
    accentLight: "#c5cdd6",
    number: "02",
  },
  {
    id: "gold",
    tier: "Gold",
    tagline: "The Full Day Story",
    price: "\u20ac4,200",
    priceNote: "Our most beloved",
    hours: "10 Hours",
    images: 750,
    album: "30\u00d730cm linen heirloom album",
    photographers: "2 Photographers (Irene & John)",
    filmAnalog: true,
    sneak: "48-Hour express sneak peek",
    travel: "All Portugal + Azores included",
    features: [
      "750+ masterfully edited high-resolution images",
      "30\u00d730cm 40-page linen heirloom album",
      "35mm analog + digital hybrid capture",
      "Same-day reception slideshow preview",
      "Complimentary couple session included",
      "10-year private gallery with lifetime backup",
    ],
    cta: "Book the Gold",
    bg: "/selected-photos/DSC08527.jpg",
    accent: "#c9a84c",
    accentLight: "#e0c97a",
    number: "03",
  },
  {
    id: "platinum",
    tier: "Platinum",
    tagline: "The Multi-Day Destination",
    price: "\u20ac6,500",
    priceNote: "Complete destination experience",
    hours: "3 Days",
    images: 1200,
    album: "Italian leather heirloom + 2 parent albums",
    photographers: "2 Photographers + Drone Pilot",
    filmAnalog: true,
    sneak: "Same-day reception + 48h full gallery",
    travel: "Europe-wide travel included",
    features: [
      "1,200+ images across 3 full days of coverage",
      "Italian leather heirloom album + 2 parent duplicates",
      "Medium format 120 & 35mm film included",
      "Licensed aerial drone photography & video",
      "Welcome dinner, wedding day & farewell brunch",
      "Personal planning sessions with Irene & John",
      "Lifetime archival cloud gallery backup",
    ],
    cta: "Book the Platinum",
    bg: "/selected-photos/_DSC4026 copy2.jpg",
    accent: "#e5e4e2",
    accentLight: "#f5f4f2",
    number: "04",
  },
];

/* ─── Inline SVG Icons ───────────────────────────────────────── */
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function FilmIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ─── Package Slide ──────────────────────────────────────────── */
const slideVariants = {
  enter: (d: number) => ({
    opacity: 0,
    y: d > 0 ? 50 : -50,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      staggerChildren: 0.08,
    },
  },
  exit: (d: number) => ({
    opacity: 0,
    y: d > 0 ? -50 : 50,
    filter: "blur(6px)",
    transition: {
      duration: 0.45,
      ease: [0.55, 0, 1, 0.45] as [number, number, number, number],
    },
  }),
};

const childVariants = {
  enter: { opacity: 0, y: 24 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3 },
  },
};

function PackageSlide({
  pkg,
  direction,
}: {
  pkg: (typeof packages)[0];
  direction: number;
}) {
  const stats = [
    { icon: <ClockIcon />, label: "Coverage", value: pkg.hours },
    { icon: <CameraIcon />, label: "Photos", value: `${pkg.images}+` },
    { icon: <BookIcon />, label: "Album", value: pkg.album },
    { icon: <FilmIcon />, label: "Analog Film", value: pkg.filmAnalog ? "Included" : "Add-on" },
  ];

  return (
    <motion.div
      key={pkg.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-16"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* LEFT — Identity */}
        <div className="space-y-6 lg:space-y-7">

          {/* Giant ghost number + tier name */}
          <motion.div variants={childVariants} className="flex items-center gap-4">
            <span
              className="font-serif leading-none font-light select-none"
              style={{
                fontSize: "clamp(72px, 10vw, 120px)",
                color: pkg.accent,
                opacity: 0.2,
              }}
            >
              {pkg.number}
            </span>
            <div>
              <span
                className="block text-[10px] uppercase tracking-[0.35em] font-semibold mb-1"
                style={{ color: pkg.accentLight }}
              >
                Collection
              </span>
              <h2
                className="font-serif font-normal text-white leading-none"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                {pkg.tier}
              </h2>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={childVariants}
            className="font-serif italic font-light text-white/75 leading-snug"
            style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
          >
            &ldquo;{pkg.tagline}&rdquo;
          </motion.p>

          {/* Price */}
          <motion.div variants={childVariants}>
            <span
              className="font-serif font-light text-white"
              style={{ fontSize: "clamp(44px, 6vw, 68px)" }}
            >
              {pkg.price}
            </span>
            <span
              className="block text-xs uppercase tracking-[0.22em] font-medium mt-1"
              style={{ color: pkg.accentLight }}
            >
              {pkg.priceNote}
            </span>
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={childVariants} className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-start gap-2.5 rounded-xl p-3 border border-white/10"
                style={{ background: "rgba(0,0,0,0.28)" }}
              >
                <span className="flex-shrink-0 mt-0.5" style={{ color: pkg.accentLight }}>
                  {s.icon}
                </span>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-white/45 mb-0.5">
                    {s.label}
                  </span>
                  <span className="text-xs font-medium text-white/90 leading-tight">
                    {s.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={childVariants}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-[#111] text-sm uppercase tracking-[0.16em] transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              style={{
                background: `linear-gradient(135deg, ${pkg.accent} 0%, ${pkg.accentLight} 100%)`,
              }}
            >
              {pkg.cta}
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Features card */}
        <motion.div
          variants={childVariants}
          className="rounded-2xl p-7 sm:p-9 shadow-2xl border border-white/12"
          style={{ background: "rgba(0,0,0,0.32)", backdropFilter: "blur(14px)" }}
        >
          <span
            className="block text-[10px] uppercase tracking-[0.3em] font-semibold mb-5"
            style={{ color: pkg.accentLight }}
          >
            What&apos;s Included
          </span>

          <ul className="space-y-3.5 mb-7">
            {pkg.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/85 font-light leading-relaxed">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: `${pkg.accent}44`, color: pkg.accentLight }}
                >
                  <CheckIcon />
                </span>
                {feat}
              </li>
            ))}
          </ul>

          <div className="pt-5 border-t border-white/10 space-y-3">
            {[
              { label: "Sneak Peek", value: pkg.sneak },
              { label: "Travel", value: pkg.travel },
              { label: "Team", value: pkg.photographers },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-start gap-4 text-xs">
                <span className="uppercase tracking-[0.14em] text-white/40 font-medium flex-shrink-0">
                  {row.label}
                </span>
                <span className="text-white/78 font-light text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Main Page Component ────────────────────────────────────── */
export default function Packages2Page() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  /* Map scroll position → active package index */
  useEffect(() => {
    const handler = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolledPast = -rect.top;
      const totalScroll = (packages.length - 1) * window.innerHeight;
      const raw = scrolledPast / totalScroll;
      const newIdx = Math.min(
        packages.length - 1,
        Math.max(0, Math.round(raw * (packages.length - 1)))
      );
      if (newIdx !== activeIdx) {
        setDirection(newIdx > activeIdx ? 1 : -1);
        setActiveIdx(newIdx);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [activeIdx]);

  const activePkg = packages[activeIdx];

  /* Helper: jump scroll to a specific package index */
  const jumpTo = (idx: number) => {
    if (!sectionRef.current) return;
    const sectionTop =
      sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const target = sectionTop + idx * window.innerHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
  };

  return (
    <main className="bg-[#0e1209] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── HERO INTRO ──────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end justify-center pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/selected-photos/DSC04313 copy.jpg"
            alt="Cinematic wedding backdrop"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1209]/70 via-[#0e1209]/20 to-[#0e1209]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-36">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="block text-xs uppercase tracking-[0.35em] font-semibold text-[#d59660] mb-5"
          >
            Investment &amp; Collections
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-serif font-light text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(44px, 8vw, 90px)" }}
          >
            Our Pricing<br />
            <span className="italic" style={{ color: "#d59660" }}>
              Collections
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-sm sm:text-base text-white/65 font-light max-w-xl mx-auto mb-12"
          >
            Scroll through each curated tier below to discover the perfect package for your celebration day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center gap-2 text-white/35 text-xs uppercase tracking-[0.22em]"
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronDownIcon />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SCROLL SENTINEL + STICKY VIEWPORT ───────────────── */}
      {/* The sentinel is 4×100vh tall; the sticky child is pinned */}
      <div
        ref={sectionRef}
        style={{ height: `${packages.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Background images — cross-fade */}
          {packages.map((pkg, i) => (
            <motion.div
              key={`bg-${pkg.id}`}
              className="absolute inset-0"
              animate={{ opacity: i === activeIdx ? 1 : 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              <img
                src={pkg.bg}
                alt={pkg.tier}
                className="w-full h-full object-cover"
              />
              {/* cinematic left-heavy overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(110deg, rgba(4,6,3,0.87) 0%, rgba(4,6,3,0.65) 42%, rgba(4,6,3,0.32) 100%)",
                }}
              />
              {/* bottom accent glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${pkg.accent}1a 0%, transparent 100%)`,
                }}
              />
            </motion.div>
          ))}

          {/* Animated slides */}
          <div className="absolute inset-0 flex items-center pt-16 sm:pt-20">
            <AnimatePresence custom={direction} mode="popLayout">
              {packages
                .filter((_, i) => i === activeIdx)
                .map((pkg) => (
                  <PackageSlide key={pkg.id} pkg={pkg} direction={direction} />
                ))}
            </AnimatePresence>
          </div>

          {/* Right-side nav dots */}
          <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
            {packages.map((pkg, i) => (
              <button
                key={`dot-${pkg.id}`}
                onClick={() => jumpTo(i)}
                className="group flex items-center gap-2.5 focus:outline-none"
                aria-label={`Jump to ${pkg.tier}`}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.14em] font-semibold hidden sm:block transition-all duration-300"
                  style={{
                    color:
                      i === activeIdx
                        ? activePkg.accentLight
                        : "rgba(255,255,255,0.35)",
                    opacity: i === activeIdx ? 1 : 0,
                  }}
                >
                  {pkg.tier}
                </span>
                <motion.div
                  className="rounded-full"
                  animate={{
                    width: i === activeIdx ? 8 : 5,
                    height: i === activeIdx ? 28 : 5,
                    opacity: i === activeIdx ? 1 : 0.4,
                    background:
                      i === activeIdx
                        ? activePkg.accent
                        : "rgba(255,255,255,0.45)",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </button>
            ))}
          </div>

          {/* Top-left package counter label */}
          <div className="absolute top-20 sm:top-24 left-5 sm:left-10 z-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={`label-${activePkg.id}`}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 14 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-7 h-px" style={{ background: activePkg.accent }} />
                <span
                  className="text-[10px] uppercase tracking-[0.3em] font-semibold"
                  style={{ color: activePkg.accentLight }}
                >
                  {activePkg.number} / 0{packages.length}&nbsp;&nbsp;·&nbsp;&nbsp;{activePkg.tier}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/8 z-40">
            <motion.div
              className="h-full"
              animate={{ width: `${((activeIdx + 1) / packages.length) * 100}%` }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              style={{ background: activePkg.accent }}
            />
          </div>
        </div>
      </div>

      {/* ── COMPARISON TABLE ────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0e1209] border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#d59660] font-semibold">
              At a Glance
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-light mt-3 mb-3">
              Compare All Packages
            </h2>
            <p className="text-sm text-white/55 font-light max-w-lg mx-auto">
              Every detail laid out clearly so you can select the collection that speaks to your vision.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm text-white/80">
              <thead className="border-b border-white/10 bg-white/[0.04]">
                <tr>
                  <th className="text-left py-5 px-6 text-white/45 text-xs uppercase tracking-[0.2em] font-medium">
                    Feature
                  </th>
                  {packages.map((p) => (
                    <th
                      key={p.id}
                      className="py-5 px-4 text-center text-xs uppercase tracking-[0.18em] font-bold"
                      style={{ color: p.accentLight }}
                    >
                      {p.tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {[
                  { label: "Price", values: packages.map((p) => p.price) },
                  { label: "Coverage", values: packages.map((p) => p.hours) },
                  { label: "Edited Images", values: packages.map((p) => `${p.images}+`) },
                  { label: "Photographers", values: ["1 Lead", "1 Lead + 2nd", "Irene & John", "2 + Drone"] },
                  { label: "Analog Film", values: ["Add-on", "35mm Included", "35mm Included", "120 + 35mm"] },
                  { label: "Album", values: ["Digital only", "A5 Photobook", "30\u00d730cm Linen", "Leather + Parents"] },
                  { label: "Engagement Session", values: ["\u2014", "1 hr", "Full session", "Full session"] },
                  { label: "Travel", values: ["Lisbon area", "All Portugal", "Portugal + Azores", "Europe-wide"] },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white/[0.018]" : ""}
                  >
                    <td className="py-4 px-6 text-white/45 text-xs uppercase tracking-[0.12em] font-medium">
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className="py-4 px-4 text-center text-xs transition-colors duration-500"
                        style={{
                          color:
                            j === activeIdx
                              ? packages[j].accentLight
                              : "rgba(255,255,255,0.7)",
                          fontWeight: j === activeIdx ? 500 : 300,
                        }}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/selected-photos/DSC00948.jpg"
            alt="Wedding celebration"
            className="w-full h-full object-cover opacity-18"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1209]/95 to-[#0e1209]/75" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d59660] font-semibold">
            Reserve Your Date
          </span>
          <h2
            className="font-serif font-light text-white mt-4 mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 58px)" }}
          >
            Let&apos;s Create Something<br />
            <span className="italic text-[#d59660]">Unforgettable Together</span>
          </h2>
          <p className="text-sm text-white/65 font-light max-w-xl mx-auto mb-10">
            Peak Portugal dates (May&ndash;October) fill fast. Reach out today to confirm your availability and reserve your place in our calendar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-10 py-4 rounded-full bg-[#ca8b52] hover:bg-[#b87a41] text-white text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Request A Quote
            </Link>
            <Link
              href="/packages"
              className="px-10 py-4 rounded-full border border-white/25 hover:border-white/55 text-white/80 hover:text-white text-xs uppercase tracking-[0.22em] font-light transition-all duration-300"
            >
              View Full Packages Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
