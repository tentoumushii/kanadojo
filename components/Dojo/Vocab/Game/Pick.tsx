'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IWordObj } from '@/store/useVocabStore';
import { useCorrect, useError } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import GameIntel from '@/components/reusable/GameIntel';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/useStats';
import useStatsStore from '@/store/useStatsStore';
import Stars from '@/components/reusable/Stars';

const random = new Random();

const Pick = ({
  selectedWordObjs,
  isHidden
}: {
  selectedWordObjs: IWordObj[];
  isHidden: boolean;
}) => {
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

  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const [correctWord, setCorrectWord] = useState(
    selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)].word
  );

  const correctMeaning = selectedWordObjs.find(
    wordObj => wordObj.word === correctWord
  )?.meanings[0];

  const incorrectWordObjs = selectedWordObjs.filter(
    currentWordObj => currentWordObj.word !== correctWord
  );

  const randomIncorrectMeanings = incorrectWordObjs
    .map(currentIncorrectWordObj => currentIncorrectWordObj.meanings[0])
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
  }, [correctWord]);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setScore(0);

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
      addCharacterToHistory(correctWord);
      incrementCharacterScore(correctWord, 'correct');
      incrementCorrectAnswers();
      setScore(score + 1);

      let newRandomWord =
        selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)].word;

      while (newRandomWord === correctWord) {
        newRandomWord =
          selectedWordObjs[random.integer(0, selectedWordObjs.length - 1)].word;
      }
      setCorrectWord(newRandomWord);
      setWrongSelectedAnswers([]);
      setFeedback(
        <>
          <span>{`correct! ${correctWord} = ${meaning} `}</span>
          <CircleCheck className='inline' />
        </>
      );
    } else {
      setWrongSelectedAnswers([...wrongSelectedAnswers, meaning]);
      setFeedback(
        <>
          <span>{`incorrect! ${correctWord} ≠ ${meaning} `}</span>
          <CircleX className='inline' />
        </>
      );
      playErrorTwice();

      incrementCharacterScore(correctWord, 'wrong');
      incrementWrongAnswers();
      if (score - 1 < 0) {
        setScore(0);
      } else {
        setScore(score - 1);
      }
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-col gap-6 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : '',
        'max-md:mb-8'
      )}
    >
      <GameIntel feedback={feedback} gameMode='pick' />
      <p className='text-6xl md:text-9xl text-center' lang='ja'>
        {correctWord}
      </p>
      <div
        className={clsx(
          'flex flex-col w-full gap-6 md:gap-0 md:justify-evenly',
          'md:flex-row'
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
              'text-3xl py-4 px-2 rounded-xl w-full md:w-1/4 flex flex-row justify-center items-center gap-1',
              buttonBorderStyles,
              'border-b-4 border-[var(--border-color)]',
              'active:scale-95 md:active:scale-98 active:duration-200',
              'text-[var(--border-color)]',
              wrongSelectedAnswers.includes(meaning) &&
                'hover:bg-[var(--card-color)]',
              !wrongSelectedAnswers.includes(meaning) &&
                'hover:scale-110 text-[var(--main-color)] hover:text-[var(--secondary-color)]'
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

      <Stars />
    </div>
  );
};

export default Pick;
