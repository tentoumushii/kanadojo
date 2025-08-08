'use client';
import { SquareCheck, SquareX, Star, LandPlot } from 'lucide-react';
import clsx from 'clsx';
import { cardBorderStyles } from '@/static/styles';
import useStatsStore from '@/store/useStatsStore';
import { miniButtonBorderStyles } from '@/static/styles';
import { ChartSpline } from 'lucide-react';
import { useStopwatch } from 'react-timer-hook';
import { useClick } from '@/lib/hooks/useAudio';

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
        ' flex flex-col  items-center justify-center',
        'md:flex-row ',
        cardBorderStyles,
        'text-[var(--secondary-color)]'
      )}
    >
      <div
        className={clsx(
          'flex flex-col gap-2 items-center justify-center py-2 w-full'
        )}
      >
        <p className='text-xl px-4 flex justify-center items-center w-full gap-2 py-2'>
          <LandPlot />
          {gameMode}
        </p>
        <p className='text-xl flex justify-center items-center gap-1.5 px-4 py-2 border-t-1 w-full  border-[var(--border-color)]'>
          {feedback}
        </p>
      </div>

      <div
        className={clsx(
          'border-t-1 w-full',
          'md:border-l-1 md:h-auto md:self-stretch md:border-t-0 md:w-0',
          'border-[var(--border-color)]'
        )}
      />

      <div
        className={clsx('flex flex-row gap-3 items-center justify-center p-4')}
      >
        <p className='text-xl flex flex-row items-center gap-1'>
          <SquareCheck />
          <span>{numCorrectAnswers}</span>
        </p>
        <p className='text-xl flex flex-row items-center gap-1'>
          <SquareX />
          <span>{numWrongAnswers}</span>
        </p>
        <p className='text-xl flex flex-row items-center gap-1'>
          <Star />
          <span>{numStars}</span>
        </p>

        <button
          className={clsx(
            'py-2 px-6 text-xl flex flex-row justify-center items-center gap-2',
            miniButtonBorderStyles,
            'hover:border-[var(--main-color)]',
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
