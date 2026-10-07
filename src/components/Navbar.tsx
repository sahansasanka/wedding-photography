"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  // Navigation Links requested by user:
  // Home, Gallery, Our Story, Packages, Contact Us, Get In Touch (replaces RSVP)
  const navLinksLeft = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: isHome ? "#gallery" : "/#gallery" },
    { label: "Our Story", href: isHome ? "#story" : "/#story" },
  ];

  const navLinksRight = [
    { label: "Packages", href: "/packages", isPage: true },
    { label: "Contact Us", href: isHome ? "#contact" : "/#contact" },
  ];

  const ctaLink = {
    label: "Get In Touch",
    href: isHome ? "#contact" : "/#contact",
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-olive-900/95 backdrop-blur-md py-3.5 shadow-md border-b border-olive-700/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Nav (Desktop) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10 flex-1 justify-start">
            {navLinksLeft.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs lg:text-sm tracking-[0.18em] uppercase font-light transition-all duration-200 ${
                    isActive && link.href === "/" && isHome
                      ? "text-gold-300 font-normal"
                      : "text-cream-200/90 hover:text-white hover:tracking-[0.2em]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Center Monogram Logo */}
          <div className="flex-shrink-0 text-center px-4">
            <Link
              href="/"
              className="group inline-flex flex-col items-center justify-center"
            >
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.14em] text-cream-100 group-hover:text-gold-300 transition-colors">
                I &amp; J
              </span>
              <span className="text-[9px] uppercase tracking-[0.32em] text-cream-300/70 -mt-1 font-light group-hover:text-cream-200">
                Photography
              </span>
            </Link>
          </div>

          {/* Right Nav (Desktop) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 flex-1 justify-end">
            {navLinksRight.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs lg:text-sm tracking-[0.18em] uppercase font-light transition-all duration-200 ${
                    isActive
                      ? "text-gold-300 font-normal border-b border-gold-300/70 pb-0.5"
                      : "text-cream-200/90 hover:text-white hover:tracking-[0.2em]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* "Get In Touch" Action Button replacing RSVP */}
            <Link
              href={ctaLink.href}
              className="px-5 py-2 rounded-full border border-[#ca8b52]/80 bg-[#ca8b52]/20 hover:bg-[#ca8b52] hover:text-white text-cream-100 text-xs lg:text-sm tracking-[0.16em] uppercase font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03]"
            >
              {ctaLink.label}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cream-100 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-olive-950/98 backdrop-blur-xl border-b border-olive-800 px-6 py-8 space-y-5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 text-center">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base tracking-[0.2em] uppercase font-light py-2 transition-colors ${
                  pathname === link.href ? "text-gold-300 font-normal" : "text-cream-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                href={ctaLink.href}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block w-full max-w-xs mx-auto py-3 px-6 rounded-full bg-[#ca8b52] text-white text-xs tracking-[0.22em] uppercase font-semibold shadow-md"
              >
                {ctaLink.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
