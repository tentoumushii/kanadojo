'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import useStatsStore from '@/store/useStatsStore';
// import useIndefiniteConfetti from '@/lib/hooks/useInfiniteConfetti';
import { Star } from 'lucide-react';
import clsx from 'clsx';

interface Checkpoint {
  position: number;
  label: string;
}

type CheckpointInput = number | Checkpoint;

interface ProgressBarProps {
  value?: number;
  max?: number;
  checkpoints?: CheckpointInput[];
}

const ProgressBar = ({
  max = 20
}: // checkpoints = [10, 25, 50, 75] // Default checkpoints at 25%, 50%, 75%
ProgressBarProps) => {
  const score = useStatsStore(state => state.score);
  const setScore = useStatsStore(state => state.setScore);

  const percentage = (score / max) * 100;

  const [stars, setStars] = useState(0);

  // const [active, setActive] = useState(false);

  // const emojiArray = ['🍹'];

  // useIndefiniteConfetti({ active, emojis: emojiArray });

  // console.log('active', active);
  // console.log('score', score);
  useEffect(() => {
    if (score >= max) {
      setScore(0);
      setStars(stars => stars + 1);
    }
  }, [score]);

  return (
    <div className='relative w-full mt-8 flex flex-col items-center gap-12'>
      {/* Progress Bar Background */}
      <div className='w-full bg-[var(--card-color)] rounded-full h-4 overflow-hidden relative'>
        {/* Progress Indicator */}
        <div
          className='bg-[var(--secondary-color)] h-4 rounded-full transition-all duration-500 z-2'
          style={{ width: `${percentage}%` }}
        />
        {/* Checkpoints */}
        {[25, 50, 75].map(cp => (
          <div
            key={cp}
            className='absolute top-0 h-4 w-1 bg-[var(--border-color)] z-0'
            style={{
              left: `calc(${cp}% - 2px)`, // Adjust for marker width
              zIndex: 2
            }}
          />
        ))}
      </div>
      <div className='flex gap-2'>
        <div className='grid grid-cols-5 md:grid-cols-10 lg:grid-cols-15 xl:grid-cols-20 gap-2'>
          {Array.from({ length: stars }, (_, index) => (
            <Star
              key={index}
              size={50}
              className={clsx(
                stars >= 15
                  ? 'motion-safe:animate-spin'
                  : stars >= 10
                  ? 'motion-safe:animate-bounce'
                  : stars >= 5
                  ? 'motion-safe:animate-pulse'
                  : '',

                'text-[var(--secondary-color)]'
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
