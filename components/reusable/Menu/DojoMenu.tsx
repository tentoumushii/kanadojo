'use client';
import clsx from 'clsx';
import TopBar from '@/components/reusable/Menu/TopBar';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/reusable/Menu/Sidebar';
import Info from '@/components/reusable/Menu/Info';
import GameModes from '@/components/reusable/Menu/GameModes';
import KanaCards from '@/components/Dojo/Kana/KanaCards';
import Banner from '@/components/reusable/Menu/Banner';
import CollectionSelector from '@/components/reusable/Menu/CollectionSelector';
import Subgroup from '@/components/Dojo/Kanji';
import { usePathname } from 'next/navigation';
import WordClass from '@/components/Dojo/Vocab';

const DojoMenu = () => {
  const pathname = usePathname();

  const [showGameModes, setShowGameModes] = useState(false);


  useEffect(() => {
    // clearKanji();
    // clearWords();
  }, []);

  return (
    <div className="min-h-[100dvh] max-w-[100dvw] lg:pl-2 lg:pr-20 flex gap-4">
      <Sidebar />
      <div
        className={clsx(
          'border-l-2 h-auto w-0',
          'border-[var(--border-color)]',
          'max-lg:hidden'
        )}
      />
      <div
        className={clsx(
          'flex flex-col gap-4',
          'w-full lg:w-4/5 lg:px-0 px-4 md:px-8 ',
          'pb-20'
        )}
      >
        <Banner />

        <Info />
        {(pathname === '/kanji' || pathname === '/vocabulary') && (
          <CollectionSelector />
        )}
        <TopBar
          showGameModes={showGameModes}
          setShowGameModes={setShowGameModes}
          currentDojo="kana"
        />
        {showGameModes && <GameModes />}

        {pathname === '/kana' ? (
          <KanaCards />
        ) : pathname === '/kanji' ? (
          <Subgroup />
        ) : pathname === '/vocabulary' ? (
          <WordClass />
        ) : null}
      </div>
    </div>
  );
};

export default DojoMenu;
