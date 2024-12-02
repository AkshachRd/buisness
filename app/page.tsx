"use client";

import BenefitsSection from "@/components/benefitsSection";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection></HeroSection>
      <BenefitsSection />
    </section>
  );
}
