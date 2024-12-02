type PricingProps = {
  onModalOpen: () => void;
};

export default function Pricing({ onModalOpen }: PricingProps) {
  return (
    <div>
      <div className="min-h-screen w-full py-12">
        <div className="container text-center">
          <p className="mb-12 ">Выберите план, который подходит именно вам</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Бесплатный план */}
            <div className="light text-foreground bg-background rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Бесплатный</h2>
              <p className="mb-6">Идеально для начинающих пользователей</p>
              <div className="text-4xl font-bold mb-6">0 ₽</div>
              <ul className="text-left mb-6 space-y-2">
                <li>Создание до 5 наборов</li>
                <li>Доступ к основным функциям</li>
                <li>Ограниченная поддержка</li>
              </ul>
              <button
                onClick={onModalOpen}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Начать бесплатно
              </button>
            </div>
            {/* Стандартный план */}
            <div className="light text-foreground bg-background rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Стандарт</h2>
              <p className="mb-6">Для активных пользователей</p>
              <div className="text-4xl font-bold mb-6">
                499 ₽<span className="text-lg font-normal">/мес</span>
              </div>
              <ul className="text-left mb-6 space-y-2">
                <li>Неограниченное количество наборов</li>
                <li>Расширенные функции</li>
                <li>Приоритетная поддержка</li>
              </ul>
              <button
                onClick={onModalOpen}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Оформить подписку
              </button>
            </div>
            {/* Премиум план */}
            <div className="light text-foreground bg-background rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Премиум</h2>
              <p className="mb-6">Для профессионалов и команд</p>
              <div className="text-4xl font-bold mb-6">
                999 ₽<span className="text-lg font-normal">/мес</span>
              </div>
              <ul className="text-left mb-6 space-y-2">
                <li>Все функции Стандарта</li>
                <li>Доступ для команды до 5 человек</li>
                <li>Персональный менеджер</li>
              </ul>
              <button
                onClick={onModalOpen}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Оформить подписку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
