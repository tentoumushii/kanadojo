'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { kana } from '@/static/kana';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { useCorrect, useError } from '@/lib/useAudio';
import GameIntel from '@/components/reusable/GameIntel';
import { buttonBorderStyles } from '@/static/styles';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/useStats';
import ProgressBar from '@/components/reusable/ProgressBar';
import useStatsStore from '@/store/useStatsStore';

const random = new Random();

const Pick = ({ isHidden }: { isHidden: boolean }) => {
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

  const selectedPairs = Object.fromEntries(
    selectedKana.map((key, i) => [key, selectedRomaji[i]])
  );

  const [correctKanaChar, setCorrectKanaChar] = useState(
    selectedKana[random.integer(0, selectedKana.length - 1)]
  );

  const correctRomajiChar = selectedPairs[correctKanaChar];

  const { [correctKanaChar]: _, ...incorrectPairs } = selectedPairs;
  void _;

  const randomIncorrectRomaji = [...Object.values(incorrectPairs)]
    .sort(() => random.real(0, 1) - 0.5)
    .slice(0, 2);

  const [shuffledVariants, setShuffledVariants] = useState(
    [correctRomajiChar, ...randomIncorrectRomaji].sort(
      () => random.real(0, 1) - 0.5
    )
  );

  const [feedback, setFeedback] = useState(<>{'feeback ~'}</>);

  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );

  useEffect(() => {
    setShuffledVariants(
      [correctRomajiChar, ...randomIncorrectRomaji].sort(
        () => random.real(0, 1) - 0.5
      )
    );
  }, [correctKanaChar]);

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

  const handleOptionClick = (romajiChar: string) => {
    if (romajiChar === correctRomajiChar) {
      speedStopwatch.pause();
      addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
      speedStopwatch.reset();
      playCorrect();
      addCharacterToHistory(correctKanaChar);
      incrementCharacterScore(correctKanaChar, 'correct');
      incrementCorrectAnswers();
      setScore(score + 1);

      let newRandomKana =
        selectedKana[random.integer(0, selectedKana.length - 1)];
      while (newRandomKana === correctKanaChar) {
        newRandomKana =
          selectedKana[random.integer(0, selectedKana.length - 1)];
      }
      setCorrectKanaChar(newRandomKana);
      setWrongSelectedAnswers([]);
      setFeedback(
        <>
          <span>{`correct! ${correctKanaChar} = ${correctRomajiChar} `}</span>
          <CircleCheck className='inline' />
        </>
      );
    } else {
      setWrongSelectedAnswers([...wrongSelectedAnswers, romajiChar]);
      setFeedback(
        <>
          <span>{`incorrect! ${correctKanaChar} ≠ ${romajiChar} `}</span>
          <CircleX className='inline' />
        </>
      );
      playErrorTwice();

      incrementCharacterScore(correctKanaChar, 'wrong');
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
      <GameIntel feedback={feedback} gameMode='pick' />
      <p className='text-8xl sm:text-9xl font-medium'>{correctKanaChar}</p>
      <div className='flex flex-row w-full gap-5 sm:gap-0 sm:justify-evenly'>
        {shuffledVariants.map((romajiChar, i) => (
          <button
            ref={elem => {
              buttonRefs.current[i] = elem;
            }}
            key={romajiChar + i}
            type='button'
            disabled={wrongSelectedAnswers.includes(romajiChar)}
            className={clsx(
              'text-5xl font-semibold py-4 rounded-xl w-full sm:w-1/5 flex flex-row justify-center items-center gap-1',
              buttonBorderStyles,
              'text-[var(--border-color)]',
              wrongSelectedAnswers.includes(romajiChar) &&
                'hover:bg-[var(--card-color)]',
              !wrongSelectedAnswers.includes(romajiChar) &&
                'hover:scale-115 text-[var(--main-color)]'
            )}
            onClick={() => handleOptionClick(romajiChar)}
          >
            <span>{romajiChar}</span>
            <span className='hidden lg:inline text-xs rounded-full bg-[var(--border-color)] px-1'>
              {i + 1 === 1 ? '1' : i + 1 === 2 ? '2' : '3'}
            </span>
          </button>
        ))}
      </div>
      <ProgressBar />
    </div>
  );
};

export default Pick;
