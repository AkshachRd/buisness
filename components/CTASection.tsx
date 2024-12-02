import { Button } from "@nextui-org/react";

type CTASectionProps = {
  onModalOpen: () => void;
};

export default function CTASection({ onModalOpen }: CTASectionProps) {
  return (
    <section className="w-full py-20 bg-blue-600 w-min-full">
      <div className="container mx-auto px-6 text-center">
        {/* Заголовок с призывом */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Начните изучать иностранный язык уже сегодня!
        </h2>
        {/* Кнопка "Попробовать бесплатно" */}
        <Button
          color="default"
          radius="full"
          variant="shadow"
          onClick={onModalOpen}
        >
          Попробовать бесплатно
        </Button>
      </div>
    </section>
  );
}
