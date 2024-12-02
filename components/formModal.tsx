"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";

type FormModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export default function FormModal({ isOpen, onOpenChange }: FormModalProps) {
  return (
    <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Заказать демо
            </ModalHeader>
            <ModalBody>
              <Input type="text" label="Имя" />
              <Input type="email" label="Email" />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Закрыть
              </Button>
              <Button color="primary" onPress={onClose}>
                Отправить заявку
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
