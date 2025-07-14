'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { Random } from 'random-js';
import { IKanjiObj } from '@/store/useKanaKanjiStore';
import { useCorrect, useError } from '@/lib/hooks/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import GameIntel from '@/components/reusable/GameIntel';
import { pickGameKeyMappings } from '@/lib/keyMappings';
import { useStopwatch } from 'react-timer-hook';
import useStats from '@/lib/hooks/useStats';
import useStatsStore from '@/store/useStatsStore';
// import AnswerSummary from '@/components/reusable/AnswerSummary';
import Stars from '@/components/reusable/Stars';

const random = new Random();

const ReversePick = ({
  selectedKanjiObjs,
  isHidden,
}: {
  selectedKanjiObjs: IKanjiObj[];
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
    incrementCharacterScore,
  } = useStats();

  const { playCorrect } = useCorrect();
  const { playErrorTwice } = useError();

  const [correctMeaning, setCorrectMeaning] = useState(
    selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
      .meanings[0]
  );

  const correctKanjiObj = selectedKanjiObjs.find(
    obj => obj.meanings[0] === correctMeaning
  ) as IKanjiObj;

  const correctKanjiChar = correctKanjiObj?.kanjiChar;

  const incorrectKanjiObjs = selectedKanjiObjs.filter(
    currentKanjiObj => currentKanjiObj.meanings[0] !== correctMeaning
  );

  const randomIncorrectKanjiChars = incorrectKanjiObjs
    .map(currentIncorrectKanjiObj => currentIncorrectKanjiObj.kanjiChar)
    .sort(() => random.real(0, 1) - 0.5)
    .slice(0, 2);

  const [shuffledKanjiChars, setShuffledKanjiChars] = useState(
    [correctKanjiChar, ...randomIncorrectKanjiChars].sort(
      () => random.real(0, 1) - 0.5
    ) as string[]
  );

  const [feedback, setFeedback] = useState(<>{'feedback ~'}</>);

  const [wrongSelectedAnswers, setWrongSelectedAnswers] = useState<string[]>(
    []
  );

  useEffect(() => {
    setShuffledKanjiChars(
      [correctKanjiChar, ...randomIncorrectKanjiChars].sort(
        () => random.real(0, 1) - 0.5
      ) as string[]
    );
  }, [correctMeaning]);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const index = pickGameKeyMappings[event.code];
      if (index !== undefined && index < shuffledKanjiChars.length) {
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

  // const [displayAnswerSummary, setDisplayAnswerSummary] = useState(false);

  const handleOptionClick = (kanjiChar: string) => {
    // setDisplayAnswerSummary(true);
    if (kanjiChar === correctKanjiChar) {
      speedStopwatch.pause();
      addCorrectAnswerTime(speedStopwatch.totalMilliseconds / 1000);
      speedStopwatch.reset();
      playCorrect();
      addCharacterToHistory(correctMeaning);
      incrementCharacterScore(correctMeaning, 'correct');
      incrementCorrectAnswers();
      setScore(score + 1);

      let newRandomMeaning =
        selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
          .meanings[0];

      while (newRandomMeaning === correctMeaning) {
        newRandomMeaning =
          selectedKanjiObjs[random.integer(0, selectedKanjiObjs.length - 1)]
            .meanings[0];
      }
      setCorrectMeaning(newRandomMeaning);
      setWrongSelectedAnswers([]);
      setFeedback(
        <>
          <span>{`correct! ${correctMeaning} = ${kanjiChar} `}</span>
          <CircleCheck className="inline" />
        </>
      );
    } else {
      setWrongSelectedAnswers([...wrongSelectedAnswers, kanjiChar]);
      setFeedback(
        <>
          <span>{`incorrect! ${correctMeaning} ≠ ${kanjiChar} `}</span>
          <CircleX className="inline" />
        </>
      );
      playErrorTwice();

      incrementCharacterScore(correctMeaning, 'wrong');
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
        isHidden ? 'hidden' : ''
      )}
    >
      <GameIntel
        feedback={feedback}
        gameMode="reverse pick"
      />
      <p className="text-6xl md:text-8xl">{correctMeaning}</p>
      {/* {displayAnswerSummary && <AnswerSummary payload={correctKanjiObj} payloadType='kanji' />} */}
      {/* {!displayAnswerSummary && ( */}
      <div className="flex flex-row w-full gap-5 sm:gap-0 sm:justify-evenly">
        {shuffledKanjiChars.map((kanjiChar, i) => (
          <button
            ref={elem => {
              buttonRefs.current[i] = elem;
            }}
            key={kanjiChar + i}
            type="button"
            disabled={wrongSelectedAnswers.includes(kanjiChar)}
            className={clsx(
              'text-5xl py-4 rounded-xl w-full sm:w-1/5 flex flex-row justify-center items-center gap-1',
              buttonBorderStyles,
              'text-[var(--border-color)]',
              wrongSelectedAnswers.includes(kanjiChar) &&
                'hover:bg-[var(--card-color)]',
              !wrongSelectedAnswers.includes(kanjiChar) &&
                'hover:scale-110 text-[var(--main-color)] hover:border-[var(--secondary-color)]'
            )}
            onClick={() => handleOptionClick(kanjiChar)}
          >
            <span lang="ja">{kanjiChar}</span>
            <span className="hidden lg:inline text-xs rounded-full bg-[var(--border-color)] px-1">
              {i + 1 === 1 ? '1' : i + 1 === 2 ? '2' : '3'}
            </span>
          </button>
        ))}
      </div>
      {/* )} */}

      <Stars />
    </div>
  );
};

export default ReversePick;
