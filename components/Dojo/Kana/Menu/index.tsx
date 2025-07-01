'use client';
import clsx from 'clsx';
import TopBar from '@/components/reusable/TopBar';
import { useState } from 'react';
import Banner from '@/components/reusable/Banner';
import Info from '@/components/reusable/Info';
import GameModes from '@/components/reusable/GameModes';
import KanaCards from './KanaCards';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';

const KanaMenu = () => {
  const [showGameModes, setShowGameModes] = useState(false);

  const setSelectedGameMode = useKanaKanjiStore(
    state => state.setSelectedGameModeKana
  );

  return (
    <div className='min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 lg:px-30 xl:px-60 2xl:px-80 pb-20'>
      <div className={clsx('flex flex-col gap-4')}>
        <Banner subheading='Kana かな' />
        <TopBar
          showGameModes={showGameModes}
          setShowGameModes={setShowGameModes}
          currentDojo='kana'
        />
        {showGameModes && (
          <GameModes
            currentDojo='kana'
            setSelectedGameMode={setSelectedGameMode}
          />
        )}
        <Info currentDojo='kanaMenu' />
        <KanaCards />
      </div>
    </div>
  );
};

export default KanaMenu;
