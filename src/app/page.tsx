import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import LoveStoryPortfolio from "@/components/LoveStoryPortfolio";
import PortfolioGallery from "@/components/PortfolioGallery";
import VenueSection from "@/components/VenueSection";
import PackagesSection from "@/components/PackagesSection";
import BucketListSection from "@/components/BucketListSection";
import FaqSection from "@/components/FaqSection";
import ContactRsvpSection from "@/components/ContactRsvpSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-olive-900 text-cream-100 flex flex-col w-full selection:bg-olive-700 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Partners In Life & Love */}
      <PartnersSection />

      {/* Our Love Story Featured Stories */}
      <LoveStoryPortfolio />

      {/* Dynamic Portfolio Gallery (All 53 Real Wedding Photos) */}
      <PortfolioGallery />

      {/* Venue & Accommodations */}
      <VenueSection />

      {/* Schedule & Photography Packages */}
      <PackagesSection />

      {/* Honeymoon Bucket List Polaroids */}
      <BucketListSection />

      {/* Questions & Answers */}
      <FaqSection />

      {/* RSVP & Inquiry Form */}
      <ContactRsvpSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
