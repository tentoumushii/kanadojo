'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { kana } from '@/static/kana';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import { CircleCheck, CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { useCorrect, useError } from '@/lib/useAudio';
import GameIntel from '@/components/reusable/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/useStats';
import useStatsStore from '@/store/useStatsStore';
// import AnswerSummary from '@/components/reusable/AnswerSummary';
import Stars from '@/components/reusable/Stars';

const random = new Random();

const ReversePick = ({ isHidden }: { isHidden: boolean }) => {
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

  const kanaGroupIndices = useKanaKanjiStore(state => state.kanaGroupIndices);

  const selectedKana = kanaGroupIndices.map(i => kana[i].kana).flat();
  const selectedRomaji = kanaGroupIndices.map(i => kana[i].romanji).flat();

  const selectedPairs1 = Object.fromEntries(
    selectedRomaji.map((key, i) => [key, selectedKana[i]])
  );
  const selectedPairs2 = Object.fromEntries(
    selectedRomaji
      .map((key, i) => [key, selectedKana[i]])
      .slice()
      .reverse()
  );

  const reversedPairs1 = Object.fromEntries(
    Object.entries(selectedPairs1).map(([key, value]) => [value, key])
  );
  const reversedPairs2 = Object.fromEntries(
    Object.entries(selectedPairs2).map(([key, value]) => [value, key])
  );

  const [correctRomajiChar, setCorrectRomajiChar] = useState(
    selectedRomaji[random.integer(0, selectedRomaji.length - 1)]
  );

  const correctKanaChar = random.bool()
    ? selectedPairs1[correctRomajiChar]
    : selectedPairs2[correctRomajiChar];

  const { [correctRomajiChar]: _, ...incorrectPairs } = random.bool()
    ? selectedPairs1
    : selectedPairs2;
  void _;

  const randomIncorrectKana = [...Object.values(incorrectPairs)]
    .sort(() => random.real(0, 1) - 0.5)
    .slice(0, 2);

  const [shuffledVariants, setShuffledVariants] = useState(
    [correctKanaChar, ...randomIncorrectKana].sort(
      () => random.real(0, 1) - 0.5
    )
  );

  const [feedback, setFeedback] = useState(<>{'feeback ~'}</>);

  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );

  // const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);

  useEffect(() => {
    setShuffledVariants(
      [correctKanaChar, ...randomIncorrectKana].sort(
        () => random.real(0, 1) - 0.5
      )
    );
    speedStopwatch.start();
  }, [correctRomajiChar]);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setScore(0);

    const handleKeyDown = (event: KeyboardEvent) => {
      const index = pickGameKeyMappings[event.code];
      if (index !== undefined && index < shuffledVariants.length) {
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

  const handleOptionClick = (kanaChar: string) => {
    // setDisplayAnswerSummary(true);
    if (
      reversedPairs1[kanaChar] === correctRomajiChar ||
      reversedPairs2[kanaChar] === correctRomajiChar
    ) {
      speedStopwatch.pause();
      addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
      speedStopwatch.reset();
      playCorrect();
      addCharacterToHistory(correctRomajiChar);
      incrementCharacterScore(correctRomajiChar, 'correct');
      incrementCorrectAnswers();
      setScore(score + 1);

      let newRandomRomaji =
        selectedRomaji[random.integer(0, selectedRomaji.length - 1)];
      while (newRandomRomaji === correctRomajiChar) {
        newRandomRomaji =
          selectedRomaji[random.integer(0, selectedRomaji.length - 1)];
      }
      setCorrectRomajiChar(newRandomRomaji);
      setWrongSelectedAnswers([]);
      setFeedback(
        <>
          <span>{`correct! ${correctRomajiChar} = ${correctKanaChar} `}</span>
          <CircleCheck />
        </>
      );
    } else {
      setWrongSelectedAnswers([...wrongSelectedAnswers, kanaChar]);
      setFeedback(
        <>
          <span>{`incorrect! ${correctRomajiChar} ≠ ${kanaChar} `}</span>
          <CircleX />
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
  };

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 sm:gap-10 items-center w-full sm:w-4/5',
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel feedback={feedback} gameMode='reverse pick' />
      <p className='text-8xl sm:text-9xl font-medium'>{correctRomajiChar}</p>
      {/* {displayAnswerSummary && <AnswerSummary />} */}
      {/* {!displayAnswerSummary && ( */}
      <div className='flex flex-row w-full gap-5 sm:gap-0 sm:justify-evenly'>
        {shuffledVariants.map((kanaChar, i) => (
          <button
            ref={elem => {
              buttonRefs.current[i] = elem;
            }}
            key={kanaChar + i}
            type='button'
            disabled={wrongSelectedAnswers.includes(kanaChar)}
            className={clsx(
              'text-5xl font-semibold py-4 rounded-xl w-full sm:w-1/5 flex flex-row justify-center items-center gap-1',
              buttonBorderStyles,
              'border-b-4 border-[var(--border-color)]',
              'text-[var(--border-color)]',
              wrongSelectedAnswers.includes(kanaChar) &&
                'hover:bg-[var(--card-color)]',
              !wrongSelectedAnswers.includes(kanaChar) &&
                'hover:scale-110 text-[var(--main-color)] hover:border-[var(--secondary-color)]'
            )}
            onClick={() => handleOptionClick(kanaChar)}
          >
            <span>{kanaChar}</span>
            <span className='hidden lg:inline text-xs rounded-full bg-[var(--border-color)] px-1'>
              {i + 1 === 1 ? '1' : i + 1 === 2 ? '2' : '3'}
            </span>
          </button>
        ))}
      </div>
      <Stars />
      {/* )} */}
    </div>
  );
};

export default ReversePick;
