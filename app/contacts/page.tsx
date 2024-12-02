"use client";

import { title } from "@/components/primitives";
import { useDisclosure, Button } from "@nextui-org/react";
import FormModal from "@/components/formModal";

export default function ContactsPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <h1 className={title()}>Контакты</h1>
      <div>
          <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
          <p className="mb-2">
            Электронная почта:{" "}
            <a
              href="mailto:support@flashcards.com"
              className="hover:text-blue-600 transition duration-300"
            >
              support@flashcards.com
            </a>
          </p>
          <p>
            Телефон:{" "}
            <a
              href="tel:+74951234567"
              className="hover:text-blue-600 transition duration-300"
            >
              +7 (495) 123-45-67
            </a>
          </p>
        </div>
        <Button
          color="primary"
          radius="full"
          variant="shadow"
          onClick={onOpen}
        >
          Начать изучение
        </Button>
        <FormModal isOpen={isOpen} onOpenChange={onOpenChange}></FormModal>
    </div>
  );
}
