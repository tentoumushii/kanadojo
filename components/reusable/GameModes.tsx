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

  const gameModes = ['Pick', 'Reverse-Pick', 'Input', 'Reverse-Input'];

  return (
    <fieldset
      className={clsx(
        'rounded-2xl bg-[var(--card-color)]',
        'duration-250',
        'transition-all ease-in-out',
        'flex flex-col md:flex-row',
        'w-full ',
      )}
    >
      {gameModes.map((gameMode, i) => (
        <>
          <label
            key={gameMode}
            className={clsx(
              'flex justify-center items-center',
              'text-[var(--secondary-color)] hover:text-[var(--main-color)]',
              'w-full py-2',
              'hover:cursor-pointer',
              'hover:bg-[var(--border-color)]',
              i === 0 && 'rounded-tl-2xl rounded-bl-2xl',
              i === gameModes.length - 1 && 'rounded-tr-2xl rounded-br-2xl',
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
              {gameMode.toLowerCase() === 'pick' && (
                <MousePointerClick size={20} className='mt-1' />
              )}
              {gameMode.toLowerCase() === 'reverse-pick' && (
                <MousePointerClick
                  size={20}
                  className='mt-1 scale-x-[-1]'
                />
              )}
              {gameMode.toLowerCase() === 'input' && (
                <Keyboard size={20} className='mt-1' />
              )}
              {gameMode.toLowerCase() === 'reverse-input' && (
                <Keyboard size={20} className='mt-1 scale-y-[-1]' />
              )}
            </span>
          </label>

          {i < gameModes.length - 1 && (
            <div
              className={clsx(
                'md:border-l-1 md:h-auto md:w-0',
                'border-[var(--border-color)]',
                'border-t-1 w-full border-[var(--border-color)]'
              )}
            />
          )}
        </>
      ))}
    </fieldset>
  );
};

export default GameModes;
