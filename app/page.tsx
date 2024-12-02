"use client";

import BenefitsSection from "@/components/benefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/footer";
import FormModal from "@/components/formModal";
import HeroSection from "@/components/heroSection";
import HowItWorksSection from "@/components/howItWorksSection";
import TestimonialsSection from "@/components/testimonialsSection";
import { useDisclosure } from "@nextui-org/react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <HeroSection onModalOpen={onOpen} />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection onModalOpen={onOpen} />
        <FormModal isOpen={isOpen} onOpenChange={onOpenChange}></FormModal>
        <Footer />
      </section>
    </>
  );
}
