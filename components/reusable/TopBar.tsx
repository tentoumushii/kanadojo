'use client';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import useThemeStore from '@/store/useThemeStore';
import GameModes from './GameModes';
import { useClick } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import { ChevronUp, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface ITopBarProps {
  showGameModes: boolean;
  setShowGameModes: React.Dispatch<React.SetStateAction<boolean>>;
  isSmallScreen: boolean;
  currentDojo: string;
  setSelectedGameMode: (mode: string) => void;
}

const TopBar: React.FC<ITopBarProps> = ({
  showGameModes,
  setShowGameModes,
  isSmallScreen,
  currentDojo,
  setSelectedGameMode
}) => {
  const hotkeysOn = useThemeStore(state => state.hotkeysOn);

  const pathname = usePathname();

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

  const kanaGroupIndices = useKanaKanjiStore(state => state.kanaGroupIndices);
  const selectedKanjiObjs = useKanaKanjiStore(state => state.selectedKanjiObjs);
  const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);

  const isFilled =
    currentDojo === 'kana'
      ? kanaGroupIndices.length !== 0
      : currentDojo === 'kanji'
      ? selectedKanjiObjs.length >= 3
      : currentDojo === 'vocabulary'
      ? selectedWordObjs.length >= 3
      : false;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [focus, setFocus] = useState('');

  useEffect(() => {
    if (!hotkeysOn) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        buttonRef.current?.click();
      } else if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeysOn]);

  return (
    <div className={clsx('flex flex-col gap-4 sm:flex sm:flex-row sm:gap-4')}>
      <Link
        href='/preferences'
        className={clsx(
          'sm:w-1/3 text-2xl p-2 flex flex-row justify-center items-center gap-1.5',
          buttonBorderStyles
          ,'group'
        )}
        onClick={() => playClick()}
      >
        <button className='flex flex-row gap-1.5 items-center py-2'>
          <Settings className='animate-bounce' />
          <span className='group-hover:underline'>Preferences</span>
        </button>
      </Link>
      <button
        className={clsx(
          'text-2xl sm:w-1/3 p-2 flex flex-row justify-center items-center gap-1',
          buttonBorderStyles
        )}
        onClick={e => {
          playClick();
          e.currentTarget.blur();
          setShowGameModes(showGameModes => !showGameModes);
        }}
        onMouseEnter={() => setFocus('gameModes')}
        onMouseLeave={() => setFocus('')}
      >
        <ChevronUp
          className={clsx(
            'duration-250',
            focus === 'gameModes'
              ? 'text-[var(--text-color)]'
              : 'text-[var(--border-color)]',
            !showGameModes && 'rotate-180'
          )}
          size={24}
        />
        <span className='py-2'>
          Training Mode:{' '}
          {selectedGameMode ? selectedGameMode.split('-').join(' ') : 'not set'}
        </span>
      </button>
      {isSmallScreen && showGameModes && (
        <GameModes
          currentDojo={currentDojo}
          setSelectedGameMode={setSelectedGameMode}
        />
      )}
      <Link href={`${pathname}/train/${selectedGameMode}`} className='sm:w-1/3 group'>
        <button
          disabled={!selectedGameMode || !isFilled}
          ref={buttonRef}
          className={clsx(
            'w-full h-full text-2xl px-2 flex flex-row justify-center items-center gap-1 py-4',
            buttonBorderStyles,
            'text-[var(--border-color)]',
            selectedGameMode &&
              isFilled &&
              'text-[var(--main-color)]'
          )}
          onClick={e => {
            e.currentTarget.blur();
            playClick();
          }}
        >
          <span className='group-hover:underline'>Go!</span>
          <span className='inline text-base'>{'\u23CE'}</span>
        </button>
      </Link>
    </div>
  );
};

export default TopBar;
