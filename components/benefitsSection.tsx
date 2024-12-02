import {
  ClockIcon,
  CogIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon as TrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Ускоренное обучение",
      description:
        "Методика, основанная на научных исследованиях, позволяет запоминать слова в 2 раза быстрее.",
      icon: ClockIcon,
    },
    {
      title: "Персонализация",
      description:
        "Создавайте свои собственные наборы карточек под ваши цели и уровень знаний.",
      icon: CogIcon,
    },
    {
      title: "Многоязычность",
      description:
        "Доступно более 30 языков для изучения, от английского до японского.",
      icon: GlobeAltIcon,
    },
    {
      title: "Отслеживание прогресса",
      description:
        "Следите за своими достижениями и мотивируйтесь новыми целями.",
      icon: TrendingUpIcon,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <benefit.icon className="h-12 w-12 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold ">{benefit.title}</h3>
                <p className="mt-2 ">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
