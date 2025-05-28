'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IKanjiObj } from '@/store/useKanaKanjiStore';
import { useCorrect, useError } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import GameIntel from '@/components/reusable/GameIntel';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/useStats';

const random = new Random();

const Pick = ({
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

  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const [correctKanjiChar, setCorrectKanjiChar] = useState(
    selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)].kanjiChar
  );

  const correctMeaning = selectedKanjiObjs.find(
    obj => obj.kanjiChar === correctKanjiChar
  )?.meanings[0];

  const incorrectKanjiObjs = selectedKanjiObjs.filter(
    currentKanjiObj => currentKanjiObj.kanjiChar !== correctKanjiChar
  );

  const randomIncorrectMeanings = incorrectKanjiObjs
    .map(currentIncorrectKanjiObj => currentIncorrectKanjiObj.meanings[0])
    .sort(() => random.real(0, 1) - 0.5)
    .slice(0, 2);

  const [shuffledMeanings, setShuffledMeanings] = useState(
    [correctMeaning, ...randomIncorrectMeanings].sort(
      () => random.real(0, 1) - 0.5
    ) as string[]
  );

  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);

  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );

  useEffect(() => {
    setShuffledMeanings(
      [correctMeaning, ...randomIncorrectMeanings].sort(
        () => random.real(0, 1) - 0.5
      ) as string[]
    );
  }, [correctKanjiChar]);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const index = pickGameKeyMappings[event.code];
      if (index !== undefined && index < shuffledMeanings.length) {
        buttonRefs.current[index]?.click();
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

  const handleOptionClick = (meaning: string) => {
    if (meaning === correctMeaning) {
      speedStopwatch.pause();
      addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
      speedStopwatch.reset();
      playCorrect();
      addCharacterToHistory(correctKanjiChar);
      incrementCharacterScore(correctKanjiChar, 'correct');
      incrementCorrectAnswers();

      let newRandomKanjiChar =
        selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
          .kanjiChar;

      while (newRandomKanjiChar === correctKanjiChar) {
        newRandomKanjiChar =
          selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
            .kanjiChar;
      }
      setCorrectKanjiChar(newRandomKanjiChar);
      setWrongSelectedAnswers([]);
      setFeedback(
        <>
          <span>{`correct! ${correctKanjiChar} = ${meaning} `}</span>
          <CircleCheck className='inline' />
        </>
      );
    } else {
      setWrongSelectedAnswers([...wrongSelectedAnswers, meaning]);
      setFeedback(
        <>
          <span>{`incorrect! ${correctKanjiChar} ≠ ${meaning} `}</span>
          <CircleX className='inline' />
        </>
      );
      playErrorTwice();

      incrementCharacterScore(correctKanjiChar, 'wrong');
      incrementWrongAnswers();
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : '',
        'max-md:pb-12'
      )}
    >
      <GameIntel feedback={feedback} gameMode='pick' />

      <p className='text-9xl' lang='ja'>
        {correctKanjiChar}
      </p>
      <div
        className={clsx(
          'flex w-full gap-5 sm:gap-0 sm:justify-evenly',
          'flex-col',
          'sm:flex-row'
        )}
      >
        {shuffledMeanings.map((meaning, i) => (
          <button
            ref={elem => {
              buttonRefs.current[i] = elem;
            }}
            key={meaning + i}
            type='button'
            disabled={wrongSelectedAnswers.includes(meaning)}
            className={clsx(
              'text-4xl py-4 rounded-xl w-full sm:w-1/5 flex flex-row justify-center items-center gap-1',
              buttonBorderStyles,
              'text-[var(--border-color)]',
              !wrongSelectedAnswers.includes(meaning) &&
                'duration-200 hover:scale-115 hover:cursor-pointer text-[var(--main-color)]'
            )}
            onClick={() => handleOptionClick(meaning)}
          >
            <span lang='ja'>{meaning}</span>
            <span className='hidden lg:inline text-xs rounded-full bg-[var(--border-color)] px-1'>
              {i + 1 === 1 ? '1' : i + 1 === 2 ? '2' : '3'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pick;
