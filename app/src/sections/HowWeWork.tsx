import { motion } from 'framer-motion';
import { Calculator, FileText, Factory, Truck } from 'lucide-react';

const steps = [
  {
    num: '1',
    title: 'Расчёт',
    desc: 'Считаем материалы в наших калькуляторах или по вашему ТЗ',
    icon: Calculator,
  },
  {
    num: '2',
    title: 'Заказ',
    desc: 'Оформляем договор и резервируем сроки',
    icon: FileText,
  },
  {
    num: '3',
    title: 'Производство',
    desc: 'Изготавливаем и резаем в точный размер',
    icon: Factory,
  },
  {
    num: '4',
    title: 'Доставка',
    desc: 'Привозим на объект своим транспортом',
    icon: Truck,
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-fsz-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="text-fsz-text font-bold text-2xl sm:text-3xl tracking-tight text-center mb-12"
        >
          Как мы работаем
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 sm:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.12, duration: 0.4 }}
                className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center sm:gap-3 flex-1 max-w-[240px]"
              >
                <div className="w-12 h-12 rounded-full bg-fsz-primary-light flex items-center justify-center shrink-0">
                  <span className="text-fsz-primary font-bold text-lg">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-fsz-text font-semibold text-base mb-1 flex items-center gap-2 sm:justify-center">
                    <Icon className="w-4 h-4 text-fsz-primary sm:hidden" />
                    {step.title}
                  </h3>
                  <p className="text-fsz-text-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Connector line (desktop only, between items) */}
                {idx < steps.length - 1 && (
                  <div className="hidden sm:block w-10 h-px bg-fsz-border absolute right-0 top-6 translate-x-full" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
