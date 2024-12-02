export default function HowItWorksSection() {
  const steps = [
    {
      title: "Зарегистрируйтесь на сайте",
      text: "Создайте аккаунт за несколько минут и получите доступ ко всем функциям.",
      imageSrc: "https://www.ecotour.by/upload/resize_cache/iblock/901/540_410_2/norwegian_fjords_40059155_1470050468_ImageGalleryLightboxLarge.jpg",
      imageAlt: "Пользователь вводит свои данные в форму регистрации на сайте.",
    },
    {
      title: "Выберите язык и создайте карточки",
      text: "Настройте свой учебный план, добавьте слова и фразы, которые хотите выучить.",
      imageSrc: "https://media.istockphoto.com/id/1365094219/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D0%BD%D0%BE%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%BD%D0%BE%D0%B5-%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%B2-%D0%BB%D0%B5%D1%81%D1%83.jpg?s=612x612&w=0&k=20&c=HjDDAqSv7psoENhUn2C0cODacHq4Xsgd-8QJe8NhuNE=",
      imageAlt:
        "Интерфейс приложения с возможностью выбора языка и добавления новых слов.",
    },
    {
      title: "Изучайте в удобном темпе",
      text: "Практикуйтесь ежедневно и достигайте своих целей в изучении языка.",
      imageSrc: "https://greetcard.ru/uploads/posts/2022-05/1653153223_m42.webp",
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
