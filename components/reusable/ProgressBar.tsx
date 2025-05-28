'use client';
import { useEffect, useState } from 'react';
import useStatsStore from '@/store/useStatsStore';
import useIndefiniteConfetti from '@/lib/hooks/useInfiniteConfetti';

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
  max = 5
}: // checkpoints = [10, 25, 50, 75] // Default checkpoints at 25%, 50%, 75%
ProgressBarProps) => {
  const score = useStatsStore(state => state.score);

  const percentage = (score / max) * 100;
  const [active, setActive] = useState(false);

  const emojiArray = ['🍹'];

  useIndefiniteConfetti({ active, emojis: emojiArray });

  console.log('active', active);
  console.log('score', score);
  useEffect(() => {
    if (score >= max) setActive(true);
  }, [score]);

  return (
    <div className='relative w-full mt-8'>
      {/* Progress Bar Background */}
      <div className='w-full bg-[var(--border-color)] rounded-full h-4 overflow-hidden'>
        {/* Progress Indicator */}
        <div
          className='bg-[var(--main-color)] h-4 rounded-full transition-all duration-300'
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Checkpoints Container - removed flex and justify-between */}
    </div>
  );
};

export default ProgressBar;
