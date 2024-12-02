"use client";

import BenefitsSection from "@/components/benefitsSection";
import HeroSection from "@/components/heroSection";
import HowItWorksSection from "@/components/howItWorksSection";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
    </section>
  );
}
