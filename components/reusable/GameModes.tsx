'use client';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import { MousePointerClick, Keyboard } from 'lucide-react';
import clsx from 'clsx';
import { useClick } from '@/lib/useAudio';

const GameModes = ({
  currentDojo,
  setSelectedGameMode
}: {
  currentDojo: string;
  setSelectedGameMode: (mode: string) => void;
}) => {
  const { playClick } = useClick();

  let selectedGameMode = useKanaKanjiStore(state =>
    currentDojo === 'kana'
      ? state.selectedGameModeKana
      : currentDojo === 'kanji'
      ? state.selectedGameModeKanji
      : ''
  );

  const selectedGameModeVocab = useVocabStore(
    state => state.selectedGameModeVocab
  );

  if (currentDojo === 'vocabulary') {
    selectedGameMode = selectedGameModeVocab;
  }

  const gameModes = ['pick', 'reverse-pick', 'input', 'reverse-input'];

  return (
    <fieldset
      className={clsx(
        'flex flex-row ',
        'rounded-xl bg-[var(--card-color)]',
        'duration-250',
        'transition-all ease-in-out',
        'flex flex-row',
        'w-full ',
        'border-b-4 border-[var(--border-color)]'
      )}
    >
      {gameModes.map((gameMode, i) => (
        <>
          <label
            key={gameMode}
            className={clsx(
              'sm:w-1/4 flex flex-row justify-center items-center',
              'text-[var(--secondary-color)] hover:text-[var(--main-color)]',
              'w-full h-full py-2',
              'hover:cursor-pointer',
              'hover:bg-[var(--border-color)]',
              i === 0 && 'rounded-tl-xl rounded-bl-lg',
              i === gameModes.length - 1 && 'rounded-tr-xl rounded-br-lg',
              'duration-250'
            )}
            onClick={() => playClick()}
          >
            <input
              type='radio'
              name='selectedGameMode'
              onChange={() => setSelectedGameMode(gameMode)}
              className='hidden'
            />
            <span className='text-lg font-medium py-2 px-1 sm:px-2 text-center flex flex-row justify-center items-center gap-1.5'>
              {gameMode === selectedGameMode ? '\u2B24 ' : ''}
              {gameMode.split('-').join(' ')}
            </span>
            {gameMode === 'pick' && (
              <MousePointerClick size={20} className='mt-0 md:mt-1' />
            )}
            {gameMode === 'reverse-pick' && (
              <MousePointerClick
                size={20}
                className='mt-0 md:mt-1 scale-x-[-1]'
              />
            )}
            {gameMode === 'input' && (
              <Keyboard size={20} className='mt-0 md:mt-1' />
            )}
            {gameMode === 'reverse-input' && (
              <Keyboard size={20} className='mt-0 md:mt-1 scale-y-[-1]' />
            )}
          </label>

          {i < gameModes.length - 1 && (
            <div
              className={clsx(
                'border-l-1 h-auto w-0',
                'border-[var(--border-color)]'
              )}
            />
          )}
        </>
      ))}
    </fieldset>
  );
};

export default GameModes;
