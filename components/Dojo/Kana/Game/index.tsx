'use client';
import clsx from 'clsx';
import { useEffect } from 'react';
import Return from '@/components/reusable/ReturnFromGame';
import Pick from './Pick';
import ReversePick from './ReversePick';
import Input from './Input';
import ReverseInput from './ReverseInput';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useStatsStore from '@/store/useStatsStore';
import Stats from '@/components/reusable/Stats';

const Game = () => {
  const showStats = useStatsStore(state => state.showStats);

  const resetStats = useStatsStore(state => state.resetStats);

  const gameMode = useKanaKanjiStore(state => state.selectedGameModeKana);

  useEffect(() => {
    resetStats();
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-col gap-10 items-center min-h-[100dvh] max-w-[100dvw] px-4',
        // "bg-[url('/wallpapers/neonretrocarcity.jpg')] bg-cover bg-center"
      )}
    >
      {showStats && <Stats />}
      <Return isHidden={showStats} href='/kana' />
      {gameMode.toLowerCase() === 'pick' ? (
        <Pick isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-pick' ? (
        <ReversePick isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'input' ? (
        <Input isHidden={showStats} />
      ) : gameMode.toLowerCase() === 'reverse-input' ? (
        <ReverseInput isHidden={showStats} />
      ) : null}
    </div>
  );
};

export default Game;
