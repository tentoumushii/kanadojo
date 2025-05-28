'use client';
import clsx from 'clsx';
import Banner from '@/components/reusable/Banner';
import { ISet, IWord } from '@/lib/interfaces';
import { cardBorderStyles } from '@/static/styles';
import N5Nouns from '@/static/vocab/jlpt/n5/nouns';
import N5Verbs from '@/static/vocab/jlpt/n5/verbs';
import N5Adjectives from '@/static/vocab/jlpt/n5/adjectives';
import N5Adverbs from '@/static/vocab/jlpt/n5/adverbs';

import N4Nouns from '@/static/vocab/jlpt/n4/nouns';
import N4Adjectives from '@/static/vocab/jlpt/n4/adjectives';
import N4Verbs from '@/static/vocab/jlpt/n4/verbs';
import N4Adverbs from '@/static/vocab/jlpt/n4/adverbs';

import N3Nouns from '@/static/vocab/jlpt/n3/nouns';
import N3Adjectives from '@/static/vocab/jlpt/n3/adjectives';
import N3Verbs from '@/static/vocab/jlpt/n3/verbs';
import N3Adverbs from '@/static/vocab/jlpt/n3/adverbs';

import N2Nouns from '@/static/vocab/jlpt/n2/nouns';
import N2Adjectives from '@/static/vocab/jlpt/n2/adjectives';
import N2Verbs from '@/static/vocab/jlpt/n2/verbs';
import N2Adverbs from '@/static/vocab/jlpt/n2/adverbs';

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
      nouns: N5Nouns,
      verbs: N5Verbs,
      adjectives: N5Adjectives,
      adverbs: N5Adverbs
    },
    n4: {
      nouns: N4Nouns,
      verbs: N4Verbs,
      adjectives: N4Adjectives,
      adverbs: N4Adverbs
    },
    n3: {
      nouns: N3Nouns,
      adjectives: N3Adjectives,
      verbs: N3Verbs,
      adverbs: N3Adverbs
    },
    n2: {
      nouns: N2Nouns,
      adjectives: N2Adjectives,
      verbs: N2Verbs,
      adverbs: N2Adverbs
    }
  },
  joyo: {}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VocabData = Record<string, Record<string, any>>;

const SetDictionary = ({ group, subgroup, wordClass, set }: ISet) => {
  const sliceRange =
    vocabSetSliceRanges[set as keyof typeof vocabSetSliceRanges];

  return (
    <div className='min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-60 flex flex-col gap-4 pb-10'>
      <Banner
        subheading={`${group.toUpperCase()} ${subgroup.toUpperCase()}, ${wordClass.toUpperCase()}, ${set
          .split('-')
          .join('  ')
          .toUpperCase()}`}
      />
      <div className={clsx('flex flex-col', cardBorderStyles)}>
        {(vocabData as VocabData)[group][subgroup][wordClass]
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
                    'bg-[var(--border-color)] text-lg'
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
