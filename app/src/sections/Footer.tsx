import { Factory, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router';

const productsCol1 = [
  'Протяжка кабеля в гофру',
  'Лягушки из арматуры',
  'Лазерная резка металла',
  'Профтруба',
  'Резка профтрубы в размер',
  'Арматура',
];

const productsCol2 = [
  'Резка арматуры в размер',
  'Доска обрезная',
  'Резка доски в размер',
  'Обработка огнебиозащитой',
  'Пластиковые окна',
  'Изготовление ферм',
];

export default function Footer() {
  return (
    <footer className="bg-fsz-dark pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* ─── Logo ─── */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-fsz-primary flex items-center justify-center">
                <Factory className="w-4 h-4 text-fsz-surface" />
              </div>
              <div>
                <div className="text-fsz-surface font-extrabold text-base leading-tight">
                  ФСЗ
                </div>
                <div className="text-white/40 text-[10px] leading-tight">
                  фабрика строительных заготовок
                </div>
              </div>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed">
              Производство и продажа строительных материалов с 2014 года. Резка в размер, доставка, комплексные решения.
            </p>
          </div>

          {/* ─── Products Column 1 ─── */}
          <div>
            <h4 className="text-white/90 font-semibold text-xs uppercase tracking-wider mb-4">
              Товары и услуги
            </h4>
            <ul className="space-y-2.5">
              {productsCol1.map((name) => (
                <li key={name}>
                  <Link
                    to="/"
                    className="text-white/60 text-xs hover:text-fsz-primary transition-colors leading-snug"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Products Column 2 ─── */}
          <div className="lg:pt-6">
            <ul className="space-y-2.5">
              {productsCol2.map((name) => (
                <li key={name}>
                  <Link
                    to="/"
                    className="text-white/60 text-xs hover:text-fsz-primary transition-colors leading-snug"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contacts ─── */}
          <div>
            <h4 className="text-white/90 font-semibold text-xs uppercase tracking-wider mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+74951234567"
                  className="flex items-center gap-2 text-white/70 text-xs hover:text-fsz-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-fsz-primary shrink-0" />
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fsz.ru"
                  className="flex items-center gap-2 text-white/70 text-xs hover:text-fsz-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-fsz-primary shrink-0" />
                  info@fsz.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-xs">
                <MapPin className="w-3.5 h-3.5 text-fsz-primary shrink-0 mt-0.5" />
                <span>2-й шоссейный переулок, 21<br />Москва, ЮВАО</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-xs">
                <Clock className="w-3.5 h-3.5 text-fsz-primary shrink-0 mt-0.5" />
                <span>Пн–Пт: 8:00 – 19:00<br />Сб: 9:00 – 15:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Copyright ─── */}
        <div className="border-t border-white/10 mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[11px]">
            &copy; 2025 Фабрика строительных заготовок
          </p>
          <p className="text-white/30 text-[11px]">
            Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
