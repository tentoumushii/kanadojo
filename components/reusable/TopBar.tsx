'use client';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import useThemeStore from '@/store/useThemeStore';
import { useClick } from '@/lib/useAudio';
// import { buttonBorderStyles } from '@/static/styles';
import { ChevronUp, Play } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface ITopBarProps {
  showGameModes: boolean;
  setShowGameModes: React.Dispatch<React.SetStateAction<boolean>>;
  currentDojo: string;
}

const TopBar: React.FC<ITopBarProps> = ({
  showGameModes,
  setShowGameModes,
  currentDojo
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
    <div
      className={clsx(
        'flex flex-row',
        'rounded-2xl bg-[var(--card-color)]',
        'duration-250',
        'transition-all ease-in-out',
        'w-full',
        // 'border-b-4 border-[var(--border-color)]'
      )}
    >
      <button
        className={clsx(
          'text-2xl w-1/2 p-2 flex flex-row justify-center items-center gap-1',
          'h-full',
          'hover:cursor-pointer',
          'text-[var(--secondary-color)] hover:text-[var(--main-color)]',
          'hover:bg-[var(--border-color)] rounded-tl-2xl rounded-bl-2xl',
          'duration-250'
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

      <div
        className={clsx(
          'border-l-1 h-auto w-0',
          'border-[var(--border-color)]'
        )}
      />

      <Link
        href={`${pathname}/train/${selectedGameMode}`}
        className='w-1/2 group'
      >
        <button
          disabled={!selectedGameMode || !isFilled}
          ref={buttonRef}
          className={clsx(
            'w-full h-full text-2xl px-2 flex flex-row justify-center items-center gap-1 py-4',
            'text-[var(--border-color)]',
            selectedGameMode &&
              isFilled &&
              'text-[var(--secondary-color)] hover:text-[var(--main-color)] hover:bg-[var(--border-color)] hover:cursor-pointer',
            'text-[var(--border-color)]',
            'rounded-tr-2xl rounded-br-2xl',
            'duration-250'
          )}
          onClick={e => {
            e.currentTarget.blur();
            playClick();
          }}
        >
          {/* <span className='group-hover:underline'>Go!</span> */}
          <Play
            // className={clsx(selectedGameMode && isFilled && 'animate-pulse')}
            size={32}
          />
        </button>
      </Link>
    </div>
  );
};

export default TopBar;
