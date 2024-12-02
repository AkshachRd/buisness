import { FaFacebookF, FaVk, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Навигация */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Навигация</h3>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                О нас
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Возможности
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Тарифы
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Контакты
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Блог
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Помощь
              </a>
            </li>
          </ul>
        </div>
        {/* Контактная информация */}
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
        {/* Социальные сети */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Мы в социальных сетях</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-600 transition duration-300 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition duration-300 text-2xl"
            >
              <FaVk />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition duration-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition duration-300 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
