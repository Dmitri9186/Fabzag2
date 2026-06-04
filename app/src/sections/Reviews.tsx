import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Алексей Петров',
    company: 'ООО "СтройГранд"',
    text: 'Заказывали профтрубу и арматру для строительства ангара. Всё привезли точно в срок, резка в размер оказалась идеальной. Менеджер Константин помог с расчётом, сэкономили около 15% на отходах.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Марина Соколова',
    company: 'ИП Соколова',
    text: 'Пользовалась калькулятором раскроя листовых материалов — очень удобно! Сразу видно сколько листов нужно и как расположить детали. Заказали огнебиозащиту доски, качество отличное.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Дмитрий Воронов',
    company: 'ООО "МеталлСтрой"',
    text: 'Регулярно заказываем лазерную резку и изготовление ферм. Работают быстро и точно, допуски минимальные. Доставка на объект в день готовности. Рекомендую как надёжного партнёра.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ирина Кузнецова',
    company: 'ЗАО "ГлавСтрой"',
    text: 'Комплексный подход — заказали всё от арматуры до пластиковых окон. Один договор, одна доставка, один менеджер. Экономит массу времени. Качество материалов на высоте.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Сергей Морозов',
    company: 'ИП Морозов',
    text: 'Заказывал лягушки из арматуры под заказ. Сделали за 3 дня, хотя в других местах срок был 2 недели. Цена приемлемая, качество сварки отличное. Буду обращаться ещё.',
    rating: 5,
  },
];

export default function Reviews() {
  const [offset, setOffset] = useState(0);
  const cardsVisible = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1;
  const maxOffset = Math.max(0, reviews.length - cardsVisible);

  const next = () => setOffset((o) => Math.min(o + 1, maxOffset));
  const prev = () => setOffset((o) => Math.max(o - 1, 0));

  return (
    <section className="texture-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="text-fsz-text font-bold text-2xl sm:text-3xl tracking-tight mb-10"
        >
          Отзывы клиентов
        </motion.h2>

        <div className="relative">
          {/* Cards container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${offset * (100 / cardsVisible + 1.3)}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="shrink-0 bg-fsz-surface border border-fsz-border rounded-lg p-6 shadow-card"
                  style={{ width: `calc(${100 / cardsVisible}% - ${((cardsVisible - 1) * 16) / cardsVisible}px)` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-fsz-primary-light flex items-center justify-center">
                      <User className="w-5 h-5 text-fsz-primary" />
                    </div>
                    <div>
                      <div className="text-fsz-text font-semibold text-sm">
                        {review.name}
                      </div>
                      <div className="text-fsz-text-light text-xs">
                        {review.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-fsz-text text-sm leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#f0a030] text-[#f0a030]"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          {reviews.length > cardsVisible && (
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prev}
                disabled={offset === 0}
                className="w-10 h-10 rounded-full bg-fsz-surface border border-fsz-border flex items-center justify-center hover:bg-fsz-primary-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-fsz-text" />
              </button>
              <button
                onClick={next}
                disabled={offset >= maxOffset}
                className="w-10 h-10 rounded-full bg-fsz-surface border border-fsz-border flex items-center justify-center hover:bg-fsz-primary-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-fsz-text" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
