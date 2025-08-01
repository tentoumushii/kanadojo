'use client';
import { useEffect, useState } from 'react';
import themes from '../../static/themes';
import fonts from '@/static/fonts';
import clsx from 'clsx';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';

const kanjiList = [
  ...N5Kanji.map(kanji => kanji.kanjiChar),
  ...N4Kanji.map(kanji => kanji.kanjiChar),
  ...N3Kanji.map(kanji => kanji.kanjiChar),
];

const shuffledKanjiList = kanjiList.sort(() => Math.random() - 0.5);

// Tailwind animations
const animations = [
  'motion-safe:animate-pulse',
  // 'animate-bounce',
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
      className={`text-4xl transition-all duration-1000 ${styles.fontClass} ${styles.animation}`}
      aria-hidden="true"
      style={{
        color: styles.color,
        animationDelay: `${Math.random() * 1000}ms`,
      }}
    >
      {char}
    </span>
  );
};

const Decorations = () => {
  return (
    <div
      className={clsx(
        'fixed inset-0 overflow-hidden pointer-events-none opacity-25'
      )}
    >
      <div className="grid grid-cols-28 gap-0.5 p-2 h-full w-full">
        {shuffledKanjiList.map((char, index) => (
          <KanjiCharacter
            char={char}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Decorations;
