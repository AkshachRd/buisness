"use client";

import FormModal from "@/components/formModal";
import Pricing from "@/components/pricing";
import { title } from "@/components/primitives";
import { useDisclosure } from "@nextui-org/react";

export default function PricingPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <h1 className={title()}>Цены на подписку</h1>
      <Pricing onModalOpen={onOpen} />
      <FormModal isOpen={isOpen} onOpenChange={onOpenChange}></FormModal>
    </div>
  );
}
