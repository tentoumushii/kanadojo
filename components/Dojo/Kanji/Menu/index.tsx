'use client';
import { useState, useEffect } from 'react';
import TopBar from '@/components/reusable/TopBar';
import Banner from '@/components/reusable/Banner';
import Info from '@/components/reusable/Info';
import GameModes from '@/components/reusable/GameModes';
import Subgroup from './Subgroup';
import { useMediaQuery } from 'react-responsive';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import { usePathname } from 'next/navigation';

const KanjiMenu = () => {
  const pathname = usePathname();

  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const [showGameModes, setShowGameModes] = useState(false);

  const setSelectedGameMode = useKanaKanjiStore(
    state => state.setSelectedGameModeKanji
  );

  const clearKanji = useKanaKanjiStore(state => state.clearKanjiObjs);

  useEffect(() => {
    clearKanji();
  }, []);

  return (
    <div className='flex flex-col gap-4 min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-60 pb-20'>
      <Banner
        subheading={`Kanji 漢字, ${pathname
          .split('/')
          .slice(-2)
          .join(' ')
          .toUpperCase()}`}
      />
      <TopBar
        showGameModes={showGameModes}
        setShowGameModes={setShowGameModes}
        isSmallScreen={isSmallScreen}
        currentDojo='kanji'
        setSelectedGameMode={setSelectedGameMode}
      />
      {!isSmallScreen && showGameModes && (
        <GameModes
          currentDojo='kanji'
          setSelectedGameMode={setSelectedGameMode}
        />
      )}
      <Info currentDojo='kanjiMenu' />
      <Subgroup />
    </div>
  );
};

export default KanjiMenu;
