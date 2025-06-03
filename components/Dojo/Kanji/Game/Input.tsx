'use client';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX, CircleArrowRight } from 'lucide-react';
import { Random } from 'random-js';
import clsx from 'clsx';
import { IKanjiObj } from '@/store/useKanaKanjiStore';
import { useClick, useCorrect, useError } from '@/lib/useAudio';
import GameIntel from '@/components/reusable/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/useStats';

const random = new Random();

const Input = ({
  selectedKanjiObjs,
  isHidden
}: {
  selectedKanjiObjs: IKanjiObj[];
  isHidden: boolean;
}) => {
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

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [correctKanjiChar, setCorrectKanjiChar] = useState(
    selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)].kanjiChar
  );

  const correctMeanings = selectedKanjiObjs.find(
    obj => obj.kanjiChar === correctKanjiChar
  )?.meanings as string[];

  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Automatically focuses on the input
    }
  }, []);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.ctrlKey && event.code === 'Space') {
  //       buttonRef.current?.click();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  useEffect(() => {
    if (isHidden) speedStopwatch.pause();
  }, [isHidden]);


  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            if (correctMeanings.includes(inputValue.trim().toLowerCase())) {
              speedStopwatch.pause();
              addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
              speedStopwatch.reset();
              playCorrect();
              addCharacterToHistory(correctKanjiChar);
              incrementCharacterScore(correctKanjiChar, 'correct');
              incrementCorrectAnswers();

              setInputValue('');
              let newRandomKanjiChar =
                selectedKanjiObjs[
                  random.integer(0, selectedKanjiObjs.length - 1)
                ].kanjiChar;
              while (newRandomKanjiChar === correctKanjiChar) {
                newRandomKanjiChar =
                  selectedKanjiObjs[
                    random.integer(0, selectedKanjiObjs.length - 1)
                  ].kanjiChar;
              }
              setCorrectKanjiChar(newRandomKanjiChar);
              setFeedback(
                <>
                  <span>
                    {`correct! ${correctKanjiChar} = ${inputValue
                      .trim()
                      .toLowerCase()} `}
                  </span>
                  <CircleCheck className='inline' />
                </>
              );
            } else {
              setInputValue('');
              setFeedback(
                <>
                  <span>
                    {`incorrect! ${correctKanjiChar} ≠ ${inputValue} `}
                  </span>
                  <CircleX className='inline' />
                </>
              );
              playErrorTwice();

              incrementCharacterScore(correctKanjiChar, 'wrong');
              incrementWrongAnswers();
            }
          }
        }

      const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
          playClick();
          e.currentTarget.blur();
          setInputValue('');
          let newRandomKanjiChar =
            selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
              .kanjiChar;
          while (newRandomKanjiChar === correctKanjiChar) {
            newRandomKanjiChar =
              selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
                .kanjiChar;
          }
          setCorrectKanjiChar(newRandomKanjiChar);
          setFeedback(
            <>{`skipped ~ ${correctKanjiChar} = ${correctMeanings[0]}`}</>
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
      <p className='text-8xl sm:text-9xl' lang='ja'>
        {correctKanjiChar}
      </p>
      <input
        lang='en'
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
          'text-xl font-medium py-4 px-16 rounded-3xl transform transition duration-150 hover:scale-105 hover:cursor-pointer ',
          buttonBorderStyles,
          'flex flex-row items-end gap-2',
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
