import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, ChevronRight } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { Link } from 'react-router';

interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  featured?: boolean;
}

const allArticles: ArticleItem[] = [
  {
    id: 1,
    title: 'Как выбрать профтрубу для строительства: полное руководство',
    excerpt: 'Разбираем виды профильных труб, их маркировку, сортамент и области применения. Узнайте, как подобрать оптимальный профиль под ваш проект.',
    image: '/images/cat-proftube.jpg',
    author: 'Алексей Петров',
    date: '15 мая 2025',
    category: 'Материалы',
    featured: true,
  },
  {
    id: 2,
    title: 'Лазерная резка металла: преимущества технологии',
    excerpt: 'Современное оборудование для лазерной резки позволяет достичь точности ±0,1 мм. Рассказываем о технологии и её применении в строительстве.',
    image: '/images/cat-laser.jpg',
    author: 'Марина Соколова',
    date: '10 мая 2025',
    category: 'Технологии',
  },
  {
    id: 3,
    title: 'Расчёт арматуры для фундамента: ошибки и решения',
    excerpt: 'Как правильно рассчитать количество арматуры для ленточного и плитного фундамента. Типичные ошибки застройщиков и способы их избежать.',
    image: '/images/cat-armatura.jpg',
    author: 'Дмитрий Воронов',
    date: '5 мая 2025',
    category: 'Расчёты',
  },
  {
    id: 4,
    title: 'Огнебиозащита древесины: что нужно знать',
    excerpt: 'Виды огнебиозащитных составов, технологии нанесения и требования ГОСТ. Как защитить деревянные конструкции от огня и гниения.',
    image: '/images/cat-ognezash.jpg',
    author: 'Ирина Кузнецова',
    date: '28 апреля 2025',
    category: 'Обработка',
  },
  {
    id: 5,
    title: 'Пластиковые окна: как выбрать профиль и стеклопакет',
    excerpt: 'Сравниваем профили KBE и Rehau, разбираем виды стеклопакетов и фурнитуры. Советы по выбору окон для разных типов помещений.',
    image: '/images/cat-okna.jpg',
    author: 'Сергей Морозов',
    date: '20 апреля 2025',
    category: 'Окна',
  },
  {
    id: 6,
    title: 'Металлические фермы: проектирование и монтаж',
    excerpt: 'Конструктивные особенности ферм из профтрубы. Расчёт нагрузок, выбор сечений и технология сборки. Примеры готовых решений.',
    image: '/images/cat-fermy.jpg',
    author: 'Алексей Петров',
    date: '15 апреля 2025',
    category: 'Конструкции',
  },
  {
    id: 7,
    title: 'Пиломатериалы: сорта, влажность и хранение',
    excerpt: 'Как выбрать обрезную доску нужного сорта. Оптимальная влажность для разных видов работ. Правила хранения пиломатериалов на стройплощадке.',
    image: '/images/cat-doska.jpg',
    author: 'Марина Соколова',
    date: '8 апреля 2025',
    category: 'Материалы',
  },
  {
    id: 8,
    title: 'Прокладка кабеля в гофротрубе: нормы и требования',
    excerpt: 'Правила прокладки электрокабеля по ПУЭ. Выбор гофротрубы по диаметру и типу. Типичные ошибки электромонтажа.',
    image: '/images/cat-kabel.jpg',
    author: 'Дмитрий Воронов',
    date: '1 апреля 2025',
    category: 'Электрика',
  },
  {
    id: 9,
    title: 'Лягушки из арматуры: зачем нужны и как заказать',
    excerpt: 'Назначение арматурных лягушек в монолитном строительстве. Размеры, допуски и технология изготовления. Заказ под ваши чертежи.',
    image: '/images/cat-lyagushki.jpg',
    author: 'Ирина Кузнецова',
    date: '25 марта 2025',
    category: 'Арматура',
  },
];

const featured = allArticles.find((a) => a.featured)!;
const recent = allArticles.filter((a) => !a.featured);

export default function Articles() {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleArticles = recent.slice(0, visibleCount);

  return (
    <div className="min-h-screen texture-bg">
      <Header />
      <main>
        {/* ─── Featured Article ─── */}
        <section className="px-4 sm:px-6 lg:px-8 pt-6 pb-8">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={`/articles/${featured.id}`}
                className="group relative block rounded-xl overflow-hidden h-[300px] sm:h-[360px] lg:h-[400px]"
              >
                {/* Background Image */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-fsz-dark/90 via-fsz-dark/40 to-transparent" />
                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
                  <span className="inline-flex items-center gap-1.5 text-fsz-primary-light text-xs font-medium uppercase tracking-wider mb-3">
                    <ChevronRight className="w-3 h-3" />
                    {featured.category}
                  </span>
                  <h1 className="text-fsz-surface font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight max-w-2xl mb-3 group-hover:underline decoration-2 underline-offset-4">
                    {featured.title}
                  </h1>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xl mb-4">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white/60 text-xs">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {featured.date}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-fsz-primary flex items-center justify-center group-hover:bg-fsz-primary-hover transition-colors">
                      <ArrowRight className="w-5 h-5 text-fsz-surface" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── Recent Blog Posts ─── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-fsz-text font-bold text-xl sm:text-2xl tracking-tight mb-6">
              Все статьи
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleArticles.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                >
                  <Link
                    to={`/articles/${article.id}`}
                    className="group block bg-fsz-surface border border-fsz-border rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-200"
                  >
                    {/* Image */}
                    <div className="h-[180px] sm:h-[200px] overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                        loading="lazy"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-4">
                      <span className="text-fsz-primary text-[11px] font-semibold uppercase tracking-wide">
                        {article.category}
                      </span>
                      <h3 className="text-fsz-text font-semibold text-sm sm:text-base leading-snug mt-1.5 mb-2 group-hover:text-fsz-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-fsz-text-light text-xs leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {visibleCount < recent.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setVisibleCount((c) => c + 3)}
                  className="px-6 py-2.5 bg-fsz-text text-fsz-surface font-semibold text-sm rounded-md hover:bg-fsz-dark transition-colors"
                >
                  Загрузить ещё
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
