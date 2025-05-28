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

const random = new Random();

const Input = ({ isHidden }: { isHidden: boolean }) => {
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
    selectedKana.map((key, i) => [key, selectedRomaji[i]])
  );

  const [correctKanaChar, setCorrectKanaChar] = useState(
    selectedKana[random.integer(0, selectedKana.length - 1)]
  );

  const correctRomajiChar = selectedPairs[correctKanaChar];

  const [feedback, setFeedback] = useState(<>{'feeback ~'}</>);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Automatically focuses on the input
    }
  }, []);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
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
            if (inputValue.trim().toLowerCase() === correctRomajiChar) {
              speedStopwatch.pause();
              addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
              speedStopwatch.reset();
              playCorrect();
              addCharacterToHistory(correctKanaChar);
              incrementCharacterScore(correctKanaChar, 'correct');
              incrementCorrectAnswers();

              setInputValue('');
              let newRandomKana =
                selectedKana[random.integer(0, selectedKana.length - 1)];
              while (newRandomKana === correctKanaChar) {
                newRandomKana =
                  selectedKana[random.integer(0, selectedKana.length - 1)];
              }
              setCorrectKanaChar(newRandomKana);
              setFeedback(
                <>
                  <span>
                    {`correct! ${correctKanaChar} = ${correctRomajiChar} `}
                  </span>
                  <CircleCheck className='inline' />
                </>
              );
            } else {
              setInputValue('');
              setFeedback(
                <>
                  <span>
                    {`incorrect! ${correctKanaChar} ≠ ${inputValue} `}
                  </span>
                  <CircleX className='inline' />
                </>
              );
              playErrorTwice();

              incrementCharacterScore(correctKanaChar, 'wrong');
              incrementWrongAnswers();
            }
          }
        }
    
        const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
          playClick();
          e.currentTarget.blur();
          setInputValue('');
          let newRandomKana =
            selectedKana[random.integer(0, selectedKana.length - 1)];
          while (newRandomKana === correctKanaChar) {
            newRandomKana =
              selectedKana[random.integer(0, selectedKana.length - 1)];
          }
          setCorrectKanaChar(newRandomKana);
          setFeedback(
            <>{`skipped ~ ${correctKanaChar} = ${correctRomajiChar}`}</>
          );
        }

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel feedback={feedback} gameMode='input' />
      <p className='text-8xl sm:text-9xl font-medium'>{correctKanaChar}</p>
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
          'text-xl font-medium  py-4 px-16 rounded-3xl transform transition duration-150 hover:scale-105 hover:cursor-pointer ',
          'flex flex-row items-end gap-2',
          buttonBorderStyles,
          'active:scale-95 md:active:scale-98 active:duration-200',
        )}
        onClick={handleSkip}
      >
        <span>skip</span>
        <CircleArrowRight />
      </button>
    </div>
  );
};

export default Input;
