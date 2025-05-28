'use client';
import { useState, useEffect } from 'react';
import TopBar from '@/components/reusable/TopBar';
import Banner from '@/components/reusable/Banner';
import Info from '@/components/reusable/Info';
import GameModes from '@/components/reusable/GameModes';
import WordClass from './WordClass';
import { useMediaQuery } from 'react-responsive';
import useVocabStore from '@/store/useVocabStore';
import { IWordClass } from '@/lib/interfaces';

const WordsMenu = ({ group, subgroup, wordClass }: IWordClass) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const [showGameModes, setShowGameModes] = useState(false);

  const setSelectedGameMode = useVocabStore(
    state => state.setSelectedGameModeVocab
  );

  const clearWords = useVocabStore(state => state.clearWordObjs);

  useEffect(() => {
    clearWords();
  }, []);

  return (
    <div className='flex flex-col gap-4 min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-60 pb-20'>
      <Banner
        subheading={`Vocabulary 語彙, ${group.toUpperCase()} ${subgroup.toUpperCase()}, ${wordClass.toUpperCase()}`}
      />
      <TopBar
        showGameModes={showGameModes}
        setShowGameModes={setShowGameModes}
        isSmallScreen={isSmallScreen}
        currentDojo='vocabulary'
        setSelectedGameMode={setSelectedGameMode}
      />
      {!isSmallScreen && showGameModes && (
        <GameModes
          currentDojo='vocab'
          setSelectedGameMode={setSelectedGameMode}
        />
      )}
      <Info currentDojo='vocabularyMenu' />
      <WordClass group={group} subgroup={subgroup} wordClass={wordClass} />
    </div>
  );
};

export default WordsMenu;
