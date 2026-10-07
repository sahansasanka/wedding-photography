"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Sparkles,
  Camera,
  Clock,
  Film,
  Heart,
  ShieldCheck,
  Send,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Calendar,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactRsvpSection from "@/components/ContactRsvpSection";
import FooterSection from "@/components/FooterSection";
import TornDivider from "@/components/TornDivider";
import { featuredPhotos } from "@/data/galleryData";

interface Collection {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  hours: string;
  recommended?: boolean;
  deliverables: string[];
  filmRolls?: string;
  albumInfo: string;
}

const collections: Collection[] = [
  {
    id: "intimate",
    name: "The Intimate Story",
    subtitle: "Designed for elopements & intimate ceremonies with up to 30 cherished guests",
    price: "€2,400",
    hours: "5 Hours Coverage",
    recommended: false,
    filmRolls: "Optional analog 35mm add-on",
    albumInfo: "High-res digital archival files (Albums available a la carte)",
    deliverables: [
      "1 Lead Fine-Art Photographer (Irene or John)",
      "350+ Curated high-resolution edited images",
      "Online private password-protected gallery for 10 years",
      "Print release & full personal reproduction rights",
      "Curated 48-Hour highlight sneak peek gallery",
      "Tailored timeline and Portuguese location scouting",
      "Artful film-emulation color grading",
    ],
  },
  {
    id: "signature",
    name: "The Signature Wedding Story",
    subtitle: "Our most beloved collection — complete editorial coverage from morning prep to the dancefloor",
    price: "€4,200",
    hours: "10 Hours Coverage",
    recommended: true,
    filmRolls: "35mm Analog film rolls + Digital hybrid",
    albumInfo: "Handcrafted 30x30cm linen heirloom album (40 pages)",
    deliverables: [
      "2 Lead Photographers (Irene & John working together)",
      "750+ Masterfully edited high-resolution images",
      "35mm Analog vintage film & fine-art digital capture",
      "Luxury 30x30cm fine-art linen album (40 heavy-stock pages)",
      "Complementary pre-wedding engagement couple session",
      "Express 48-hour sneak peek gallery (40+ images)",
      "Private interactive online gallery with unlimited guest downloads",
      "Detailed wedding day photography schedule consultation",
    ],
  },
  {
    id: "destination",
    name: "The Multi-Day Destination Weekend",
    subtitle: "The ultimate destination experience — capturing your welcome dinner, wedding day, and farewell brunch",
    price: "€6,500",
    hours: "3 Days / Full Weekend",
    recommended: false,
    filmRolls: "Medium format 120 & 35mm film included",
    albumInfo: "Custom Italian leather heirloom album + 2 parent albums",
    deliverables: [
      "Full coverage: Welcome Drinks, Wedding Day & Farewell Brunch",
      "2 Photographers + 1 Licensed aerial drone pilot",
      "1,200+ Masterfully edited high-resolution images",
      "Medium format & 35mm film rolls processed in fine-art lab",
      "Custom handcrafted leather album + 2 mini duplicate parent albums",
      "Same-day preview slideshow for wedding reception evening",
      "Private gallery with lifetime archival cloud backup",
      "All travel expenses across mainland Portugal included",
    ],
  },
  {
    id: "bespoke",
    name: "Bespoke Worldwide Collection",
    subtitle: "For European & international destination celebrations (Italy, France, Greece & beyond)",
    price: "Custom",
    hours: "Tailored Schedule",
    recommended: false,
    filmRolls: "Custom analog film curation",
    albumInfo: "Bespoke heirloom book collection & gallery prints",
    deliverables: [
      "Multi-day international itinerary customized to your vision",
      "Comprehensive travel logistics and location scouting worldwide",
      "Full editorial rehearsal dinner & day-after editorial shoot",
      "Dual photographer team + aerial drone perspective",
      "Artisan legacy presentation box with fine-art cotton prints",
      "Direct personalized planning sessions with Irene & John",
    ],
  },
];

const inclusions = [
  {
    icon: Camera,
    title: "Dual Perspective Storytelling",
    description:
      "Having two photographers allows us to be in two places at once — capturing both the bride's morning nerves and the groom's anticipation.",
  },
  {
    icon: Film,
    title: "Analog Film & Digital Hybrid",
    description:
      "We combine modern high-resolution cameras with authentic 35mm & 120 film stocks for that inimitable soft grain, creamy skin tones, and nostalgic warmth.",
  },
  {
    icon: Clock,
    title: "48-Hour Sneak Peek",
    description:
      "You won't have to wait months to relive the magic. Within 48 hours, you'll receive a curated teaser gallery to share with family and friends.",
  },
  {
    icon: ShieldCheck,
    title: "Redundant Backups & Archive",
    description:
      "Every frame is captured to dual memory cards in real time and immediately backed up across multiple secure drives and cloud archives.",
  },
  {
    icon: Sparkles,
    title: "Signature Artful Color Grading",
    description:
      "Each photograph is individually edited with our warm olive, golden hour tones and cinematic contrast, ensuring timeless beauty.",
  },
  {
    icon: Heart,
    title: "Personal Printing Rights",
    description:
      "Full non-commercial print release included. Download, print, share, and preserve your photographs anywhere in the world without watermarks.",
  },
];

const addOns = [
  { name: "Additional Coverage Hour", price: "€250 / hr", detail: "Extend coverage spontaneously or during pre-planning" },
  { name: "Associate Second Photographer", price: "€500", detail: "Additional angle and multi-room cocktail hour coverage" },
  { name: "Pre-Wedding / Engagement Session", price: "€450", detail: "2-hour romantic session at golden hour with 60+ images" },
  { name: "Aerial Drone Cinematography & Photos", price: "€400", detail: "Dramatic coastal and castle landscape perspectives" },
  { name: "Handcrafted Parent Duplicate Albums (Pair)", price: "€650", detail: "Two 20x20cm linen duplicate albums for parents" },
  { name: "Extra Vintage 35mm Analog Film Rolls", price: "€350", detail: "5 additional rolls of Kodak Portra 400 & Ilford B&W" },
  { name: "Rush Turnaround (14-Day Delivery)", price: "€600", detail: "Jump the queue for full high-resolution gallery delivery" },
];

const faqs = [
  {
    q: "How far in advance should we book our wedding photography?",
    a: "Most couples book between 9 to 18 months in advance, especially for prime dates in Portugal between May and October. We only take a limited number of weddings per season to give each couple our undivided artistic focus.",
  },
  {
    q: "How many edited images will we receive?",
    a: "For a full 10-hour wedding day, you can expect between 700 to 900 fully edited, high-resolution photographs. Every image delivered is color-corrected and fine-art polished; we do not deliver unedited or watermarked files.",
  },
  {
    q: "What is your booking process and deposit requirement?",
    a: "Once you decide on a collection, we prepare a digital agreement and request a 30% retainer to officially reserve your date on our calendar. The remainder is split with the final balance due 14 days before your celebration.",
  },
  {
    q: "Do you travel outside of Lisbon and Portugal?",
    a: "Absolutely! Half of our weddings take place across Europe (such as Italy, Greece, France, and Spain) or worldwide. Travel expenses within mainland Portugal are included in our Signature and Weekend collections.",
  },
  {
    q: "What if our wedding day timeline changes?",
    a: "We work closely with you and your wedding planner weeks ahead to craft a stress-free photography schedule that maximizes natural golden light while keeping you relaxed with your loved ones.",
  },
];

export default function PackagesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-olive-900 text-cream-100 flex flex-col w-full selection:bg-[#ca8b52] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header for Packages */}
      <section className="relative pt-36 sm:pt-44 pb-20 bg-gradient-to-b from-olive-950 via-olive-900 to-olive-900 overflow-hidden border-b border-olive-800/60">
        {/* Subtle background ambient graphic */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/selected-photos/DSC08527.jpg"
            alt="Atmospheric wedding background"
            className="w-full h-full object-cover filter blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-olive-950/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-cream-300/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gold-400">/</span>
            <span className="text-gold-300">Investment &amp; Packages</span>
          </div>

          <span className="block text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d59660] font-semibold mb-3">
            COLLECTIONS &amp; INVESTMENT
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-cream-100 tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
            Wedding Photography Packages
          </h1>

          <p className="text-sm sm:text-base text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Honest, artful, and luminous wedding photography crafted to preserve your
            most heartfelt memories forever. Available throughout Portugal and destination locations worldwide.
          </p>

          {/* Quick Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto text-xs uppercase tracking-wider text-cream-200 font-light">
            <span className="px-4 py-2 rounded-full bg-olive-800/80 border border-olive-700/80 backdrop-blur-sm">
              ✨ 2 Photographers on Signature
            </span>
            <span className="px-4 py-2 rounded-full bg-olive-800/80 border border-olive-700/80 backdrop-blur-sm">
              🎞️ 35mm Analog &amp; Digital Hybrid
            </span>
            <span className="px-4 py-2 rounded-full bg-olive-800/80 border border-olive-700/80 backdrop-blur-sm">
              ⚡ 48-Hour Sneak Peek
            </span>
            <span className="px-4 py-2 rounded-full bg-olive-800/80 border border-olive-700/80 backdrop-blur-sm">
              📖 Fine-Art Heirloom Albums
            </span>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards Grid */}
      <section className="relative py-20 sm:py-28 bg-olive-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d59660] font-semibold">
              CHOOSE YOUR EXPERIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream-100 font-normal mt-2 mb-4">
              Curated Wedding Collections
            </h2>
            <p className="text-xs sm:text-sm text-cream-300/80 font-light">
              Every package can be custom-tailored with hours, albums, and additional sessions to match your exact day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {collections.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 sm:p-10 ${
                  pkg.recommended
                    ? "bg-cream-100 text-ink-900 shadow-2xl border-2 border-[#ca8b52] transform lg:-translate-y-4"
                    : "bg-olive-850 text-cream-100 border border-olive-700/60 shadow-xl"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ca8b52] text-white text-[11px] uppercase tracking-[0.22em] px-5 py-1.5 rounded-full font-bold shadow-lg">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span
                      className={`text-[11px] uppercase tracking-[0.25em] font-semibold ${
                        pkg.recommended ? "text-[#b46d32]" : "text-[#d59660]"
                      }`}
                    >
                      {pkg.hours}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1 mb-2">
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed font-light ${
                        pkg.recommended ? "text-ink-600" : "text-cream-300/80"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-current/15">
                    <div className="flex items-baseline">
                      <span className="font-serif text-4xl sm:text-5xl font-light">
                        {pkg.price}
                      </span>
                      <span
                        className={`text-xs ml-2 uppercase tracking-wider font-light ${
                          pkg.recommended ? "text-ink-500" : "text-cream-400"
                        }`}
                      >
                        / All Inclusive
                      </span>
                    </div>
                    <div
                      className={`text-[11px] mt-2 font-light italic ${
                        pkg.recommended ? "text-ink-600" : "text-cream-300/70"
                      }`}
                    >
                      {pkg.albumInfo}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-10">
                    <span
                      className={`block text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 ${
                        pkg.recommended ? "text-ink-700" : "text-cream-300"
                      }`}
                    >
                      What&apos;s Included:
                    </span>
                    <ul className="space-y-3.5">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs font-light">
                          <Check
                            size={16}
                            className={`mr-3 mt-0.5 flex-shrink-0 ${
                              pkg.recommended ? "text-[#b46d32]" : "text-[#d59660]"
                            }`}
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inquire Action Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className={`block w-full py-4 text-center text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all duration-300 shadow-md ${
                      pkg.recommended
                        ? "bg-[#ca8b52] hover:bg-[#b87a41] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        : "bg-cream-100/15 hover:bg-cream-100 hover:text-olive-900 text-cream-100 border border-cream-200/30"
                    }`}
                  >
                    Inquire For This Package
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bespoke 4th Card: Worldwide & Custom */}
          <div className="mt-12 bg-olive-950/70 border border-olive-700/60 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d59660] font-semibold">
                INTERNATIONAL &amp; CUSTOM
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-cream-100 mt-1 mb-2">
                Bespoke Destination Celebrations
              </h3>
              <p className="text-xs sm:text-sm text-cream-300/80 font-light leading-relaxed">
                Planning a multi-day castle wedding in Sintra, an elopement on the Amalfi Coast, or a multi-event celebration in France or Greece? We build completely customized itineraries, flight logistics, and album sets.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 rounded-full border border-[#ca8b52] bg-[#ca8b52]/10 hover:bg-[#ca8b52] hover:text-white text-cream-100 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
            >
              Request Custom Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-olive-950/60 border-y border-olive-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d59660] font-semibold">
              AT A GLANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-100 font-normal mt-1 mb-3">
              Package Feature Comparison
            </h2>
            <p className="text-xs sm:text-sm text-cream-300/70 font-light">
              Clear, transparent deliverables so you know exactly what is included in each option.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-olive-800">
            <table className="w-full text-left text-xs sm:text-sm text-cream-200">
              <thead className="bg-olive-900/90 text-cream-100 uppercase tracking-wider text-[11px] border-b border-olive-800">
                <tr>
                  <th className="py-4 px-6 font-semibold">Feature / Deliverable</th>
                  <th className="py-4 px-6 font-semibold">The Intimate</th>
                  <th className="py-4 px-6 font-semibold text-[#d59660]">The Signature (Popular)</th>
                  <th className="py-4 px-6 font-semibold">The Destination Weekend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-olive-800/60 bg-olive-950/40">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Coverage Hours</td>
                  <td className="py-4 px-6">5 Hours</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">10 Hours Full Day</td>
                  <td className="py-4 px-6">3 Days (Full Weekend)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Photographers</td>
                  <td className="py-4 px-6">1 Lead Artist</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">2 Photographers (Irene &amp; John)</td>
                  <td className="py-4 px-6">2 Photographers + Drone Pilot</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Edited High-Res Images</td>
                  <td className="py-4 px-6">350+ Photos</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">750+ Photos</td>
                  <td className="py-4 px-6">1,200+ Photos</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Analog 35mm / Medium Format Film</td>
                  <td className="py-4 px-6 text-cream-400">Available as Add-On</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">Included (35mm Rolls)</td>
                  <td className="py-4 px-6">Included (35mm + 120 Format)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Heirloom Fine-Art Album</td>
                  <td className="py-4 px-6 text-cream-400">Available as Add-On</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">30x30cm Linen Album (40 pgs)</td>
                  <td className="py-4 px-6">Italian Leather + 2 Parent Albums</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Engagement Couple Session</td>
                  <td className="py-4 px-6 text-cream-400">Available as Add-On</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">Included (Complimentary)</td>
                  <td className="py-4 px-6">Included (Complimentary)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Sneak Peek Turnaround</td>
                  <td className="py-4 px-6">48 Hours</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">48 Hours (Extended Preview)</td>
                  <td className="py-4 px-6">Same-Day Reception Slideshow + 48h</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Portugal Mainland Travel</td>
                  <td className="py-4 px-6">Lisbon/Cascais Included</td>
                  <td className="py-4 px-6 text-[#d59660] font-semibold">Mainland Portugal Included</td>
                  <td className="py-4 px-6">All Portugal Travel Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inclusions Grid */}
      <section className="py-20 sm:py-28 bg-olive-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d59660] font-semibold">
              OUR PROMISE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream-100 font-normal mt-2 mb-4">
              Included in Every Collection
            </h2>
            <p className="text-xs sm:text-sm text-cream-300/80 font-light">
              Regardless of the hours you book, our dedication to high craft, emotional nuance, and client care remains unwavering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((item, idx) => (
              <div
                key={idx}
                className="bg-olive-850/80 border border-olive-700/50 rounded-2xl p-8 hover:border-[#ca8b52]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-olive-800 text-[#d59660] flex items-center justify-center mb-6 group-hover:bg-[#ca8b52] group-hover:text-white transition-all shadow-md">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-cream-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-300/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A La Carte Add-Ons */}
      <section className="py-20 bg-olive-950/70 border-t border-olive-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d59660] font-semibold">
              CUSTOMIZE YOUR DAY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-100 font-normal mt-1 mb-3">
              A La Carte Enhancements
            </h2>
            <p className="text-xs sm:text-sm text-cream-300/70 font-light">
              Add individual sessions, extra rolls of analog film, or duplicate parent albums to any collection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-olive-900/80 border border-olive-800 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-sm font-medium text-cream-100">{addon.name}</h4>
                  <p className="text-[11px] text-cream-300/70 font-light mt-0.5">{addon.detail}</p>
                </div>
                <span className="text-xs font-semibold text-[#d59660] whitespace-nowrap bg-olive-950 px-3 py-1.5 rounded-full border border-olive-700/60">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Couple Testimonial Spotlight */}
      <section className="py-20 bg-cream-100 text-ink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 mx-auto mb-4 text-[#ca8b52]">❦</div>
          <span className="text-xs uppercase tracking-[0.25em] text-ink-600 font-semibold mb-2 block">
            CLIENT WORDS
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-900 font-light italic leading-snug mb-8">
            &ldquo;Choosing Irene &amp; John was the best investment we made for our wedding. Looking through our gallery brings tears of joy every single time. They captured emotions we didn&apos;t even realize happened.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-ink-800">
            Sofia &amp; Lucas · Quinta da Luz do Mar, Portugal
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 sm:py-28 bg-olive-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d59660] font-semibold">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream-100 font-normal mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-cream-300/80 font-light">
              Everything you need to know about reserving your wedding date and working with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-olive-800 bg-olive-850/60 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between text-cream-100 text-sm sm:text-base font-medium hover:text-[#d59660] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-200 text-[#d59660] ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-cream-300/80 font-light leading-relaxed border-t border-olive-800/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form (Matching the user's requested screenshot) */}
      <ContactRsvpSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
