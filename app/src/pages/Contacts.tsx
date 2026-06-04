import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const contactBlocks = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (495) 123-45-67',
    href: 'tel:+74951234567',
    sub: 'Пн–Пт с 8:00 до 19:00',
  },
  {
    icon: Mail,
    label: 'Электронная почта',
    value: 'info@fsz.ru',
    href: 'mailto:info@fsz.ru',
    sub: 'Отвечаем в течение 2 часов',
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: '2-й шоссейный переулок, 21',
    href: '#map',
    sub: 'Москва, ЮВАО',
  },
  {
    icon: Clock,
    label: 'Приём заказов',
    value: 'Круглосуточно online',
    href: undefined,
    sub: 'Пн–Пт: 8:00 – 19:00 | Сб: 9:00 – 15:00',
  },
];

export default function Contacts() {
  return (
    <div className="min-h-screen texture-bg">
      <Header />
      <main>
        {/* ─── Breadcrumbs ─── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-2 text-fsz-text-light text-xs mb-6">
              <Link to="/" className="hover:text-fsz-primary transition-colors">
                Главная
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-fsz-text">Контакты</span>
            </div>
          </div>
        </section>

        {/* ─── Page Header ─── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-[1280px] mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-fsz-text font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-2"
            >
              Контакты
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="text-fsz-text-light text-sm sm:text-base"
            >
              Свяжитесь с нами удобным способом — мы всегда на связи
            </motion.p>
          </div>
        </section>

        {/* ─── Contact Cards ─── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactBlocks.map((block, idx) => {
                const Icon = block.icon;
                const inner = (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.35 }}
                    className="bg-fsz-surface border border-fsz-border rounded-xl p-5 shadow-card hover:shadow-elevated transition-shadow h-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-fsz-primary-light flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-fsz-primary" />
                    </div>
                    <div className="text-fsz-text-light text-xs uppercase tracking-wide mb-1">
                      {block.label}
                    </div>
                    <div className="text-fsz-text font-semibold text-sm sm:text-base mb-1">
                      {block.value}
                    </div>
                    <div className="text-fsz-text-light text-xs">
                      {block.sub}
                    </div>
                  </motion.div>
                );

                return block.href ? (
                  <a key={block.label} href={block.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={block.label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Map Section ─── */}
        <section id="map" className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h2 className="text-fsz-text font-bold text-lg sm:text-xl tracking-tight mb-4">
                Схема проезда
              </h2>
              <div className="bg-fsz-surface border border-fsz-border rounded-xl overflow-hidden shadow-card">
                <div className="h-[350px] sm:h-[450px] lg:h-[520px]">
                  <img
                    src="/images/schema.jpg"
                    alt="Схема проезда к Фабрике строительных заготовок, 2-й шоссейный переулок, 21"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 flex items-center gap-2 text-fsz-text-light text-xs">
                  <MapPin className="w-3.5 h-3.5 text-fsz-primary" />
                  <span>2-й шоссейный переулок, 21, Москва — от м. Текстильщики 15 минут транспортом</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
