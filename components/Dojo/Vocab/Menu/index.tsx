'use client';
import { useState, useEffect } from 'react';
import TopBar from '@/components/reusable/TopBar';
import Banner from '@/components/reusable/Banner';
import Info from '@/components/reusable/Info';
import GameModes from '@/components/reusable/GameModes';
import WordClass from './WordClass';
import useVocabStore from '@/store/useVocabStore';
import CollectionSelector from '@/components/reusable/CollectionSelector';

const WordsMenu = () => {
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
      <Banner subheading={`Vocabulary 語彙`} />
      <TopBar
        showGameModes={showGameModes}
        setShowGameModes={setShowGameModes}
        currentDojo='vocabulary'
      />
      {showGameModes && (
        <GameModes
          currentDojo='vocab'
          setSelectedGameMode={setSelectedGameMode}
        />
      )}
      <CollectionSelector />
      <Info currentDojo='vocabularyMenu' />
      <WordClass />
    </div>
  );
};

export default WordsMenu;
