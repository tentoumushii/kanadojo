'use client';
import useStatsStore from '@/store/useStatsStore';

const useStats = () => {
  const incrementCorrectAnswers = useStatsStore(
    state => state.incrementCorrectAnswers
  );
  const incrementWrongAnswers = useStatsStore(
    state => state.incrementWrongAnswers
  );
  const addCharacterToHistory = useStatsStore(
    state => state.addCharacterToHistory
  );
  const characterHistory = useStatsStore(state => state.characterHistory);
  const addCorrectAnswerTime = useStatsStore(
    state => state.addCorrectAnswerTime
  );
  const correctAnswerTimes = useStatsStore(state => state.correctAnswerTimes);

  const incrementCharacterScore = useStatsStore(
    state => state.incrementCharacterScore
  );

  return {
    incrementCorrectAnswers,
    incrementWrongAnswers,
    addCharacterToHistory,
    characterHistory,
    addCorrectAnswerTime,
    correctAnswerTimes,
    incrementCharacterScore
  };
};

export default useStats;
