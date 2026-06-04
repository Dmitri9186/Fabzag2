import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, FileText } from 'lucide-react';

export interface PriceItem {
  name: string;
  unit: string;
  price: number;
}

export interface PriceCategory {
  id: number;
  title: string;
  items: PriceItem[];
}

export const priceData: PriceCategory[] = [
  {
    id: 1,
    title: 'Протяжка кабеля в гофру',
    items: [
      { name: 'Протяжка кабеля (до 10 м)', unit: 'м.п.', price: 45 },
      { name: 'Протяжка кабеля (10–50 м)', unit: 'м.п.', price: 38 },
      { name: 'Протяжка кабеля (50–100 м)', unit: 'м.п.', price: 32 },
      { name: 'Протяжка кабеля (свыше 100 м)', unit: 'м.п.', price: 28 },
      { name: 'Монтаж гофротрубы d16–20', unit: 'м.п.', price: 35 },
      { name: 'Монтаж гофротрубы d25–32', unit: 'м.п.', price: 48 },
      { name: 'Укладка в штробу', unit: 'м.п.', price: 65 },
    ],
  },
  {
    id: 2,
    title: 'Лягушки из арматуры',
    items: [
      { name: 'Лягушка из арматуры Ø8', unit: 'шт.', price: 18 },
      { name: 'Лягушка из арматуры Ø10', unit: 'шт.', price: 24 },
      { name: 'Лягушка из арматуры Ø12', unit: 'шт.', price: 32 },
      { name: 'Лягушка из арматуры Ø14', unit: 'шт.', price: 42 },
      { name: 'Лягушка под заказ (сварная)', unit: 'шт.', price: 55 },
      { name: 'Г-образный элемент Ø10', unit: 'шт.', price: 28 },
      { name: 'П-образный хомут Ø8–12', unit: 'шт.', price: 22 },
    ],
  },
  {
    id: 3,
    title: 'Лазерная резка листового металла',
    items: [
      { name: 'Резка стали до 3 мм', unit: 'м.п.', price: 85 },
      { name: 'Резка стали 3–6 мм', unit: 'м.п.', price: 120 },
      { name: 'Резка стали 6–10 мм', unit: 'м.п.', price: 180 },
      { name: 'Резка стали 10–16 мм', unit: 'м.п.', price: 260 },
      { name: 'Резка нержавейки до 3 мм', unit: 'м.п.', price: 150 },
      { name: 'Резка алюминия до 5 мм', unit: 'м.п.', price: 130 },
      { name: 'Минимальный заказ', unit: 'за заказ', price: 1200 },
    ],
  },
  {
    id: 4,
    title: 'Профтруба',
    items: [
      { name: 'Профтруба 20×20×1.5', unit: 'м.п.', price: 89 },
      { name: 'Профтруба 25×25×2', unit: 'м.п.', price: 115 },
      { name: 'Профтруба 40×20×2', unit: 'м.п.', price: 148 },
      { name: 'Профтруба 40×40×2', unit: 'м.п.', price: 175 },
      { name: 'Профтруба 60×40×2', unit: 'м.п.', price: 225 },
      { name: 'Профтруба 80×40×3', unit: 'м.п.', price: 385 },
      { name: 'Профтруба 100×100×4', unit: 'м.п.', price: 720 },
    ],
  },
  {
    id: 5,
    title: 'Резка профтрубы в размер',
    items: [
      { name: 'Резка до 3 мм', unit: 'рез', price: 35 },
      { name: 'Резка 3–6 мм', unit: 'рез', price: 55 },
      { name: 'Резка 6–10 мм', unit: 'рез', price: 85 },
      { name: 'Резка свыше 10 мм', unit: 'рез', price: 120 },
      { name: 'Резка под углом 45°', unit: 'рез', price: 65 },
      { name: 'Сверление отверстий', unit: 'отв.', price: 45 },
      { name: 'Минимальный заказ', unit: 'за заказ', price: 500 },
    ],
  },
  {
    id: 6,
    title: 'Арматура',
    items: [
      { name: 'Арматура А500С Ø6', unit: 'м.п.', price: 42 },
      { name: 'Арматура А500С Ø8', unit: 'м.п.', price: 68 },
      { name: 'Арматура А500С Ø10', unit: 'м.п.', price: 95 },
      { name: 'Арматура А500С Ø12', unit: 'м.п.', price: 135 },
      { name: 'Арматура А500С Ø14', unit: 'м.п.', price: 178 },
      { name: 'Арматура А500С Ø16', unit: 'м.п.', price: 235 },
      { name: 'Арматура А500С Ø20', unit: 'м.п.', price: 368 },
    ],
  },
  {
    id: 7,
    title: 'Резка арматуры в размер',
    items: [
      { name: 'Резка Ø6–10', unit: 'рез', price: 18 },
      { name: 'Резка Ø12–16', unit: 'рез', price: 28 },
      { name: 'Резка Ø18–25', unit: 'рез', price: 45 },
      { name: 'Резка Ø28–32', unit: 'рез', price: 65 },
      { name: 'Гибка арматуры Ø6–12', unit: 'шт.', price: 35 },
      { name: 'Вязка арматуры', unit: 'узел', price: 15 },
      { name: 'Минимальный заказ', unit: 'за заказ', price: 400 },
    ],
  },
  {
    id: 8,
    title: 'Доска обрезная',
    items: [
      { name: 'Доска 25×100×6000 (сосна)', unit: 'м³', price: 18500 },
      { name: 'Доска 25×150×6000 (сосна)', unit: 'м³', price: 18200 },
      { name: 'Доска 40×100×6000 (сосна)', unit: 'м³', price: 17800 },
      { name: 'Доска 40×150×6000 (сосна)', unit: 'м³', price: 17500 },
      { name: 'Доска 50×100×6000 (сосна)', unit: 'м³', price: 17200 },
      { name: 'Доска 50×150×6000 (сосна)', unit: 'м³', price: 16800 },
      { name: 'Брус 100×100×6000', unit: 'м³', price: 16200 },
    ],
  },
  {
    id: 9,
    title: 'Резка доски в размер',
    items: [
      { name: 'Резка доски (торцовка)', unit: 'рез', price: 35 },
      { name: 'Резка под углом', unit: 'рез', price: 55 },
      { name: 'Фрезерование кромки', unit: 'м.п.', price: 25 },
      { name: 'Сверление отверстий', unit: 'отв.', price: 30 },
      { name: 'Шлифовка поверхности', unit: 'м²', price: 120 },
      { name: 'Фигурная резка', unit: 'м.п.', price: 180 },
      { name: 'Минимальный заказ', unit: 'за заказ', price: 350 },
    ],
  },
  {
    id: 10,
    title: 'Обработка доски огнебиозащитой',
    items: [
      { name: 'Огнебиозащита 1-й слой', unit: 'м²', price: 85 },
      { name: 'Огнебиозащита 2-й слой', unit: 'м²', price: 145 },
      { name: 'Антисептирование', unit: 'м²', price: 65 },
      { name: 'Водоотталкивающая пропитка', unit: 'м²', price: 95 },
      { name: 'Комплексная защита', unit: 'м²', price: 175 },
      { name: 'Пропитка погружная', unit: 'м³', price: 4500 },
      { name: 'Минимальный заказ', unit: 'за заказ', price: 2500 },
    ],
  },
  {
    id: 11,
    title: 'Пластиковые окна',
    items: [
      { name: 'Окно 600×600 (1 камера)', unit: 'шт.', price: 3850 },
      { name: 'Окно 800×1200 (2 камеры)', unit: 'шт.', price: 6200 },
      { name: 'Окно 1200×1400 (3 камеры)', unit: 'шт.', price: 9500 },
      { name: 'Балконный блок', unit: 'шт.', price: 12500 },
      { name: 'Подоконник ПВХ', unit: 'м.п.', price: 450 },
      { name: 'Отлив цинковый', unit: 'м.п.', price: 320 },
      { name: 'Москитная сетка', unit: 'шт.', price: 850 },
    ],
  },
  {
    id: 12,
    title: 'Изготовление ферм из профтрубы',
    items: [
      { name: 'Ферма пролёт до 6 м', unit: 'шт.', price: 8500 },
      { name: 'Ферма пролёт 6–9 м', unit: 'шт.', price: 14200 },
      { name: 'Ферма пролёт 9–12 м', unit: 'шт.', price: 21800 },
      { name: 'Ферма пролёт 12–18 м', unit: 'шт.', price: 34500 },
      { name: 'Арочная ферма (до 6 м)', unit: 'шт.', price: 12500 },
      { name: 'Ферма под заказ (по чертежу)', unit: 'проект', price: 5000 },
      { name: 'Монтаж ферм', unit: 'шт.', price: 3500 },
    ],
  },
];

interface PriceModalProps {
  categoryId: number | null;
  onClose: () => void;
}

export default function PriceModal({ categoryId, onClose }: PriceModalProps) {
  const category = priceData.find((c) => c.id === categoryId);

  if (!category) return null;

  return (
    <AnimatePresence>
      {categoryId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="bg-fsz-surface rounded-xl shadow-elevated w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-fsz-border shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-fsz-primary-light flex items-center justify-center">
                  <FileText className="w-4 h-4 text-fsz-primary" />
                </div>
                <h3 className="text-fsz-text font-bold text-base">
                  {category.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg hover:bg-fsz-card flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-fsz-text-light" />
              </button>
            </div>

            {/* Price Table */}
            <div className="overflow-y-auto flex-1 px-5 py-3">
              {/* Table header */}
              <div className="flex items-center gap-3 py-2 px-3 bg-fsz-card rounded-md mb-2">
                <span className="text-fsz-text-light text-xs font-medium uppercase tracking-wide flex-1">
                  Наименование
                </span>
                <span className="text-fsz-text-light text-xs font-medium uppercase tracking-wide w-16 text-center">
      Ед.
    </span>
                <span className="text-fsz-text-light text-xs font-medium uppercase tracking-wide w-20 text-right">
                  Цена
                </span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    className={`flex items-center gap-3 py-2.5 px-3 rounded-md ${
                      idx % 2 === 0 ? 'bg-transparent' : 'bg-fsz-card/50'
                    }`}
                  >
                    <span className="text-fsz-text text-sm flex-1 leading-snug">
                      {item.name}
                    </span>
                    <span className="text-fsz-text-light text-xs w-16 text-center">
                      {item.unit}
                    </span>
                    <span className="text-fsz-primary font-bold text-sm w-20 text-right whitespace-nowrap">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Note */}
              <p className="text-fsz-text-light text-[11px] mt-4 mb-2 leading-relaxed px-3">
                Цены указаны без НДС. При заказе от 50 000 ₽ — скидка 5%. При
                заказе от 100 000 ₽ — скидка 10%. Точная стоимость рассчитывается
                менеджером после согласования объёма.
              </p>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-fsz-border shrink-0 bg-fsz-card/30">
              <a
                href="tel:+74951234567"
                className="btn-primary w-full h-10 text-sm"
              >
                <Phone className="w-4 h-4" />
                Уточнить цену по телефону
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
