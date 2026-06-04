import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Как быстро вы выполняете резку металла в размер?',
    answer:
      'Стандартный срок резки — от 2 до 24 часов в зависимости от объёма. Для крупных заказов от 5 тонн — возможен срок до 2 рабочих дней. Срочная резка выполняется в течение 2 часов с надбавкой 20%.',
  },
  {
    question: 'Есть ли у вас доставка и в какие регионы?',
    answer:
      'Да, доставляем собственным транспортом по Москве и Московской области. Стоимость доставки — от 2 500 ₽ в пределах МКАД. В регионы отправляем транспортными компаниями по договорённости. При заказе от 50 000 ₽ доставка в пределах 30 км от МКАД — бесплатно.',
  },
  {
    question: 'Можно ли заказать индивидуальную длину профтрубы?',
    answer:
      'Конечно! Мы режем профтрубу любой стандартной серии (от 15×15 до 200×200 мм) в точный размер с точностью ±1 мм. Минимальная длина — 100 мм, максимальная — 12 000 мм. Также делаем гибку, сверление и сварку.',
  },
  {
    question: 'Как работает калькулятор раскроя — можно ли доверять результатам?',
    answer:
      'Наши калькуляторы разработаны на основе ГОСТ и реального опыта производства. Результат включает 5% запас на отходы и подгонку. Для гарантии рекомендуем добавить 10-15% к расчётному количеству. Менеджеры всегда перепроверяют расчёт перед заказом.',
  },
  {
    question: 'Какие сроки изготовления ферм из профтрубы?',
    answer:
      'Срок изготовления металлических ферм зависит от сложности и объёма. Стандартные фермы (пролёт до 12 м) — 3-5 рабочих дней. Нестандартные конструкции — до 10 рабочих дней. Возможно срочное изготовление — уточняйте у менеджера.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-fsz-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="lg:w-[30%] shrink-0"
          >
            <h2 className="text-fsz-text font-bold text-2xl sm:text-3xl tracking-tight mb-3">
              Часто задаваемые вопросы
            </h2>
            <p className="text-fsz-text-light text-sm leading-relaxed">
              Если не нашли ответ — позвоните, всё расскажем
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <div className="lg:w-[70%] flex-1">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.06, duration: 0.35 }}
                className="border-b border-fsz-border"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className="text-fsz-text font-semibold text-sm sm:text-base pr-4 group-hover:text-fsz-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-fsz-text-light shrink-0 transition-transform duration-300 ${
                      openIdx === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-fsz-text-light text-sm leading-relaxed pb-4 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
