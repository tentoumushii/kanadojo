'use client';
import clsx from 'clsx';
import { cardBorderStyles } from '@/static/styles';
import {
  Hourglass,
  SquareCheck,
  SquareX,
  ChartSpline,
  Target,
  Timer,
  ClockFading,
  Clover,
  HeartCrack,
  CircleDivide,
  Flame,
  Shapes,
  Sigma
} from 'lucide-react';
import useStatsStore from '@/store/useStatsStore';
import { ChevronsLeft } from 'lucide-react';
import { findHighestCounts } from '@/lib/helperFunctions';
import { useClick } from '@/lib/useAudio';

const Stats = () => {
  const { playClick } = useClick();

  const toggleStats = useStatsStore(state => state.toggleStats);

  const numCorrectAnswers = useStatsStore(state => state.numCorrectAnswers);
  const numWrongAnswers = useStatsStore(state => state.numWrongAnswers);
  const characterHistory = useStatsStore(state => state.characterHistory);
  const totalMilliseconds = useStatsStore(state => state.totalMilliseconds);
  const correctAnswerTimes = useStatsStore(state => state.correctAnswerTimes);
  const characterScores = useStatsStore(state => state.characterScores);

  const totalMinutes = Math.floor(totalMilliseconds / 60000);
  const seconds = ((totalMilliseconds / 1000) % 60).toFixed(0);
  const accuracy =
    (numCorrectAnswers / (numCorrectAnswers + numWrongAnswers)) * 100;
  const ciRatio = numCorrectAnswers / numWrongAnswers;
  const averageCorrectAnswerTime =
    correctAnswerTimes.length > 0 &&
    correctAnswerTimes.reduce((acc, curr) => acc + curr) /
      correctAnswerTimes.length;
  const fastestCorrectAnswer = Math.min(...correctAnswerTimes).toFixed(2);
  const slowestCorrectAnswer = Math.max(...correctAnswerTimes).toFixed(2);
  const {
    highestCorrectChars,
    highestCorrectCharsValue,
    highestWrongChars,
    highestWrongCharsValue
  } = findHighestCounts(characterScores);

  const statsFields = [
    {
      content: `training time: ${totalMinutes} minute${
        totalMinutes === 1 ? '' : 's'
      }, ${seconds} seconds (paused)`,
      icons: [Hourglass]
    },
    {
      content: `correct answers: ${numCorrectAnswers}`,
      icons: [SquareCheck]
    },
    { content: `wrong answers: ${numWrongAnswers}`, icons: [SquareX] },
    {
      content: `accuracy: ${
        Number.isNaN(accuracy) ? '~' : accuracy.toFixed(1) + '%'
      }`,
      icons: [Target]
    },
    {
      content: `average time per correct answer: ${
        averageCorrectAnswerTime
          ? averageCorrectAnswerTime.toFixed(2) + 's'
          : '~'
      }`,
      icons: [Timer]
    },

    {
      content: `fastest correct answer: ${
        fastestCorrectAnswer !== 'Infinity' ? fastestCorrectAnswer + 's' : '~'
      }`,
      icons: [Flame]
    },
    {
      content: `slowest correct answer: ${
        slowestCorrectAnswer !== '-Infinity' ? slowestCorrectAnswer + 's' : '~'
      }`,
      icons: [ClockFading]
    },
    {
      content: `correct / incorrect answers ratio: ${
        Number.isNaN(ciRatio)
          ? '~'
          : ciRatio === Infinity
          ? '∞'
          : ciRatio.toFixed(2)
      }`,
      icons: [CircleDivide]
    },
    {
      content: `characters played: ${characterHistory.length}`,
      icons: [Sigma]
    },
    {
      content: `unique characters played: ${
        [...new Set(characterHistory)].length
      }`,
      icons: [Shapes]
    },
    {
      content: `easiest characters: ${
        highestCorrectChars.length >= 1
          ? highestCorrectChars.join(', ') +
            ' - ' +
            highestCorrectCharsValue +
            ' correct answers'
          : '~'
      }`,
      icons: [Clover]
    },
    {
      content: `hardest characters: ${
        highestWrongChars.length >= 1
          ? highestWrongChars.join(', ') +
            ' - ' +
            highestWrongCharsValue +
            ' wrong answers'
          : '~'
      }`,
      icons: [HeartCrack]
    }
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-4 max-w-[100dvw] min-h-[100dvh] p-4'>
      <h2
        className='group text-4xl flex flex-row items-center gap-2.5 hover:cursor-pointer'
        onClick={() => {
          playClick();
          toggleStats();
        }}
      >
        <ChevronsLeft
          className={clsx(
            'text-[var(--main-color)] mt-2',
            'md:text-[var(--border-color)] md:group-hover:text-[var(--main-color)]'
          )}
        />
        <span>Statistics</span>
        <ChartSpline size={30} className='mt-1.5' />
      </h2>
      <div
        className={clsx(
          'flex flex-col p-4 items-start',
          'md:flex-row md:gap-4',
          cardBorderStyles
        )}
      >
        <div className={clsx('flex flex-col gap-4 p-4 items-start')}>
          <h3
            className={clsx(
              'border-b-1 border-[var(--border-color)] w-full text-xl pb-2.5'
            )}
          >
            General
          </h3>
          {statsFields.slice(0, 4).map(statsField => (
            <p
              className={clsx(
                'bg-[var(--background-color)] rounded-xl p-2 border-[var(--border-color)] border-1',
                'flex flex-row items-center justify-start gap-1.5'
              )}
              key={statsField.content}
            >
              <span>{statsField.content}</span>
              {statsField.icons.map((Icon, i) => (
                <Icon size={24} key={i} />
              ))}
            </p>
          ))}
        </div>
        <div className={clsx('flex flex-col gap-4 p-4 items-start')}>
          <h3
            className={clsx(
              'border-b-1 border-[var(--border-color)] w-full text-xl pb-2.5'
            )}
          >
            Answers
          </h3>

          {statsFields.slice(4, 8).map(statsField => (
            <p
              className={clsx(
                'bg-[var(--background-color)] rounded-xl p-2 border-[var(--border-color)] border-1',
                'flex flex-row items-center justify-start gap-1.5'
              )}
              key={statsField.content}
            >
              <span>{statsField.content}</span>
              {statsField.icons.map((Icon, i) => (
                <Icon size={24} key={i} />
              ))}
            </p>
          ))}
        </div>
        <div className={clsx('flex flex-col gap-4 p-4 items-start')}>
          <h3
            className={clsx(
              'border-b-1 border-[var(--border-color)] w-full text-xl pb-2.5'
            )}
          >
            Characters
          </h3>
          {statsFields.slice(8, 20).map(statsField => (
            <p
              className={clsx(
                'bg-[var(--background-color)] rounded-xl p-2 border-[var(--border-color)] border-1',
                'flex flex-row items-center justify-start gap-1.5'
              )}
              key={statsField.content}
            >
              <span>{statsField.content}</span>
              {statsField.icons.map((Icon, i) => (
                <Icon size={24} key={i} />
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
