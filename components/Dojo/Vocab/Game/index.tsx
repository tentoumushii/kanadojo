'use client';
import {  useEffect } from 'react';
import Return from '@/components/reusable/ReturnFromGame';
import Pick from './Pick';
import ReversePick from './ReversePick';
import Input from './Input';
import ReverseInput from './ReverseInput';
import useVocabStore from '@/store/useVocabStore';
import useStatsStore from '@/store/useStatsStore';
import Stats from '@/components/reusable/Stats';
import { usePathname } from 'next/navigation';

const Game = () => {

  const pathname = usePathname().split('/').slice(0, -2).join('/');

  const showStats = useStatsStore(state => state.showStats);

  const resetStats = useStatsStore(state => state.resetStats);

  const gameMode = useVocabStore(state => state.selectedGameModeVocab);
  const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);

  useEffect(() => {
    resetStats();
  }, []);

  return (
    <div className='flex flex-col gap-6 md:gap-10 items-center min-h-[100dvh] max-w-[100dvw] px-4'>
      {showStats && <Stats />}
      <Return isHidden={showStats} href={pathname} />
      {gameMode.toLowerCase() === 'pick' ? (
        <Pick selectedWordObjs={selectedWordObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-pick' ? (
        <ReversePick selectedWordObjs={selectedWordObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'input' ? (
        <Input selectedWordObjs={selectedWordObjs} isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-input' ? (
        <ReverseInput
          selectedWordObjs={selectedWordObjs}
          isHidden={showStats}
        />
      ) : null}
    </div>
  );
};

export default Game;
