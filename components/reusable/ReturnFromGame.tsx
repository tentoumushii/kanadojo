'use client';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useClick } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import { ChartSpline } from 'lucide-react';
import useStatsStore from '@/store/useStatsStore';
import { useStopwatch } from 'react-timer-hook';

const Return = ({ isHidden, href }: { isHidden: boolean; href: string }) => {
  const totalTimeStopwatch = useStopwatch({ autoStart: false });

  const toggleStats = useStatsStore(state => state.toggleStats);
  const setNewTotalMilliseconds = useStatsStore(
    state => state.setNewTotalMilliseconds
  );

  const { playClick } = useClick();

  useEffect(() => {
    if (!isHidden) totalTimeStopwatch.start();
  }, [isHidden]);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        buttonRef.current?.click();
      } else if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={clsx(
        'mt-2 md:mt-10',
        'w-full md:w-1/2 flex flex-col gap-2',
        'md:flex-row md:gap-6',
        isHidden ? 'hidden' : ''
      )}
    >
      <Link href={href} className='w-full md:w-1/2'>
        <button
          ref={buttonRef}
          className={clsx(
            'w-full mt-4 p-4 text-3xl flex flex-row justify-center items-center gap-2',
            buttonBorderStyles,
            'group'
          )}
          onClick={() => playClick()}
        >
          <span lang='en' className='group-hover:underline'>
            back to menu
          </span>
          <span className='inline text-2xl'>{'\u23CE'}</span>
        </button>
      </Link>
      <button
        className={clsx(
          'md:w-1/2 mt-4 p-4 text-3xl flex flex-row justify-center items-center gap-2',
          buttonBorderStyles,
          'group'
        )}
        onClick={() => {
          playClick();
          toggleStats();
          totalTimeStopwatch.pause();
          setNewTotalMilliseconds(totalTimeStopwatch.totalMilliseconds);
        }}
      >
        <span className='group-hover:underline'>stats</span>
        <ChartSpline size={28} />
      </button>
    </div>
  );
};

export default Return;
