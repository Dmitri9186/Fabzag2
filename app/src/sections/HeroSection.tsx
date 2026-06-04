import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye, ChevronUp, Calculator, Phone, ArrowLeft, FileText,
  Zap, Cable, Plug, Wifi, BatteryCharging, Lightbulb, ToggleLeft, ShieldCheck, Gauge,
  Anchor, GripVertical, Link as LinkIcon, Minus, Move, Lock, Wrench, Hammer, Construction, Square, CircleDot,
  Sparkles, Flame, Sun, Star,
  Box, Columns, Grid3X3, LayoutGrid, Table as TableIcon, PanelLeft, Maximize, Minimize, RectangleHorizontal,
  Scissors, Slice, Crop, PenTool, ChevronsRight, ArrowRightLeft, Ruler,
  GripHorizontal, AlignCenter, Activity, TrendingUp, Waves, Wind,
  Settings, Cog, RotateCcw,
  TreePine, TreeDeciduous, Leaf, Feather, Layers, LayoutTemplate, Grid2x2,
  Triangle, Hexagon, Octagon,
  Shield, Droplets, Brush,
  DoorOpen, SquareStack,
  Landmark, Factory, Warehouse,
  BrickWall, Home as HomeIcon, Thermometer,
  PaintBucket,
} from 'lucide-react';

// ─── Category Grid Data ───
const categoryRows = [
  [
    { id: 2, title: 'Лягушки из арматуры\nв наличии и под заказ', image: '/images/cat-lyagushki.jpg', cols: 'col-span-2' },
    { id: 1, title: 'Протяжка кабеля\nв гофру', image: '/images/cat-kabel.jpg', cols: 'col-span-1' },
    { id: 3, title: 'Лазерная резка\nлистового металла', image: '/images/cat-laser.jpg', cols: 'col-span-1' },
  ],
  [
    { id: 5, title: 'Резка профтрубы\nв размер', image: '/images/cat-rezka.jpg', cols: 'col-span-1' },
    { id: 9, title: 'Резка доски\nв размер', image: '/images/cat-rezka.jpg', cols: 'col-span-1' },
    { id: 4, title: 'Профтруба', image: '/images/cat-proftube.jpg', cols: 'col-span-1' },
    { id: 6, title: 'Арматура', image: '/images/cat-armatura.jpg', cols: 'col-span-1' },
  ],
  [
    { id: 10, title: 'Обработка доски\nогнебиозащитой', image: '/images/cat-ognezash.jpg', cols: 'col-span-1' },
    { id: 11, title: 'Пластиковые\nокна', image: '/images/cat-okna.jpg', cols: 'col-span-1' },
    { id: 7, title: 'Резка арматуры\nв размер', image: '/images/cat-rezka.jpg', cols: 'col-span-2' },
  ],
  [
    { id: 8, title: 'Доска обрезная', image: '/images/cat-doska.jpg', cols: 'col-span-2' },
    { id: 12, title: 'Изготовление ферм\nиз профтрубы', image: '/images/cat-fermy.jpg', cols: 'col-span-2' },
  ],
];

// ─── Calculator Data ───
const visibleCalculators = [
  { id: 1, label: 'Раскрой листовых материалов', icon: Ruler },
  { id: 2, label: 'Раскрой погонажа', icon: Construction },
  { id: 3, label: 'Расчёт фундамента', icon: Landmark },
  { id: 4, label: 'Расчёт балок', icon: AlignCenter },
  { id: 5, label: 'Расчёт газобетона', icon: BrickWall },
  { id: 6, label: 'Расчёт кровли', icon: HomeIcon },
];

const extraCalculators = [
  { id: 7, label: 'Расчёт утеплителя', icon: Thermometer },
  { id: 8, label: 'Расчёт лаг', icon: Warehouse },
  { id: 9, label: 'Расчёт лестницы', icon: TrendingUp },
  { id: 10, label: 'Расчёт штукатурки', icon: PaintBucket },
];

// ─── Icon Map ───
const ICONS: Record<string, React.ElementType> = {
  Zap, Cable, Plug, Wifi, BatteryCharging, Lightbulb, ToggleLeft, ShieldCheck, Gauge,
  Anchor, GripVertical, LinkIcon, Minus, Move, Lock, Wrench, Hammer, Construction, Square, CircleDot,
  Sparkles, Flame, Sun, Star,
  Box, Columns, Grid3X3, LayoutGrid, TableIcon, PanelLeft, Maximize, Minimize, RectangleHorizontal,
  Scissors, Slice, Crop, PenTool, ChevronsRight, ArrowRightLeft, Ruler,
  GripHorizontal, AlignCenter, Activity, TrendingUp, Waves, Wind,
  Settings, Cog, RotateCcw,
  TreePine, TreeDeciduous, Leaf, Feather, Layers, LayoutTemplate, Grid2x2,
  Triangle, Hexagon, Octagon,
  Shield, Droplets, Brush,
  DoorOpen, SquareStack,
  Landmark, Factory, Warehouse,
};

function PriceIcon({ name }: { name: string }) {
  const Icon = ICONS[name] || CircleDot;
  return <Icon className="w-4 h-4 text-fsz-primary shrink-0" />;
}

// ─── Product Details & Prices ───
interface PriceItem { icon: string; name: string; unit: string; price: number; }
interface ProductDetail {
  id: number;
  title: string;
  description: string;
  items: PriceItem[];
}

const productDetails: ProductDetail[] = [
  {
    id: 1,
    title: 'Протяжка кабеля в гофру',
    description: 'Монтаж и прокладка силовых и слаботочных кабелей в гофрированных трубах. Работаем с кабелями сечением от 1,5 до 35 мм². Используем ПВХ и ПНД гофротрубы диаметром 16–50 мм. Гарантия на работы — 2 года.',
    items: [
      { icon: 'Cable', name: 'Протяжка кабеля до 10 м', unit: 'м.п.', price: 45 },
      { icon: 'Cable', name: 'Протяжка кабеля 10–50 м', unit: 'м.п.', price: 38 },
      { icon: 'Cable', name: 'Протяжка кабеля 50–100 м', unit: 'м.п.', price: 32 },
      { icon: 'Cable', name: 'Протяжка кабеля свыше 100 м', unit: 'м.п.', price: 28 },
      { icon: 'Zap', name: 'Монтаж гофротрубы d16–20', unit: 'м.п.', price: 35 },
      { icon: 'Zap', name: 'Монтаж гофротрубы d25–32', unit: 'м.п.', price: 48 },
      { icon: 'Zap', name: 'Монтаж гофротрубы d40–50', unit: 'м.п.', price: 65 },
      { icon: 'Plug', name: 'Укладка в штробу', unit: 'м.п.', price: 75 },
      { icon: 'Plug', name: 'Монтаж распаечной коробки', unit: 'шт.', price: 120 },
      { icon: 'Wifi', name: 'Протяжка интернет-кабеля', unit: 'м.п.', price: 28 },
      { icon: 'Lightbulb', name: 'Подключение светильников', unit: 'шт.', price: 180 },
      { icon: 'ToggleLeft', name: 'Установка выключателей', unit: 'шт.', price: 150 },
    ],
  },
  {
    id: 2,
    title: 'Лягушки из арматуры',
    description: 'Изготовление арматурных лягушек, Г-образных и П-образных хомутов из стали А500С и А400. Гибка на ЧПУ станке с точностью ±1 мм. Доступны диаметры от 8 до 16 мм. В наличии и под заказ от 50 шт.',
    items: [
      { icon: 'Anchor', name: 'Лягушка из арматуры Ø8', unit: 'шт.', price: 18 },
      { icon: 'Anchor', name: 'Лягушка из арматуры Ø10', unit: 'шт.', price: 24 },
      { icon: 'Anchor', name: 'Лягушка из арматуры Ø12', unit: 'шт.', price: 32 },
      { icon: 'Anchor', name: 'Лягушка из арматуры Ø14', unit: 'шт.', price: 42 },
      { icon: 'Anchor', name: 'Лягушка из арматуры Ø16', unit: 'шт.', price: 55 },
      { icon: 'GripVertical', name: 'Г-образный элемент Ø10', unit: 'шт.', price: 28 },
      { icon: 'GripVertical', name: 'Г-образный элемент Ø12', unit: 'шт.', price: 35 },
      { icon: 'GripVertical', name: 'Г-образный элемент Ø14', unit: 'шт.', price: 48 },
      { icon: 'LinkIcon', name: 'П-образный хомут Ø8–10', unit: 'шт.', price: 22 },
      { icon: 'LinkIcon', name: 'П-образный хомут Ø12–14', unit: 'шт.', price: 32 },
      { icon: 'Square', name: 'Закладная деталь 100×100', unit: 'шт.', price: 85 },
      { icon: 'Square', name: 'Закладная деталь 150×150', unit: 'шт.', price: 120 },
      { icon: 'Construction', name: 'Сварка лягушки по чертежу', unit: 'шт.', price: 75 },
    ],
  },
  {
    id: 3,
    title: 'Лазерная резка листового металла',
    description: 'Волоконный лазерный станок мощностью 3 кВт. Режем сталь, нержавейку, алюминий, медь и латунь. Толщина стали до 16 мм. Точность реза ±0,1 мм. Чистый срез без заусенцев. Минимальный заказ — от 1 200 ₽.',
    items: [
      { icon: 'Sparkles', name: 'Резка стали до 3 мм', unit: 'м.п.', price: 85 },
      { icon: 'Sparkles', name: 'Резка стали 3–6 мм', unit: 'м.п.', price: 120 },
      { icon: 'Sparkles', name: 'Резка стали 6–10 мм', unit: 'м.п.', price: 180 },
      { icon: 'Sparkles', name: 'Резка стали 10–16 мм', unit: 'м.п.', price: 260 },
      { icon: 'Flame', name: 'Резка нержавейки до 3 мм', unit: 'м.п.', price: 150 },
      { icon: 'Flame', name: 'Резка нержавейки 3–6 мм', unit: 'м.п.', price: 220 },
      { icon: 'Sun', name: 'Резка алюминия до 5 мм', unit: 'м.п.', price: 130 },
      { icon: 'Sun', name: 'Резка алюминия 5–10 мм', unit: 'м.п.', price: 190 },
      { icon: 'Star', name: 'Резка меди и латуни', unit: 'м.п.', price: 280 },
      { icon: 'Zap', name: 'Микрорезка (точность 0,05 мм)', unit: 'м.п.', price: 450 },
      { icon: 'Gauge', name: 'Минимальный заказ', unit: 'за заказ', price: 1200 },
    ],
  },
  {
    id: 4,
    title: 'Профтруба',
    description: 'Прямоугольная и квадратная профильная труба из стали Ст3пс и 09Г2С. В наличии размеры от 15×15 до 200×200 мм, толщина стенки 1,5–8 мм. Длина стандартная — 6 м. Резка в размер и доставка на объект.',
    items: [
      { icon: 'Box', name: 'Профтруба 20×20×1,5', unit: 'м.п.', price: 89 },
      { icon: 'Box', name: 'Профтруба 25×25×2', unit: 'м.п.', price: 115 },
      { icon: 'Box', name: 'Профтруба 40×20×2', unit: 'м.п.', price: 148 },
      { icon: 'Box', name: 'Профтруба 40×40×2', unit: 'м.п.', price: 175 },
      { icon: 'Box', name: 'Профтруба 60×40×2', unit: 'м.п.', price: 225 },
      { icon: 'Box', name: 'Профтруба 60×60×3', unit: 'м.п.', price: 320 },
      { icon: 'Box', name: 'Профтруба 80×40×3', unit: 'м.п.', price: 385 },
      { icon: 'Box', name: 'Профтруба 80×80×3', unit: 'м.п.', price: 520 },
      { icon: 'Box', name: 'Профтруба 100×100×4', unit: 'м.п.', price: 720 },
      { icon: 'Box', name: 'Профтруба 120×120×4', unit: 'м.п.', price: 950 },
      { icon: 'Box', name: 'Профтруба 150×150×5', unit: 'м.п.', price: 1450 },
      { icon: 'Box', name: 'Профтруба 200×200×6', unit: 'м.п.', price: 2200 },
    ],
  },
  {
    id: 5,
    title: 'Резка профтрубы в размер',
    description: 'Торцовочная резка профильной трубы под 90° и под углом. Абразивная и дисковая резка. Точность ±1 мм. Работаем с трубами до 200×200 мм. Возможна резка по чертежам с отверстиями и под углом.',
    items: [
      { icon: 'Scissors', name: 'Резка профтрубы до 3 мм', unit: 'рез', price: 35 },
      { icon: 'Scissors', name: 'Резка профтрубы 3–6 мм', unit: 'рез', price: 55 },
      { icon: 'Scissors', name: 'Резка профтрубы 6–10 мм', unit: 'рез', price: 85 },
      { icon: 'Scissors', name: 'Резка профтрубы свыше 10 мм', unit: 'рез', price: 120 },
      { icon: 'Slice', name: 'Резка под углом 45°', unit: 'рез', price: 65 },
      { icon: 'Slice', name: 'Резка под углом 30° / 60°', unit: 'рез', price: 85 },
      { icon: 'Crop', name: 'Фрезерование торца', unit: 'рез', price: 55 },
      { icon: 'PenTool', name: 'Сверление отверстий Ø6–12', unit: 'отв.', price: 45 },
      { icon: 'PenTool', name: 'Сверление отверстий Ø14–20', unit: 'отв.', price: 75 },
      { icon: 'Ruler', name: 'Резка по чертежам заказчика', unit: 'рез', price: 95 },
      { icon: 'Gauge', name: 'Минимальный заказ', unit: 'за заказ', price: 500 },
    ],
  },
  {
    id: 6,
    title: 'Арматура',
    description: 'Стержневая арматура класса А500С и А400С. Диаметр от 6 до 32 мм. Длина мерных прутков 6–12 м. Прутки и бухты. Сертификаты соответствия ГОСТ. Доставка бандажами или россыпью.',
    items: [
      { icon: 'Minus', name: 'Арматура А500С Ø6', unit: 'м.п.', price: 42 },
      { icon: 'Minus', name: 'Арматура А500С Ø8', unit: 'м.п.', price: 68 },
      { icon: 'Minus', name: 'Арматура А500С Ø10', unit: 'м.п.', price: 95 },
      { icon: 'Minus', name: 'Арматура А500С Ø12', unit: 'м.п.', price: 135 },
      { icon: 'Minus', name: 'Арматура А500С Ø14', unit: 'м.п.', price: 178 },
      { icon: 'Minus', name: 'Арматура А500С Ø16', unit: 'м.п.', price: 235 },
      { icon: 'Minus', name: 'Арматура А500С Ø18', unit: 'м.п.', price: 295 },
      { icon: 'Minus', name: 'Арматура А500С Ø20', unit: 'м.п.', price: 368 },
      { icon: 'Minus', name: 'Арматура А500С Ø25', unit: 'м.п.', price: 575 },
      { icon: 'Minus', name: 'Арматура А500С Ø28', unit: 'м.п.', price: 720 },
      { icon: 'Minus', name: 'Арматура А500С Ø32', unit: 'м.п.', price: 920 },
      { icon: 'GripHorizontal', name: 'Бухта арматуры Ø6–10', unit: 'бухта', price: 8500 },
      { icon: 'Activity', name: 'Арматура А400С Ø12–20', unit: 'м.п.', price: 125 },
    ],
  },
  {
    id: 7,
    title: 'Резка арматуры в размер',
    description: 'Торцовочная резка арматуры на станке с ЧПУ. Точность ±1 мм. Режем прутки и бухты. Возможна гибка арматуры под углом и вязка арматурных каркасов. Работаем с диаметрами от 6 до 32 мм.',
    items: [
      { icon: 'Scissors', name: 'Резка арматуры Ø6–10', unit: 'рез', price: 18 },
      { icon: 'Scissors', name: 'Резка арматуры Ø12–16', unit: 'рез', price: 28 },
      { icon: 'Scissors', name: 'Резка арматуры Ø18–25', unit: 'рез', price: 45 },
      { icon: 'Scissors', name: 'Резка арматуры Ø28–32', unit: 'рез', price: 65 },
      { icon: 'Wrench', name: 'Гибка арматуры Ø6–10', unit: 'шт.', price: 25 },
      { icon: 'Wrench', name: 'Гибка арматуры Ø12–16', unit: 'шт.', price: 45 },
      { icon: 'Wrench', name: 'Гибка арматуры Ø18–25', unit: 'шт.', price: 75 },
      { icon: 'Hammer', name: 'Вязка арматуры (узел)', unit: 'узел', price: 15 },
      { icon: 'Hammer', name: 'Вязка каркаса до 50 узлов', unit: 'каркас', price: 650 },
      { icon: 'Construction', name: 'Сборка арматурного каркаса', unit: 'тн.', price: 3200 },
      { icon: 'Settings', name: 'Резка бухты в мерные прутки', unit: 'бухта', price: 450 },
      { icon: 'Gauge', name: 'Минимальный заказ', unit: 'за заказ', price: 400 },
    ],
  },
  {
    id: 8,
    title: 'Доска обрезная',
    description: 'Обрезная доска хвойных пород (сосна, ель) сортов 1–4. Влажность 18–22%. Строганая и нестроганая. Размеры от 25×100 до 50×200 мм, длина 3–6 м. Пиломатериалы с собственного производства.',
    items: [
      { icon: 'TreePine', name: 'Доска 25×100×6000 (сосна)', unit: 'м³', price: 18500 },
      { icon: 'TreePine', name: 'Доска 25×150×6000 (сосна)', unit: 'м³', price: 18200 },
      { icon: 'TreePine', name: 'Доска 40×100×6000 (сосна)', unit: 'м³', price: 17800 },
      { icon: 'TreePine', name: 'Доска 40×150×6000 (сосна)', unit: 'м³', price: 17500 },
      { icon: 'TreePine', name: 'Доска 50×100×6000 (сосна)', unit: 'м³', price: 17200 },
      { icon: 'TreePine', name: 'Доска 50×150×6000 (сосна)', unit: 'м³', price: 16800 },
      { icon: 'TreePine', name: 'Доска 50×200×6000 (сосна)', unit: 'м³', price: 16500 },
      { icon: 'TreeDeciduous', name: 'Брус 50×50×6000', unit: 'м³', price: 18500 },
      { icon: 'TreeDeciduous', name: 'Брус 100×100×6000', unit: 'м³', price: 16200 },
      { icon: 'TreeDeciduous', name: 'Брус 150×150×6000', unit: 'м³', price: 15800 },
      { icon: 'TreeDeciduous', name: 'Брус 200×200×6000', unit: 'м³', price: 15500 },
      { icon: 'Leaf', name: 'Строганая доска 20×90×3000', unit: 'м³', price: 22500 },
      { icon: 'Leaf', name: 'Строганая доска 30×140×3000', unit: 'м³', price: 21800 },
    ],
  },
  {
    id: 9,
    title: 'Резка доски в размер',
    description: 'Торцовка, распил и фигурная резка обрезной доски и бруса. Дисковые пилы диаметром до 500 мм. Точность ±2 мм. Режем доски до 200 мм толщиной. Возможна резка под углом и фрезерование кромки.',
    items: [
      { icon: 'Scissors', name: 'Торцовка доски до 50 мм', unit: 'рез', price: 35 },
      { icon: 'Scissors', name: 'Торцовка доски 50–100 мм', unit: 'рез', price: 55 },
      { icon: 'Scissors', name: 'Торцовка бруса свыше 100 мм', unit: 'рез', price: 85 },
      { icon: 'Slice', name: 'Резка под углом 45°', unit: 'рез', price: 75 },
      { icon: 'Slice', name: 'Резка под углом 30° / 60°', unit: 'рез', price: 95 },
      { icon: 'Crop', name: 'Фрезерование кромки', unit: 'м.п.', price: 25 },
      { icon: 'PenTool', name: 'Сверление отверстий в доске', unit: 'отв.', price: 30 },
      { icon: 'Ruler', name: 'Распил листа на полосы', unit: 'м.п.', price: 45 },
      { icon: 'Layers', name: 'Фигурная резка по шаблону', unit: 'м.п.', price: 180 },
      { icon: 'LayoutTemplate', name: 'Выборка паза и гребня', unit: 'м.п.', price: 65 },
      { icon: 'Gauge', name: 'Минимальный заказ', unit: 'за заказ', price: 350 },
    ],
  },
  {
    id: 10,
    title: 'Обработка доски огнебиозащитой',
    description: 'Нанесение огнебиозащитных составов на пиломатериалы методом окунания и напыления. Используем сертифицированные пропитки 1-й и 2-й группы огнезащиты. Работаем с доской, брусом и фанерой.',
    items: [
      { icon: 'Flame', name: 'Огнебиозащита 1-й слой', unit: 'м²', price: 85 },
      { icon: 'Flame', name: 'Огнебиозащита 2-й слой', unit: 'м²', price: 145 },
      { icon: 'Shield', name: 'Антисептирование дерева', unit: 'м²', price: 65 },
      { icon: 'Shield', name: 'Комплексная защита (2 в 1)', unit: 'м²', price: 175 },
      { icon: 'Droplets', name: 'Водоотталкивающая пропитка', unit: 'м²', price: 95 },
      { icon: 'Droplets', name: 'Пропитка погружная (бак)', unit: 'м³', price: 4500 },
      { icon: 'Brush', name: 'Нанесение лакоматериала', unit: 'м²', price: 120 },
      { icon: 'Brush', name: 'Грунтовка древесины', unit: 'м²', price: 55 },
      { icon: 'ShieldCheck', name: 'Защита торцов дерева', unit: 'м.п.', price: 35 },
      { icon: 'Sun', name: 'УФ-защитная пропитка', unit: 'м²', price: 110 },
      { icon: 'Shield', name: 'Защита бруса и балок', unit: 'м³', price: 3800 },
      { icon: 'Gauge', name: 'Минимальный заказ', unit: 'за заказ', price: 2500 },
    ],
  },
  {
    id: 11,
    title: 'Пластиковые окна',
    description: 'Окна из ПВХ-профиля KBE и Rehau. Одно-, двух- и трёхкамерные стеклопакеты. Фурнитура Roto и Siegenia. Установка с отделкой откосов и подоконников. Гарантия на профиль — 10 лет, на стеклопакет — 5 лет.',
    items: [
      { icon: 'Square', name: 'Окно 600×600 (1 камера)', unit: 'шт.', price: 3850 },
      { icon: 'Square', name: 'Окно 800×1200 (2 камеры)', unit: 'шт.', price: 6200 },
      { icon: 'Square', name: 'Окно 1200×1400 (3 камеры)', unit: 'шт.', price: 9500 },
      { icon: 'PanelLeft', name: 'Балконный блок ПВХ', unit: 'шт.', price: 12500 },
      { icon: 'Maximize', name: 'Панорамное окно 2000×1500', unit: 'шт.', price: 18500 },
      { icon: 'Minimize', name: 'Окно с форточкой 900×900', unit: 'шт.', price: 5200 },
      { icon: 'RectangleHorizontal', name: 'Подоконник ПВХ белый', unit: 'м.п.', price: 450 },
      { icon: 'RectangleHorizontal', name: 'Отлив цинковый', unit: 'м.п.', price: 320 },
      { icon: 'RectangleHorizontal', name: 'Откосы пластиковые', unit: 'м.п.', price: 380 },
      { icon: 'DoorOpen', name: 'Москитная сетка на окно', unit: 'шт.', price: 850 },
      { icon: 'DoorOpen', name: 'Детский замок-фиксатор', unit: 'шт.', price: 450 },
      { icon: 'SquareStack', name: 'Ламинация профиля под дерево', unit: 'м.п.', price: 650 },
      { icon: 'Gauge', name: 'Монтаж окна (стандарт)', unit: 'шт.', price: 2200 },
    ],
  },
  {
    id: 12,
    title: 'Изготовление ферм из профтрубы',
    description: 'Плоские и объёмные металлические фермы из профильной трубы. Проектирование по чертежам или типовым схемам. Сварка полуавтоматом в среде CO2. Грунтовка и покраска по желанию. Пролёты от 3 до 18 м.',
    items: [
      { icon: 'Construction', name: 'Ферма пролёт до 6 м', unit: 'шт.', price: 8500 },
      { icon: 'Construction', name: 'Ферма пролёт 6–9 м', unit: 'шт.', price: 14200 },
      { icon: 'Construction', name: 'Ферма пролёт 9–12 м', unit: 'шт.', price: 21800 },
      { icon: 'Construction', name: 'Ферма пролёт 12–18 м', unit: 'шт.', price: 34500 },
      { icon: 'Grid3X3', name: 'Арочная ферма (до 6 м)', unit: 'шт.', price: 12500 },
      { icon: 'Grid3X3', name: 'Арочная ферма (6–12 м)', unit: 'шт.', price: 22500 },
      { icon: 'Triangle', name: 'Ферма треугольная (стропильная)', unit: 'шт.', price: 9800 },
      { icon: 'Hexagon', name: 'Ферма с решётчатым поясом', unit: 'шт.', price: 16800 },
      { icon: 'Factory', name: 'Ферма по чертежам заказчика', unit: 'проект', price: 5000 },
      { icon: 'Landmark', name: 'Монтаж фермы на объект', unit: 'шт.', price: 3500 },
      { icon: 'Warehouse', name: 'Доставка ферм (до 50 км)', unit: 'рейс', price: 4500 },
      { icon: 'Settings', name: 'Грунтовка и покраска ферм', unit: 'шт.', price: 1200 },
      { icon: 'Gauge', name: 'Консультация и расчёт', unit: 'услуга', price: 0 },
    ],
  },
];

// ─── Components ───

function CategoryCard({ cat, idx, onClick }: { cat: typeof categoryRows[0][0]; idx: number; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.02, duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      className={`card-hover group relative flex flex-col bg-fsz-card border border-fsz-border rounded-lg overflow-hidden cursor-pointer h-[120px] sm:h-[135px] lg:h-[150px] text-left ${cat.cols}`}
    >
      <span className="text-fsz-text font-semibold text-[12px] lg:text-[14px] leading-tight p-3.5 pb-0 whitespace-pre-line z-10">
        {cat.title}
      </span>
      <div className="absolute right-0 bottom-0 top-7 w-[52%]">
        <img
          src={cat.image}
          alt={cat.title.replace('\n', ' ')}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    </motion.button>
  );
}

function CategoryDetail({ product, onBack }: { product: ProductDetail; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col h-full bg-fsz-surface border border-fsz-border rounded-xl overflow-hidden shadow-card"
    >
      {/* Banner Image */}
      <div className="relative h-[140px] sm:h-[160px] shrink-0 overflow-hidden">
        <img
          src={categoryRows.flat().find((c) => c.id === product.id)?.image || ''}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fsz-dark/70 via-fsz-dark/20 to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-fsz-surface/90 backdrop-blur-sm rounded-md text-fsz-text text-xs font-medium hover:bg-fsz-surface transition-colors z-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Назад
        </button>
        <h2 className="absolute bottom-3 left-4 right-4 text-fsz-surface font-bold text-base sm:text-lg leading-tight z-10">
          {product.title}
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto min-h-0 p-4">
        {/* Description */}
        <p className="text-fsz-text-light text-xs leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Price List Header */}
        <div className="flex items-center gap-2 mb-2.5">
          <FileText className="w-4 h-4 text-fsz-primary" />
          <span className="text-fsz-text font-semibold text-sm">Прайс-лист</span>
        </div>

        {/* Price Items */}
        <div className="space-y-1">
          {product.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.025, duration: 0.18 }}
              className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg ${
                idx % 2 === 0 ? 'bg-fsz-card/40' : 'bg-transparent'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-fsz-primary-light flex items-center justify-center shrink-0">
                <PriceIcon name={item.icon} />
              </div>
              <span className="text-fsz-text text-xs flex-1 leading-snug">{item.name}</span>
              <span className="text-fsz-text-light text-[10px] shrink-0 px-1.5 py-0.5 bg-fsz-card rounded">{item.unit}</span>
              <span className="text-fsz-primary font-bold text-sm shrink-0 w-[52px] text-right">
                {item.price === 0 ? '—' : `${item.price.toLocaleString('ru-RU')} ₽`}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-fsz-text-light text-[10px] mt-3 leading-relaxed">
          Цены без НДС. Скидка 5% от 50 000 ₽, 10% от 100 000 ₽.
        </p>

        {/* CTA */}
        <a href="tel:+74951234567" className="btn-primary w-full h-10 text-sm mt-4 mb-1">
          <Phone className="w-4 h-4" />
          Уточнить цену
        </a>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [showAllCalcs, setShowAllCalcs] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  const activeProduct = productDetails.find((p) => p.id === activeId);

  // Flatten categoryRows for lookup
  const allCategories = categoryRows.flat();

  return (
    <section
      id="categories"
      className="texture-bg h-[calc(100dvh-64px)] min-h-[500px] px-3 sm:px-5 lg:px-6 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto h-full flex flex-col py-2 lg:py-3">
        {/* Header */}
        <div className="shrink-0 mb-3">
          <h1 className="text-fsz-text font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
            Всё для строительства и ремонта
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row gap-5 min-h-0">
          {/* ─── Left Column ─── */}
          <div className="flex-1 lg:flex-[0_0_70%] min-h-0 overflow-y-auto pr-1">
            <AnimatePresence mode="wait">
              {activeProduct ? (
                <CategoryDetail
                  key="detail"
                  product={activeProduct}
                  onBack={() => setActiveId(null)}
                />
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-4 gap-3 lg:gap-3.5"
                >
                  {allCategories.map((cat, idx) => (
                    <CategoryCard
                      key={cat.id}
                      cat={cat}
                      idx={idx}
                      onClick={() => setActiveId(cat.id)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ─── Right Column: Calculator + Banner ─── */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-3 lg:flex-[0_0_28%] shrink-0 lg:min-h-0 lg:overflow-y-auto">
            {/* Calculator */}
            <div className="bg-fsz-surface border border-fsz-border rounded-xl p-5 lg:p-6 shadow-card flex-1 lg:flex-none">
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Calculator className="w-4 h-4 text-fsz-primary" />
                  <h2 className="text-fsz-text font-semibold text-sm">
                    Строительный калькулятор
                  </h2>
                </div>
                <p className="text-fsz-text-light text-[11px]">
                  Рассчитайте материалы за 2 минуты
                </p>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
                {visibleCalculators.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <a
                      key={calc.id}
                      href="#"
                      className="calc-item-hover flex flex-col items-center gap-1.5 bg-fsz-card border border-fsz-border rounded-lg p-2.5 lg:p-3 text-center"
                    >
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-fsz-primary shrink-0" />
                      <span className="text-fsz-text text-[10px] lg:text-[11px] leading-tight font-medium">
                        {calc.label}
                      </span>
                    </a>
                  );
                })}

                <AnimatePresence>
                  {showAllCalcs &&
                    extraCalculators.map((calc, idx) => {
                      const Icon = calc.icon;
                      return (
                        <motion.a
                          key={calc.id}
                          href="#"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ delay: idx * 0.05, duration: 0.2 }}
                          className="calc-item-hover flex flex-col items-center gap-1.5 bg-fsz-card border border-fsz-border rounded-lg p-2.5 lg:p-3 text-center"
                        >
                          <Icon className="w-5 h-5 text-fsz-primary shrink-0" />
                          <span className="text-fsz-text text-[10px] leading-tight font-medium">
                            {calc.label}
                          </span>
                        </motion.a>
                      );
                    })}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setShowAllCalcs(!showAllCalcs)}
                className="btn-primary w-full mt-3 h-9 text-xs"
              >
                {showAllCalcs ? (
                  <><ChevronUp className="w-3.5 h-3.5" />Свернуть</>
                ) : (
                  <><Eye className="w-3.5 h-3.5" />Смотреть все</>
                )}
              </button>
            </div>

            {/* Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="rounded-xl overflow-hidden shrink-0 lg:shrink-0 w-[45%] lg:w-auto"
              style={{ background: 'linear-gradient(135deg, #1a1d24 0%, #2d3340 100%)' }}
            >
              <div className="p-5 flex flex-col gap-3 h-full justify-between">
                <h3 className="text-fsz-surface font-bold text-base leading-snug">
                  Скидка до 30% на комплексные заказы
                </h3>
                <a href="#contacts" className="btn-primary w-full text-xs h-10">
                  <Phone className="w-4 h-4" />
                  Оставить заявку
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
