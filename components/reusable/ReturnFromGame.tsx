'use client';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useClick } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import { ChartSpline } from 'lucide-react';
import useStatsStore from '@/store/useStatsStore';
import { useStopwatch } from 'react-timer-hook';
import { X } from 'lucide-react';

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

  const buttonRef = useRef<HTMLAnchorElement | null>(null);

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
        'mt-4 md:mt-10',
        'w-full md:w-1/2 flex flex-row gap-4 items-center justify-between',
        'md:gap-6',
        isHidden ? 'hidden' : ''
      )}
    >
      <Link
        href={href}
        className=''
        ref={buttonRef}
        onClick={() => playClick()}
      >
        <X
          size={32}
          className={clsx('hover:cursor-pointer duration-225 hover:scale-120')}
        />
      </Link>
      <button
        className={clsx(
          'md:w-1/2 p-4 text-3xl flex flex-row justify-center items-center gap-2',
          buttonBorderStyles,
          'group flex-1'
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
