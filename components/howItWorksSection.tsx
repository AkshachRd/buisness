export default function HowItWorksSection() {
  const steps = [
    {
      title: "Зарегистрируйтесь на сайте",
      text: "Создайте аккаунт за несколько минут и получите доступ ко всем функциям.",
      imageSrc: "https://via.placeholder.com/400x300",
      imageAlt: "Пользователь вводит свои данные в форму регистрации на сайте.",
    },
    {
      title: "Выберите язык и создайте карточки",
      text: "Настройте свой учебный план, добавьте слова и фразы, которые хотите выучить.",
      imageSrc: "https://via.placeholder.com/400x300",
      imageAlt:
        "Интерфейс приложения с возможностью выбора языка и добавления новых слов.",
    },
    {
      title: "Изучайте в удобном темпе",
      text: "Практикуйтесь ежедневно и достигайте своих целей в изучении языка.",
      imageSrc: "https://via.placeholder.com/400x300",
      imageAlt:
        "Пользователь просматривает карточки на мобильном устройстве в парке.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
          Как начать изучение
        </h2>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Изображение */}
              <div className="md:w-1/2">
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              {/* Текст */}
              <div className="md:w-1/2 md:px-10 mt-8 md:mt-0">
                <h3 className="text-2xl font-semibold ">{step.title}</h3>
                <p className="mt-4 ">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
