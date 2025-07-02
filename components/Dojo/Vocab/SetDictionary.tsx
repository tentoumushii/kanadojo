'use client';
import clsx from 'clsx';
import Banner from '@/components/reusable/Banner';
import { IWord, ISet } from '@/lib/interfaces';
import { cardBorderStyles } from '@/static/styles';
import useVocabStore from '@/store/useVocabStore';
import { useParams } from 'next/navigation';

import N5Nouns from '@/static/vocab/jlpt/n5/nouns';

import N4Nouns from '@/static/vocab/jlpt/n4/nouns';

import N3Nouns from '@/static/vocab/jlpt/n3/nouns';

import N2Nouns from '@/static/vocab/jlpt/n2/nouns';

const createVocabSetRanges = (numSets: number) =>
  Array.from({ length: numSets }, (_, i) => i + 1).reduce(
    (acc, curr) => ({
      ...acc,
      [`set-${curr}`]: [(curr - 1) * 10, curr * 10]
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
  },
  joyo: {}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VocabData = Record<string, Record<string, any>>;

const SetDictionary = () => {
  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );

  const jlptToCollectionMap = {
    n5: 'Collection 1',
    n4: 'Collection 2',
    n3: 'Collection 3',
    n2: 'Collection 4'
  };

  const params = useParams();
  const { set } = params as unknown as ISet;

  const sliceRange =
    vocabSetSliceRanges[set as keyof typeof vocabSetSliceRanges];

  return (
    <div className='min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-60 flex flex-col gap-4 pb-10'>
      <Banner
        subheading={`Vocabulary 語彙, ${
          jlptToCollectionMap[
            selectedVocabCollection as keyof typeof jlptToCollectionMap
          ]
        }, ${set.split('-').join(' ').toUpperCase()}`}
      />
      <div className={clsx('flex flex-col', cardBorderStyles)}>
        {(vocabData as VocabData)['jlpt'][selectedVocabCollection]['nouns']
          .slice(sliceRange[0], sliceRange[1])
          .map((wordObj: IWord, i: number) => (
            <div
              key={wordObj.word}
              className={clsx(
                'flex flex-col md:flex-row justify-start items-start gap-4 p-4 ',
                i !== 9 && 'border-b-1 border-[var(--border-color)]'
              )}
            >
              <p lang='ja' className='text-6xl'>
                {wordObj.word}
              </p>
              <div className='flex flex-col gap-2 items-start'>
                <span
                  className={clsx(
                    'rounded-lg px-2 py-0.5 flex flex-row items-center',
                    'bg-[var(--border-color)] text-lg',
                    'text-[var(--secondary-color)] '
                  )}
                >
                  {wordObj.reading}
                </span>
                <p className='text-xl md:text-2xl'>
                  {wordObj.displayMeanings.join(', ')}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SetDictionary;
