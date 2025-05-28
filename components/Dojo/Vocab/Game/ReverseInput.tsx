'use client';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck, CircleX, CircleArrowRight } from 'lucide-react';
import { Random } from 'random-js';
import clsx from 'clsx';
import { IWordObj } from '@/store/useVocabStore';
import { useClick, useCorrect, useError } from '@/lib/useAudio';
import GameIntel from '@/components/reusable/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/useStats';

const random = new Random();

const ReverseInput = ({
  selectedWordObjs,
  isHidden
}: {
  selectedWordObjs: IWordObj[];
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
    selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)].meanings[0]
  );

  const correctWord = selectedWordObjs.find(
    wordObj => wordObj.meanings[0] === correctMeaning
  )?.word;

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
            if (correctWord === inputValue.trim()) {
              speedStopwatch.pause();
              addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
              speedStopwatch.reset();
              playCorrect();
              addCharacterToHistory(correctMeaning);
              incrementCharacterScore(correctMeaning, 'correct');
              incrementCorrectAnswers();

              setInputValue('');
              let newRandomMeaning =
                selectedWordObjs[
                  random.integer(0, selectedWordObjs.length - 1)
                ].meanings[0];
              while (newRandomMeaning === correctMeaning) {
                newRandomMeaning =
                  selectedWordObjs[
                    random.integer(0, selectedWordObjs.length - 1)
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
      
        const handleSkip = (e:React.MouseEvent<HTMLButtonElement>) => {
          playClick();
          e.currentTarget.blur();
          setInputValue('');
          let newRandomMeaning =
            selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)]
              .meanings[0];
          while (newRandomMeaning === correctMeaning) {
            newRandomMeaning =
              selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)]
                .meanings[0];
          }
          setCorrectMeaning(newRandomMeaning);
          setFeedback(<>{`skipped ~ ${correctMeaning} = ${correctWord}`}</>);
        }

  return (
    <div
      className={clsx(
        'flex flex-col gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel feedback={feedback} gameMode='reverse input' />
      <p className='text-5xl sm:text-8xl' lang='en'>
        {correctMeaning}
      </p>
      <input
        lang='ja'
        ref={inputRef}
        type='text'
        value={inputValue}
        className='border-b-2 pb-1 text-center border-gray-600 focus:outline-none focus:border-gray-400 text-2xl lg:text-7xl'
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button
        ref={buttonRef}
        className={clsx(
          'text-xl font-medium  py-4 px-16 rounded-3xl transform transition duration-150 hover:scale-105 hover:cursor-pointer ',
          buttonBorderStyles,
          'flex flex-row items-end gap-2',
          'active:scale-95 md:active:scale-98 active:duration-225'
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
