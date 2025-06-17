'use client';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import { MousePointerClick, Keyboard } from 'lucide-react';
import clsx from 'clsx';
import { useClick } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';

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
    <fieldset className='grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:justify-evenly sm:gap-4'>
      {gameModes.map(gameMode => (
        <label
          key={gameMode}
          className={clsx(
            'sm:w-1/4 flex flex-row justify-center items-center',
            buttonBorderStyles,
            'border-b-2 border-[var(--border-color)] hover:border-[var(--secondary-color)]',
            'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
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
      ))}
    </fieldset>
  );
};

export default GameModes;
