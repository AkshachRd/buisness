export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Мария Петрова",
      text: "Благодаря Flashcards я наконец-то заговорила на испанском! Очень удобно и эффективно.",
      imageSrc: "https://source.unsplash.com/collection/888146/400x400", // Замените на реальное изображение
      imageAlt: "Мария улыбается на фоне испанской архитектуры.",
    },
    {
      name: "Алексей Смирнов",
      text: "Отличное приложение для тех, кто ценит свое время. Рекомендую всем!",
      imageSrc: "https://source.unsplash.com/collection/888145/400x400", // Замените на реальное изображение
      imageAlt: "Алексей сидит в кафе с ноутбуком и учебником.",
    },
    {
      name: "Елена Иванова",
      text: "Интерфейс простой и понятный, с удовольствием занимаюсь каждый день.",
      imageSrc: "https://source.unsplash.com/collection/888144/400x400", // Замените на реальное изображение
      imageAlt: "Елена работает за компьютером дома, рядом чашка чая.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        {/* Заголовок раздела */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Отзывы наших пользователей
        </h2>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="light text-foreground bg-background p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              {/* Фото пользователя */}
              <img
                src={testimonial.imageSrc}
                alt={testimonial.imageAlt}
                className="w-24 h-24 object-cover rounded-full shadow-md mb-6"
              />
              {/* Имя пользователя */}
              <h3 className="text-xl font-semibold ">{testimonial.name}</h3>
              {/* Текст отзыва */}
              <p className="mt-4 text-center">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
