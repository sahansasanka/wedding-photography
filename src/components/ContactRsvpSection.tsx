"use client";

import React, { useState } from "react";
import { Calendar, Clock, ChevronDown, CheckCircle2, Send, Sparkles } from "lucide-react";
import TornDivider from "./TornDivider";

export default function ContactRsvpSection() {
  const [formData, setFormData] = useState({
    bridesName: "",
    groomsName: "",
    email: "",
    weddingDate: "",
    weddingTime: "",
    location: "",
    ceremonyType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#4a3f36] text-cream-100 pt-20 sm:pt-28 pb-16 overflow-hidden selection:bg-[#ca8b52] selection:text-white"
    >
      {/* Anchor targets for both old and new navigation links */}
      <div id="quote" className="absolute -top-12" />
      <div id="get-in-touch" className="absolute -top-12" />
      <div id="rsvp" className="absolute -top-12" />

      {/* Subtle ambient lighting / texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d332c]/50 via-transparent to-[#3d332c]/80 pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Kicker */}
        <div className="text-center mb-2">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#d59660]">
            GET IN TOUCH
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            REQUEST A QUOTE
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm text-[#cfc7bf] leading-relaxed font-light">
            Our team is dedicated to making certain we&apos;re a good match for each of our customers.
            It will only take you a moment to answer all of these questions.
          </p>
        </div>

        {/* Submitted State */}
        {submitted ? (
          <div className="bg-[#41362e]/90 border border-[#73665a]/80 rounded-3xl p-8 sm:p-12 text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#ca8b52] text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
              Thank You, {formData.bridesName || formData.groomsName ? `${formData.bridesName} & ${formData.groomsName}`.replace(/^ & | & $/g, "") : "Beloved Couple"}!
            </h3>
            <p className="text-xs sm:text-sm text-[#cfc7bf] font-light max-w-lg mx-auto leading-relaxed mb-8">
              Your inquiry has been received with excitement. Irene &amp; John will review your wedding date (
              <span className="text-[#d59660] font-medium">{formData.weddingDate || "Upcoming Date"}</span>
              ) and reach out to you within 24 to 48 hours with our comprehensive collections brochure.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  bridesName: "",
                  groomsName: "",
                  email: "",
                  weddingDate: "",
                  weddingTime: "",
                  location: "",
                  ceremonyType: "",
                  message: "",
                });
              }}
              className="inline-flex items-center space-x-2 px-8 py-3 rounded-full bg-[#ca8b52] hover:bg-[#b87a41] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
            >
              <span>Send Another Inquiry</span>
            </button>
          </div>
        ) : (
          /* Form matching user image */
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Row 1: Bride's Name & Groom's Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Bride's Name:"
                  value={formData.bridesName}
                  onChange={(e) =>
                    setFormData({ ...formData, bridesName: e.target.value })
                  }
                  className="w-full bg-[#40362f]/85 border border-[#75685d] rounded-full px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-cream-100 placeholder-[#a3978c] focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Groom's Name:"
                  value={formData.groomsName}
                  onChange={(e) =>
                    setFormData({ ...formData, groomsName: e.target.value })
                  }
                  className="w-full bg-[#40362f]/85 border border-[#75685d] rounded-full px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-cream-100 placeholder-[#a3978c] focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Row 2: Email (with required indicator) */}
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Email:"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#40362f]/85 border border-[#75685d] rounded-full px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-cream-100 placeholder-[#a3978c] focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner pr-10"
              />
              <span
                className="absolute right-5 top-1/2 -translate-y-1/2 text-red-500 font-bold text-base pointer-events-none select-none"
                title="Required"
              >
                *
              </span>
            </div>

            {/* Row 3: Wedding Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Wedding Date */}
              <div>
                <label className="block text-xs sm:text-sm text-[#cfc7bf] font-light mb-1.5 pl-2">
                  Wedding Date:
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) =>
                      setFormData({ ...formData, weddingDate: e.target.value })
                    }
                    className="w-full bg-[#40362f]/85 border border-[#75685d] rounded-full px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-cream-100 placeholder-[#a3978c] focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner [color-scheme:dark] pr-12 cursor-pointer"
                  />
                  <Calendar
                    size={18}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#a3978c] pointer-events-none"
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs sm:text-sm text-[#cfc7bf] font-light mb-1.5 pl-2">
                  Time:
                </label>
                <div className="relative">
                  <input
                    type="time"
                    value={formData.weddingTime}
                    onChange={(e) =>
                      setFormData({ ...formData, weddingTime: e.target.value })
                    }
                    className="w-full bg-[#40362f]/85 border border-[#75685d] rounded-full px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-cream-100 placeholder-[#a3978c] focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner [color-scheme:dark] pr-12 cursor-pointer"
                  />
                  <Clock
                    size={18}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#a3978c] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Wedding Location (Reception) */}
            <div>
              <input
                type="text"
                placeholder="Wedding Location (Reception):"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full bg-[#40362f]/85 border border-[#75685d] rounded-full px-6 py-3.5 sm:py-4 text-xs sm:text-sm text-cream-100 placeholder-[#a3978c] focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner"
              />
            </div>

            {/* Row 5: Type of the Ceremony */}
            <div className="relative">
              <select
                value={formData.ceremonyType}
                onChange={(e) =>
                  setFormData({ ...formData, ceremonyType: e.target.value })
                }
                className={`w-full bg-[#40362f]/85 border border-[#75685d] rounded-full px-6 py-3.5 sm:py-4 text-xs sm:text-sm focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner appearance-none cursor-pointer pr-12 ${
                  formData.ceremonyType ? "text-cream-100" : "text-[#a3978c]"
                }`}
              >
                <option value="" className="bg-[#3e342c] text-[#a3978c]">
                  Type of the Ceremony
                </option>
                <option
                  value="Full Day Wedding (Ceremony + Reception)"
                  className="bg-[#3e342c] text-cream-100"
                >
                  Full Day Wedding (Ceremony + Reception)
                </option>
                <option
                  value="Multi-Day Destination Weekend"
                  className="bg-[#3e342c] text-cream-100"
                >
                  Multi-Day Destination Weekend
                </option>
                <option
                  value="Intimate Elopement (up to 30 guests)"
                  className="bg-[#3e342c] text-cream-100"
                >
                  Intimate Elopement (up to 30 guests)
                </option>
                <option
                  value="Civil / City Hall Ceremony"
                  className="bg-[#3e342c] text-cream-100"
                >
                  Civil / City Hall Ceremony
                </option>
                <option
                  value="Vow Renewal / Anniversary"
                  className="bg-[#3e342c] text-cream-100"
                >
                  Vow Renewal / Anniversary
                </option>
                <option
                  value="Bespoke Celebration"
                  className="bg-[#3e342c] text-cream-100"
                >
                  Other / Bespoke Celebration
                </option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#a3978c] pointer-events-none"
              />
            </div>

            {/* Row 6: Message */}
            <div>
              <textarea
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-[#40362f]/85 border border-[#75685d] rounded-2xl sm:rounded-3xl px-6 py-4 text-xs sm:text-sm text-cream-100 placeholder-[#a3978c] focus:border-[#ca8b52] focus:bg-[#3b312a] focus:ring-1 focus:ring-[#ca8b52] focus:outline-none transition-all shadow-inner resize-none"
              />
            </div>

            {/* Row 7: Send Message Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ca8b52] hover:bg-[#b87a41] active:scale-[0.99] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <span>SEND MESSAGE</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Smooth transition into Footer */}
      <div className="mt-20">
        <TornDivider type="dark-to-cream" />
      </div>
    </section>
  );
}
