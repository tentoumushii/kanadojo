'use client';
import { useEffect } from 'react';
import useStatsStore from '@/store/useStatsStore';
// import useIndefiniteConfetti from '@/lib/hooks/useInfiniteConfetti';
// import { Star } from 'lucide-react';

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

  const stars = useStatsStore(state => state.stars);
  const setStars = useStatsStore(state => state.setStars);

  const percentage = (score / max) * 100;

  // const [active, setActive] = useState(false);

  // const emojiArray = ['🍹'];

  // useIndefiniteConfetti({ active, emojis: emojiArray });

  // console.log('active', active);
  // console.log('score', score);
  useEffect(() => {
    if (score >= max) {
      setScore(0);
      setStars(stars + 1);
    }
  }, [score]);

  return (
    <div className='relative w-full flex flex-col items-center gap-12'>
      {/* Progress Bar Background */}
      <div className='w-full bg-[var(--card-color)] rounded-full h-4 overflow-hidden relative'>
        {/* Progress Indicator */}
        <div
          className='bg-[var(--secondary-color)] h-4 rounded-full transition-all duration-500 z-10 relative'
          style={{ width: `${percentage}%` }}
        />
        {/* Checkpoints */}
        {[25, 50, 75].map(cp => (
          <div
            key={cp}
            className='absolute top-0 h-4 w-0 bg-[var(--border-color)] z-0'
            style={{
              left: `calc(${cp}% - 2px)` // Adjust for marker width
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
