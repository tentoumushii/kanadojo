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

const ReverseInput = ({
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

  const [correctMeaning, setCorrectMeaning] = useState(
    selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
      .meanings[0]
  );

  const correctKanjiChar = selectedKanjiObjs.find(
    obj => obj.meanings[0] === correctMeaning
  )?.kanjiChar;

  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Automatically focuses on the input
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.code === 'Space') {
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
            if (correctKanjiChar === inputValue.trim()) {
              speedStopwatch.pause();
              addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
              speedStopwatch.reset();
              playCorrect();
              addCharacterToHistory(correctMeaning);
              incrementCharacterScore(correctMeaning, 'correct');
              incrementCorrectAnswers();

              setInputValue('');
              let newRandomMeaning =
                selectedKanjiObjs[
                  random.integer(0, selectedKanjiObjs.length - 1)
                ].meanings[0];
              while (newRandomMeaning === correctMeaning) {
                newRandomMeaning =
                  selectedKanjiObjs[
                    random.integer(0, selectedKanjiObjs.length - 1)
                  ].meanings[0];
              }
              setCorrectMeaning(newRandomMeaning);
              setFeedback(
                <>
                  <span>
                    {`correct! ${correctMeaning} = ${inputValue.trim()} `}
                  </span>
                  <CircleCheck className='inline' />
                </>
              );
            } else {
              setInputValue('');
              setFeedback(
                <>
                  <span>{`incorrect! ${correctMeaning} ≠ ${inputValue} `}</span>
                  <CircleX className='inline' />
                </>
              );
              playErrorTwice();

              incrementCharacterScore(correctMeaning, 'wrong');
              incrementWrongAnswers();
            }
          }
        }

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
          playClick();
          e.currentTarget.blur();
          setInputValue('');
          let newRandomMeaning =
            selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
              .meanings[0];
          while (newRandomMeaning === correctMeaning) {
            newRandomMeaning =
              selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
                .meanings[0];
          }
          setCorrectMeaning(newRandomMeaning);
          setFeedback(
            <>{`skipped ~ ${correctMeaning} = ${correctKanjiChar}`}</>
          );
        }

  return (
    <div
      className={clsx(
        'flex flex-col gap-6 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel feedback={feedback} gameMode='reverse input' />
      <p className='text-6xl sm:text-8xl' lang='en'>
        {correctMeaning}
      </p>
      <input
        lang='ja'
        ref={inputRef}
        type='text'
        value={inputValue}
        className='border-b-2 pb-1 text-center border-[var(--border-color)] focus:outline-none focus:border-[var(--main-color)] text-2xl lg:text-7xl'
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button
        ref={buttonRef}
        className={clsx(
          'text-xl font-medium  py-4 px-16 rounded-3xl transform transition duration-150 hover:scale-105 hover:cursor-pointer ',
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

export default ReverseInput;
