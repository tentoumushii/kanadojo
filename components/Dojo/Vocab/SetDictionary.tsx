'use client';
import clsx from 'clsx';
import { IWord } from '@/lib/interfaces';
import { cardBorderStyles } from '@/static/styles';
import useVocabStore from '@/store/useVocabStore';

import N5Nouns from '@/static/vocab/jlpt/n5/nouns';
import N4Nouns from '@/static/vocab/jlpt/n4/nouns';
import N3Nouns from '@/static/vocab/jlpt/n3/nouns';
import N2Nouns from '@/static/vocab/jlpt/n2/nouns';

const createVocabSetRanges = (numSets: number) =>
  Array.from({ length: numSets }, (_, i) => i + 1).reduce(
    (acc, curr) => ({
      ...acc,
      [`Set ${curr}`]: [(curr - 1) * 10, curr * 10]
    }),
    {}
  );

const vocabSetSliceRanges = createVocabSetRanges(200);

const vocabData = {
  jlpt: {
    n5: {
      nouns: N5Nouns
    },
    n4: {
      nouns: N4Nouns
    },
    n3: {
      nouns: N3Nouns
    },
    n2: {
      nouns: N2Nouns
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VocabData = Record<string, Record<string, any>>;

const SetDictionary = ({ set }: { set: string }) => {
  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );
  const displayVocabCollection = (vocabData as VocabData)['jlpt'][
    selectedVocabCollection
  ]['nouns'];

  const sliceRange =
    vocabSetSliceRanges[set as keyof typeof vocabSetSliceRanges];

  return (
    <div className={clsx('flex flex-col', cardBorderStyles)}>
      {displayVocabCollection
        .slice(sliceRange[0], sliceRange[1])
        .map((wordObj: IWord, i: number) => (
          <div
            key={wordObj.word}
            className={clsx(
              'flex flex-col justify-start items-start gap-4 py-4 max-md:px-4',
              i !== 9 && 'border-b-1 border-[var(--border-color)]'
            )}
          >
            <p lang='ja' className='text-6xl md:text-5xl'>
              {wordObj.word}
            </p>
            <div className='flex flex-col gap-2 items-start'>
              <span
                className={clsx(
                  'rounded-lg px-2 py-1 flex flex-row items-center',
                  'bg-[var(--border-color)] text-lg',
                  'text-[var(--secondary-color)] '
                )}
              >
                {wordObj.reading}
              </span>
              <p className='text-xl md:text-2xl text-[var(--secondary-color)]'>
                {wordObj.displayMeanings.join(', ')}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SetDictionary;
