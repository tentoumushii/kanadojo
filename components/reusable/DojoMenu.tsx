'use client';
import clsx from 'clsx';
import TopBar from '@/components/reusable/TopBar';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/reusable/Sidebar';
import Info from '@/components/reusable/Info';
import GameModes from '@/components/reusable/GameModes';
import KanaCards from '@/components/Dojo/Kana/KanaCards';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import Banner from '@/components/reusable/Banner';
import CollectionSelector from '@/components/reusable/CollectionSelector';
import Subgroup from '@/components/Dojo/Kanji/Subgroup';
import { usePathname } from 'next/navigation';
import WordClass from '@/components/Dojo/Vocab/WordClass';
import useVocabStore from '@/store/useVocabStore';

const DojoMenu = () => {
  const pathname = usePathname();

  const [showGameModes, setShowGameModes] = useState(false);

  const clearKanji = useKanaKanjiStore(state => state.clearKanjiObjs);

  const clearWords = useVocabStore(state => state.clearWordObjs);

  useEffect(() => {
    clearKanji();
    clearWords();
  }, []);

  return (
    <div className='min-h-[100dvh] max-w-[100dvw] lg:pl-2 lg:pr-20 flex gap-4'>
      <Sidebar />
      <div
        className={clsx(
          'border-l-2 h-auto w-0',
          'border-[var(--border-color)]',
          'max-lg:hidden'
        )}
      />
      <div className={clsx('flex flex-col gap-4', 'w-full lg:w-4/5 lg:px-0 px-4 md:px-8 ', 'pb-20')}>
        <Banner />
        <TopBar
          showGameModes={showGameModes}
          setShowGameModes={setShowGameModes}
          currentDojo='kana'
        />
        {showGameModes && <GameModes />}
        {(pathname === '/kanji' || pathname === '/vocabulary') && (
          <CollectionSelector />
        )}
        <Info />
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
