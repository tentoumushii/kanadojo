'use client';
import { useState, useEffect, useRef } from 'react';
import { kana } from '@/static/kana';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import { CircleCheck, CircleX, CircleArrowRight } from 'lucide-react';
import { Random } from 'random-js';
import clsx from 'clsx';
import { useClick, useCorrect, useError } from '@/lib/useAudio';
import GameIntel from '@/components/reusable/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/useStats';
import ProgressBar from '@/components/reusable/ProgressBar';
import useStatsStore from '@/store/useStatsStore';

const random = new Random();

const Input = ({ isHidden }: { isHidden: boolean }) => {
  const score = useStatsStore(state => state.score);
  const setScore = useStatsStore(state => state.setScore);

  const speedStopwatch = useStopwatch({ autoStart: false });

  const {
    incrementCorrectAnswers,
    incrementWrongAnswers,
    addCharacterToHistory,
    addCorrectAnswerTime,
    incrementCharacterScore
  } = useStats();

  const { playClick } = useClick();
  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState('');

  const kanaGroupIndices = useKanaKanjiStore(state => state.kanaGroupIndices);

  const selectedKana = kanaGroupIndices.map(i => kana[i].kana).flat();
  const selectedRomaji = kanaGroupIndices.map(i => kana[i].romanji).flat();

  const selectedPairs = Object.fromEntries(
    selectedRomaji.map((key, i) => [key, selectedKana[i]])
  );

  const [correctRomajiChar, setCorrectRomajiChar] = useState(
    selectedRomaji[random.integer(0, selectedRomaji.length - 1)]
  );

  const correctKanaChar = selectedPairs[correctRomajiChar];

  const [feedback, setFeedback] = useState(<>{'feeback ~'}</>);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Automatically focuses on the input
    }
  }, []);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setScore(0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        buttonRef.current?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputValue.trim() === correctKanaChar) {
        speedStopwatch.pause();
        addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
        speedStopwatch.reset();
        playCorrect();
        addCharacterToHistory(correctRomajiChar);
        incrementCharacterScore(correctRomajiChar, 'correct');
        incrementCorrectAnswers();
        setScore(score + 1);

        setInputValue('');
        let newRandomRomaji =
          selectedRomaji[random.integer(0, selectedRomaji.length - 1)];
        while (newRandomRomaji === correctRomajiChar) {
          newRandomRomaji =
            selectedRomaji[random.integer(0, selectedRomaji.length - 1)];
        }
        setCorrectRomajiChar(newRandomRomaji);
        setFeedback(
          <>
            <span>{`correct! ${correctRomajiChar} = ${correctKanaChar} `}</span>
            <CircleCheck className='inline' />
          </>
        );
      } else {
        setInputValue('');
        setFeedback(
          <>
            <span>{`incorrect! ${correctRomajiChar} ≠ ${inputValue} `}</span>
            <CircleX className='inline' />
          </>
        );
        playErrorTwice();

        incrementCharacterScore(correctRomajiChar, 'wrong');
        incrementWrongAnswers();
        if (score - 1 < 0) {
          setScore(0);
        } else {
          setScore(score - 1);
        }
      }
    }
  };

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick();
    e.currentTarget.blur();
    setInputValue('');
    let newRandomRomaji =
      selectedRomaji[random.integer(0, selectedRomaji.length - 1)];
    while (newRandomRomaji === correctRomajiChar) {
      newRandomRomaji =
        selectedRomaji[random.integer(0, selectedRomaji.length - 1)];
    }
    setCorrectRomajiChar(newRandomRomaji);
    setFeedback(<>{`skipped ~ ${correctRomajiChar} = ${correctKanaChar}`}</>);
  };

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel feedback={feedback} gameMode='reverse input' />
      <p className='text-8xl sm:text-9xl font-medium'>{correctRomajiChar}</p>
      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        className='border-b-2 pb-1 text-center border-gray-600 focus:outline-none focus:border-gray-400 text-2xl lg:text-5xl'
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button
        ref={buttonRef}
        className={clsx(
          'text-xl font-medium py-4 px-16 rounded-3xl hover:scale-105',
          'flex flex-row items-end gap-2',
          buttonBorderStyles,
          'border-b-4 border-[var(--border-color)] hover:border-[var(--secondary-color)]',
          'active:scale-95 md:active:scale-98 active:duration-200'
        )}
        onClick={handleSkip}
      >
        <span>skip</span>
        <CircleArrowRight />
      </button>

      <ProgressBar />
    </div>
  );
};

export default Input;
