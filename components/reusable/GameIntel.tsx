'use client';
import { SquareCheck, SquareX, Star } from 'lucide-react';
import clsx from 'clsx';
import { cardBorderStyles } from '@/static/styles';
import useStatsStore from '@/store/useStatsStore';
import { miniButtonBorderStyles } from '@/static/styles';
import { ChartSpline } from 'lucide-react';
import { useStopwatch } from 'react-timer-hook';
// import { useEffect, useRef } from 'react';
import { useClick } from '@/lib/useAudio';

const GameIntel = ({
  feedback,
  gameMode
}: {
  feedback: React.ReactElement;
  gameMode: string;
}) => {
  const numCorrectAnswers = useStatsStore(state => state.numCorrectAnswers);
  const numWrongAnswers = useStatsStore(state => state.numWrongAnswers);
  const numStars = useStatsStore(state => state.stars);

  const totalTimeStopwatch = useStopwatch({ autoStart: false });

  const toggleStats = useStatsStore(state => state.toggleStats);
  const setNewTotalMilliseconds = useStatsStore(
    state => state.setNewTotalMilliseconds
  );

  const { playClick } = useClick();

  // useEffect(() => {
  //   if (!isHidden) totalTimeStopwatch.start();
  // }, [isHidden]);

  return (
    <div
      className={clsx(
        'p-4 flex flex-col gap-2 items-center justify-center',
        'md:flex-row md:gap-4',
        cardBorderStyles,
        'text-[var(--secondary-color)]'
      )}
    >
      <div className={clsx('flex flex-col gap-2 items-center justify-center')}>
        <p className='text-xl'>training mode: {gameMode}</p>
        <hr className='border-t-1 w-full border-[var(--border-color)]' />
        <p className='text-xl flex flex-row items-center gap-1.5'>{feedback}</p>
      </div>
      <div
        className={clsx(
          'border-t-1 w-full',
          'md:border-l-1 md:h-auto md:self-stretch md:border-t-0 md:w-0',
          'border-[var(--border-color)]'
        )}
      />
      <div
        className={clsx('flex flex-row gap-2.5 items-center justify-center')}
      >
        <p className='text-xl flex flex-row items-center gap-1.5'>
          <SquareCheck />
          <span>{numCorrectAnswers}</span>
        </p>
        <p className='text-xl flex flex-row items-center gap-1.5'>
          <SquareX />
          <span>{numWrongAnswers}</span>
        </p>
        <p className='text-xl flex flex-row items-center gap-1.5'>
          <Star />
          <span>{numStars}</span>
        </p>

        <button
          className={clsx(
            'py-2 px-6 text-xl flex flex-row justify-center items-center gap-2',
            miniButtonBorderStyles,
            'group flex-1',
            'text-[var(--main-color)]'
          )}
          onClick={() => {
            playClick();
            toggleStats();
            totalTimeStopwatch.pause();
            setNewTotalMilliseconds(totalTimeStopwatch.totalMilliseconds);
          }}
        >
          {/* <span className='group-hover:underline'>stats</span> */}
          <ChartSpline size={24} />
        </button>
      </div>
    </div>
  );
};

export default GameIntel;
