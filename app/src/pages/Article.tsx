import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Share2,
  Bookmark,
  CalendarDays,
} from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

interface ArticleData {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}

const articlesData: Record<number, ArticleData> = {
  1: {
    id: 1,
    title: 'Как выбрать профтрубу для строительства: полное руководство',
    excerpt: 'Разбираем виды профильных труб, их маркировку, сортамент и области применения.',
    image: '/images/cat-proftube.jpg',
    author: 'Алексей Петров',
    date: '15 мая 2025',
    category: 'Материалы',
    readTime: '8 минут',
    content: [
      'Профильная труба — один из самых востребованных материалов в строительстве и производстве металлоконструкций. От правильного выбора зависят прочность, долговечность и безопасность готовой конструкции.',
      '<h2>Маркировка профтрубы</h2>',
      'Обозначение профильной трубы состоит из нескольких элементов: размеров сечения (высота × ширина), толщины стенки, длины и стандарта (ГОСТ или ТУ). Например, 60×40×2 ГОСТ 8645-68 означает трубу сечением 60×40 мм, толщиной стенки 2 мм, изготовленную по ГОСТ 8645-68.',
      '<h2>Классификация по форме сечения</h2>',
      'Профильные трубы делятся на квадратные (20×20, 40×40, 60×60 и т.д.) и прямоугольные (40×20, 60×40, 80×40 и т.д.). Квадратные применяются для колонн, стоек и рам. Прямоугольные — для балок, ферм и пролётных конструкций.',
      '<h2>Как подобрать сортамент</h2>',
      'Для небольших ограждений и теплиц достаточно труб 20×20×1,5–2 мм. Для каркасов ангаров и складов — 60×40×2–3 мм. Для несущих колонн и ферм — 80×80×3–4 мм и более. При выборе всегда учитывайте расчётную нагрузку и пролёт.',
      '<h2>Качество поверхности</h2>',
      'Внешний вид трубы многое говорит о её качестве. На поверхности не должно быть трещин, раковин, окалины и ржавчины. Допустимый зазор при сварке шва — не более 2 мм.',
    ],
  },
  2: {
    id: 2,
    title: 'Лазерная резка металла: преимущества технологии',
    excerpt: 'Современное оборудование для лазерной резки позволяет достичь точности ±0,1 мм.',
    image: '/images/cat-laser.jpg',
    author: 'Марина Соколова',
    date: '10 мая 2025',
    category: 'Технологии',
    readTime: '6 минут',
    content: [
      'Лазерная резка — это технология раскроя металла с использованием высокомощного лазерного луча. Сегодня это один из самых точных и быстрых способов обработки листового металла.',
      '<h2>Принцип работы</h2>',
      'Лазерный луч фокусируется на поверхности металла, нагревая её до температуры плавления или испарения. Сопловое устройство подаёт в зону реза технический газ (азот или кислород), который выдувает расплавленный металл.',
      '<h2>Точность реза</h2>',
      'Современные станки обеспечивают точность позиционирования ±0,05 мм и точность реза ±0,1 мм. Ширина реза — от 0,1 до 0,5 мм в зависимости от мощности и толщины материала.',
      '<h2>Какие материалы режем</h2>',
      'Наше оборудование работает с углеродистой сталью до 16 мм, нержавеющей сталью до 8 мм, алюминием до 10 мм, а также с медью и латунью.',
      '<h2>Стоимость услуги</h2>',
      'Цена зависит от типа материала, толщины, сложности детали и объёма. Минимальный заказ — от 1 200 ₽. При заказе от 50 000 ₽ предоставляем скидку 5%.',
    ],
  },
  3: {
    id: 3,
    title: 'Расчёт арматуры для фундамента: ошибки и решения',
    excerpt: 'Как правильно рассчитать количество арматуры для ленточного и плитного фундамента.',
    image: '/images/cat-armatura.jpg',
    author: 'Дмитрий Воронов',
    date: '5 мая 2025',
    category: 'Расчёты',
    readTime: '10 минут',
    content: [
      'Правильный расчёт арматуры — залог прочности всего здания. Недостаточное количество стержней приведёт к трещинам, а избыточное — к лишним затратам.',
      '<h2>Ленточный фундамент</h2>',
      'Для ленточного фундамента высотой до 1 м используют арматуру Ø10–14 мм. Количество продольных стержней — минимум 4 (по 2 в верхнем и нижнем ряду). Шаг поперечных хомутов — 300–500 мм.',
      '<h2>Плитный фундамент</h2>',
      'Плита толщиной 200–300 мм армируется сеткой из арматуры Ø10–12 мм с шагом 200 мм в два ряда. Общий расход — около 50–80 кг арматуры на 1 м³ бетона.',
      '<h2>Типичные ошибки</h2>',
      'Часто застройщики экономят на арматуре, используя Ø6–8 мм вместо расчётного Ø12–14 мм. Также распространена ошибка — недостаточная толщина защитного слоя бетона (должна быть не менее 30–50 мм).',
      '<h2>Наш калькулятор</h2>',
      'Используйте наш бесплатный калькулятор расчёта арматуры. Введите размеры фундамента — получите точное количество материала с учётом 5% запаса на отходы.',
    ],
  },
  4: {
    id: 4,
    title: 'Огнебиозащита древесины: что нужно знать',
    excerpt: 'Виды огнебиозащитных составов, технологии нанесения и требования ГОСТ.',
    image: '/images/cat-ognezash.jpg',
    author: 'Ирина Кузнецова',
    date: '28 апреля 2025',
    category: 'Обработка',
    readTime: '7 минут',
    content: [
      'Древесина — прекрасный строительный материал, но она подвержена воздействию огня, грибка и насекомых. Огнебиозащита продлевает срок службы деревянных конструкций в 3–5 раз.',
      '<h2>Группы огнезащиты</h2>',
      'По ГОСТ 53292-2009 выделяют 5 групп огнезащитной эффективности. Для жилых зданий достаточно 3-й группы (трудновоспламеняемые материалы). Для общественных зданий — 2-я или 1-я группа.',
      '<h2>Способы нанесения</h2>',
      'Самый простой способ — кистевое нанесение в 2 слоя. Более эффективный — погружение в ванну с составом на 30–60 минут. Для массивных элементов используется напорная пропитка под давлением.',
      '<h2>Расход состава</h2>',
      'Расход огнебиозащитного состава зависит от породы древесины и способа нанесения. Для сосны при кистевом нанесении — 300–400 г/м², при погружении — 80–120 кг/м³.',
    ],
  },
  5: {
    id: 5,
    title: 'Пластиковые окна: как выбрать профиль и стеклопакет',
    excerpt: 'Сравниваем профили KBE и Rehau, разбираем виды стеклопакетов и фурнитуры.',
    image: '/images/cat-okna.jpg',
    author: 'Сергей Морозов',
    date: '20 апреля 2025',
    category: 'Окна',
    readTime: '9 минут',
    content: [
      'Выбор пластиковых окон — задача, от которой зависит тепло-, звукоизоляция и долговечность всего здания. Разберём ключевые параметры, на которые стоит обратить внимание.',
      '<h2>Профильные системы</h2>',
      'KBE Expert — 70-миллиметровая система с 5 камерами, оптимальное соотношение цены и качества. Rehau Euro-Design 70 — немецкое качество, 3 контура уплотнения, шумоизоляция до 45 дБ.',
      '<h2>Стеклопакеты</h2>',
      'Однокамерный стеклопакет (4-16-4) подходит для балконов и лоджий. Двухкамерный (4-10-4-10-4) — оптимальный выбор для жилых помещений. Энергосберегающий с i-стеклом снижает теплопотери на 40%.',
      '<h2>Фурнитура</h2>',
      'Рекомендуем фурнитуру Roto NT или Siegenia Titan. Обе системы обеспечивают плавный ход, микропроветривание и защиту от взлома до класса WK2.',
    ],
  },
  6: {
    id: 6,
    title: 'Металлические фермы: проектирование и монтаж',
    excerpt: 'Конструктивные особенности ферм из профтрубы. Расчёт нагрузок, выбор сечений и технология сборки.',
    image: '/images/cat-fermy.jpg',
    author: 'Алексей Петров',
    date: '15 апреля 2025',
    category: 'Конструкции',
    readTime: '11 минут',
    content: [
      'Металлические фермы — основа кровельных и пролётных конструкций. Правильное проектирование фермы гарантирует безопасность и экономию материала.',
      '<h2>Типы ферм</h2>',
      'Плоские фермы (Варрена, Прэтта, Полонского) используются для кровель и перекрытий. Объёмные фермы — для больших пролётов ангаров и выставочных павильонов.',
      '<h2>Расчёт нагрузок</h2>',
      'Собственный вес кровли — 15–50 кг/м². Снеговая нагрузка для Москвы — 180 кг/м². Ветровая — 32 кг/м². Общая расчётная нагрузка определяется по СП 20.13330.2016.',
      '<h2>Выбор профиля</h2>',
      'Для ферм пролётом до 6 м используют профтрубу 40×40×2–3 мм. Для пролётов 6–12 м — 60×40×3 мм и 50×50×3 мм. Для пролётов свыше 12 м требуется индивидуальный расчёт.',
      '<h2>Технология сварки</h2>',
      'Сварка выполняется полуавтоматом в среде CO2. Толщина катода — 1,0–1,2 мм. Перед сваркой торцы труб обрезаются под углом 35–45°. Контроль качества — визуальный и ультразвуковой.',
    ],
  },
  7: {
    id: 7,
    title: 'Пиломатериалы: сорта, влажность и хранение',
    excerpt: 'Как выбрать обрезную доску нужного сорта. Оптимальная влажность для разных видов работ.',
    image: '/images/cat-doska.jpg',
    author: 'Марина Соколова',
    date: '8 апреля 2025',
    category: 'Материалы',
    readTime: '6 минут',
    content: [
      'Качество пиломатериалов напрямую влияет на долговечность и внешний вид готовой конструкции. Разбираем, как выбрать доску правильно.',
      '<h2>Сорта древесины</h2>',
      'Сорт 1 — без сучков и дефектов, для отделочных работ. Сорт 2 — допускаются небольшие сучки, для каркасов. Сорт 3 — строительный, для несущих конструкций. Сорт 4 — технический, для временных работ.',
      '<h2>Влажность</h2>',
      'Для отделочных работ влажность должна быть 8–12%. Для каркасного строительства — 18–22% (естественная влажность). Для фанерования и шпонирования — 6–8%.',
      '<h2>Правила хранения</h2>',
      'Пиломатериалы хранят в штабелях с прокладками-брусками толщиной 25–30 мм. Штабель ставят на ровную площадку вдали от грунта. Накрывают влагонепроницаемым материалом, оставляя торцы открытыми для вентиляции.',
    ],
  },
  8: {
    id: 8,
    title: 'Прокладка кабеля в гофротрубе: нормы и требования',
    excerpt: 'Правила прокладки электрокабеля по ПУЭ. Выбор гофротрубы по диаметру и типу.',
    image: '/images/cat-kabel.jpg',
    author: 'Дмитрий Воронов',
    date: '1 апреля 2025',
    category: 'Электрика',
    readTime: '7 минут',
    content: [
      'Правильная прокладка кабеля в гофротрубе — это не только удобство при замене, но и пожарная безопасность. Рассказываем о ключевых требованиях.',
      '<h2>Выбор диаметра</h2>',
      'Сечение гофротрубы выбирают так, чтобы заполнение не превышало 35% площади. Для кабеля ВВГнг 3×2,5 используйте гофру Ø20 мм. Для ВВГнг 3×4 — Ø25 мм.',
      '<h2>Материал гофротрубы</h2>',
      'ПВХ — для сухих помещений, негорючая (Г1). ПНД — для наружных работ, устойчива к УФ. Металлорукав — для зон с высоким механическим воздействием.',
      '<h2>ПУЭ и ГОСТ</h2>',
      'По ПУЭ п.7.4.19 кабель в гофротрубе должен иметь возможность свободной замены. Запрещается прокладывать более одного силового кабеля в одной гофротрубе.',
    ],
  },
  9: {
    id: 9,
    title: 'Лягушки из арматуры: зачем нужны и как заказать',
    excerpt: 'Назначение арматурных лягушек в монолитном строительстве. Размеры, допуски и технология изготовления.',
    image: '/images/cat-lyagushki.jpg',
    author: 'Ирина Кузнецова',
    date: '25 марта 2025',
    category: 'Арматура',
    readTime: '5 минут',
    content: [
      'Арматурные лягушки — незаменимый элемент при армировании монолитных перекрытий. Они обеспечивают правильное расположение арматурных сеток и создают защитный слой бетона.',
      '<h2>Назначение</h2>',
      'Лягушки устанавливаются между верхней и нижней арматурными сетками. Они поддерживают расстояние между сетками (обычно 100–200 мм) и обеспечивают защитный слой бетона 15–30 мм.',
      '<h2>Размеры и допуски</h2>',
      'Высота лягушки определяется толщиной перекрытия минус два защитных слоя. Стандартные высоты: 80, 100, 120, 150, 200 мм. Допуск на высоту — ±2 мм.',
      '<h2>Как заказать</h2>',
      'Мы изготавливаем лягушки из арматуры Ø8–16 мм на ЧПУ станке. Доступны стандартные размеры и изготовление по вашим чертежам. Минимальный заказ — 50 шт. Срок изготовления — 1–3 дня.',
    ],
  },
};

const relatedArticles = [
  { id: 2, title: 'Лазерная резка металла: преимущества технологии', image: '/images/cat-laser.jpg', date: '10 мая 2025' },
  { id: 3, title: 'Расчёт арматуры для фундамента: ошибки и решения', image: '/images/cat-armatura.jpg', date: '5 мая 2025' },
  { id: 6, title: 'Металлические фермы: проектирование и монтаж', image: '/images/cat-fermy.jpg', date: '15 апреля 2025' },
];

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const articleId = Number(id);
  const article = articlesData[articleId] || articlesData[1];

  const renderContent = (text: string) => {
    if (text.startsWith('<h2>')) {
      const heading = text.replace('<h2>', '').replace('</h2>', '');
      return (
        <h2 className="text-fsz-text font-bold text-lg sm:text-xl mt-8 mb-4 tracking-tight">
          {heading}
        </h2>
      );
    }
    return (
      <p className="text-fsz-text-light text-sm sm:text-base leading-relaxed mb-4">
        {text}
      </p>
    );
  };

  return (
    <div className="min-h-screen texture-bg">
      <Header />
      <main>
        {/* ─── Article Header ─── */}
        <section className="bg-fsz-surface border-b border-fsz-border">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-8 lg:py-10">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-fsz-text-light text-xs mb-6"
            >
              <Link to="/" className="hover:text-fsz-primary transition-colors">
                Главная
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                to="/articles"
                className="hover:text-fsz-primary transition-colors"
              >
                Статьи
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-fsz-text truncate max-w-[200px]">
                {article.title}
              </span>
            </motion.div>

            {/* Category */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-block text-fsz-primary text-xs font-semibold uppercase tracking-wider mb-3"
            >
              {article.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-fsz-text font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-4"
            >
              {article.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="flex items-center gap-4 text-fsz-text-light text-xs sm:text-sm"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </motion.div>
          </div>
        </section>

        {/* ─── Article Image ─── */}
        <section className="px-4 sm:px-6 pt-6 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="max-w-[800px] mx-auto"
          >
            <div className="rounded-xl overflow-hidden h-[220px] sm:h-[300px] lg:h-[380px]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* ─── Article Content ─── */}
        <section className="px-4 sm:px-6 py-6 lg:py-8">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="max-w-[800px] mx-auto bg-fsz-surface border border-fsz-border rounded-xl p-5 sm:p-8 shadow-card"
          >
            {article.content.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + idx * 0.05, duration: 0.3 }}
              >
                {renderContent(block)}
              </motion.div>
            ))}

            {/* Share & Save */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-fsz-border">
              <button className="flex items-center gap-2 px-4 py-2 bg-fsz-card border border-fsz-border rounded-md text-fsz-text text-xs font-medium hover:bg-fsz-primary-light hover:border-fsz-primary transition-colors">
                <Share2 className="w-3.5 h-3.5" />
                Поделиться
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-fsz-card border border-fsz-border rounded-md text-fsz-text text-xs font-medium hover:bg-fsz-primary-light hover:border-fsz-primary transition-colors">
                <Bookmark className="w-3.5 h-3.5" />
                Сохранить
              </button>
            </div>
          </motion.article>
        </section>

        {/* ─── Related Articles ─── */}
        <section className="px-4 sm:px-6 pb-12">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-fsz-text font-bold text-lg sm:text-xl tracking-tight mb-5">
              Читайте также
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles
                .filter((a) => a.id !== articleId)
                .slice(0, 3)
                .map((rel, idx) => (
                  <motion.div
                    key={rel.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.08, duration: 0.35 }}
                  >
                    <Link
                      to={`/articles/${rel.id}`}
                      className="group block bg-fsz-surface border border-fsz-border rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all"
                    >
                      <div className="h-[120px] overflow-hidden">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-fsz-text font-semibold text-sm leading-snug group-hover:text-fsz-primary transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                        <span className="text-fsz-text-light text-[11px] mt-1.5 flex items-center gap-1">
                          <CalendarDays className="w-3 h-3" />
                          {rel.date}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>

            {/* Back to articles */}
            <div className="mt-8 flex justify-center">
              <Link
                to="/articles"
                className="flex items-center gap-2 text-fsz-text font-medium text-sm hover:text-fsz-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Все статьи
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
