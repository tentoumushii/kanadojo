'use client';
import { useState, useEffect } from 'react';
import TopBar from '@/components/reusable/TopBar';
import Banner from '@/components/reusable/Banner';
import Info from '@/components/reusable/Info';
import GameModes from '@/components/reusable/GameModes';
import Subgroup from './Subgroup';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';

const KanjiMenu = () => {
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
      <Banner subheading='Kanji 漢字' />
      <TopBar
        showGameModes={showGameModes}
        setShowGameModes={setShowGameModes}
        currentDojo='kanji'
      />
      {showGameModes && (
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
