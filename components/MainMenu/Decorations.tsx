'use client';
import { useEffect, useState } from 'react';
import themes from '../../static/themes';
import fonts from '@/static/fonts';
import clsx from 'clsx';

// List of kanji characters (common ones)
const kanjiList = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '日',
  '月',
  '火',
  '水',
  '木',
  '金',
  '土',
  '人',
  '子',
  '女',
  '山',
  '川',
  '田',
  '空',
  '気',
  '生',
  '年',
  '大',
  '中',
  '小',
  '学',
  '校',
  '先',
  '生',
  '本',
  '友',
  '間',
  '上',
  '下',
  '左',
  '右',
  '見',
  '行',
  '食',
  '飲',
  '読',
  '書',
  '話',
  '聞',
  '来',
];

// Tailwind animations
const animations = [
  'animate-pulse',
  //   'animate-bounce',
  //   'animate-ping',
  //   'animate-spin',
];

// Get all available main colors from themes
const getAllMainColors = () => {
  const colors = new Set<string>();
  themes.forEach(themeGroup => {
    themeGroup.themes.forEach(theme => {
      colors.add(theme.mainColor);
      if (theme.secondaryColor) colors.add(theme.secondaryColor);
    });
  });
  return Array.from(colors);
};

const allMainColors = getAllMainColors();

// Component to render a single kanji character with random styles
const KanjiCharacter = ({ char }: { char: string }) => {
  const [mounted, setMounted] = useState(false);
  const [styles, setStyles] = useState({
    color: '',
    fontClass: '',
    animation: '',
  });

  useEffect(() => {
    // Generate random styles on mount
    const randomColor =
      allMainColors[Math.floor(Math.random() * allMainColors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];

    setStyles({
      color: randomColor,
      fontClass: randomFont.font.className,
      animation: randomAnimation,
    });
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <span
      className={`text-4xl md:text-5xl lg:text-6xl m-1 transition-all duration-1000 ${styles.fontClass} ${styles.animation}`}
      style={{ color: styles.color }}
      aria-hidden="true"
    >
      {char}
    </span>
  );
};

const Decorations = () => {
  const shuffledKanjiList = kanjiList.sort(() => Math.random() - 0.5);

  return (
    <div
      className={clsx(
        'fixed inset-0 overflow-hidden pointer-events-none opacity-50'
      )}
    >
      <div className="grid grid-cols-10 gap-1 p-4 h-full w-full">
        {shuffledKanjiList.map((char, index) => (
          <div
            key={index}
            className="flex items-center justify-center "
          >
            <KanjiCharacter char={char} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decorations;
