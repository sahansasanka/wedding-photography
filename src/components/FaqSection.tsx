"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import TornDivider from "./TornDivider";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Can I bring a plus one?",
    answer:
      "Due to venue capacity restrictions at Quinta da Luz do Mar, we can only accommodate guests formally listed on your invitation envelope. If your invitation specifies 'and Guest', you are welcome to bring a plus one!",
  },
  {
    question: "Are kids welcome?",
    answer:
      "While we love your little ones dearly, our wedding weekend will be an adults-only celebration with the exception of nursing infants. We hope this gives you an opportunity for a relaxing getaway in Portugal!",
  },
  {
    question: "What should I wear?",
    answer:
      "The dress code is Summer Black-Tie / Elevated Cocktail in warm, earthy tones (olive, linen, terracotta, sand, warm neutrals). Ladies are advised to wear block heels or wedges as parts of the ceremony and cocktail hour are on outdoor lawns and cobblestones.",
  },
  {
    question: "Will there be vegetarian or vegan options?",
    answer:
      "Absolutely! We will have dedicated gourmet vegetarian and vegan dishes prepared by our Portuguese culinary team. Please let us know of any dietary restrictions or allergies in the RSVP form below.",
  },
  {
    question: "Can I give a speech?",
    answer:
      "We would love to hear from our dear friends! Please reach out to our Maid of Honor or Best Man ahead of time so they can coordinate toasts and speeches into the dinner schedule.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Summer Black-Tie / Formal Garden Chic. Gentlemen in lightweight suits or tuxedos; ladies in midi or floor-length dresses in natural tones.",
  },
  {
    question: "How far in advance should we reserve wedding photography?",
    answer:
      "We typically book destination weddings 9 to 18 months in advance. Because we only accept a limited number of 15 commissions each year to ensure uncompromising artistic dedication, we recommend reserving your date as early as possible.",
  },
  {
    question: "What is your turnaround time for the wedding gallery?",
    answer:
      "You will receive a curated sneak peek gallery within 48 to 72 hours of the wedding day. The full high-resolution gallery and heirloom prints are delivered within 6 to 8 weeks.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-cream-100 text-ink-900 pt-16 sm:pt-20 pb-0 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink-900 font-normal mb-3">
            Questions &amp; Answers
          </h2>
          <p className="text-xs sm:text-sm text-ink-600 font-light max-w-lg mx-auto">
            We&apos;ve answered a few common questions to help you prepare for the day
            and enjoy the celebration with ease.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-cream-300 border-t border-b border-cream-300 pb-16 sm:pb-24">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-2xl text-ink-900 font-light group-hover:text-olive-700 transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cream-200 flex items-center justify-center text-ink-700 group-hover:bg-cream-300 transition-colors">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-10 text-xs sm:text-sm text-ink-700 leading-relaxed font-light animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Torn Paper Divider: Cream to Dark */}
      <TornDivider type="cream-to-dark" />
    </section>
  );
}
