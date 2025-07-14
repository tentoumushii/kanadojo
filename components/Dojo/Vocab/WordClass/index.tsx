'use client';
import clsx from 'clsx';
import WordSet from './WordSet';
import { chunkArray } from '@/lib/helperFunctions';
import { useState } from 'react';
import { cardBorderStyles } from '@/static/styles';
import useGridColumns from '@/lib/hooks/useGridColumns';
import { useClick } from '@/lib/hooks/useAudio';
import { ChevronUp, Boxes } from 'lucide-react';
import useVocabStore from '@/store/useVocabStore';

import N5Nouns from '@/static/vocab/jlpt/n5/nouns';
import N5Adjectives from '@/static/vocab/jlpt/n5/adjectives';
import N5Verbs from '@/static/vocab/jlpt/n5/verbs';
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

const vocabData = {
  jlpt: {
    n5: {
      nouns: N5Nouns,
      verbs: N5Verbs,
      adjectives: N5Adjectives,
      adverbs: N5Adverbs,
    },
    n4: {
      nouns: N4Nouns,
      verbs: N4Verbs,
      adjectives: N4Adjectives,
      adverbs: N4Adverbs,
    },
    n3: {
      nouns: N3Nouns,
      adjectives: N3Adjectives,
      verbs: N3Verbs,
      adverbs: N3Adverbs,
    },
    n2: {
      nouns: N2Nouns,
      adjectives: N2Adjectives,
      verbs: N2Verbs,
      adverbs: N2Adverbs,
    },
  },
  joyo: {},
};

const WordClass = () => {
  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );

  const { playClick } = useClick();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const words = (vocabData['jlpt'] as any)[selectedVocabCollection]['nouns'];

  const vocabSetsTemp = new Array(80)
    .fill({})
    .slice(0, Math.ceil(words.length / 10))
    .map((obj, i) => ({
      name: `Set ${i + 1}`,
      start: i * 10,
      end: (i + 1) * 10,
      id: `set-${i + 1}`,
    }));

  const [collapsedRows, setCollapsedRows] = useState<number[]>([]);

  const numColumns = useGridColumns();

  return (
    <div className="flex flex-col w-full gap-4">
      {chunkArray(vocabSetsTemp, numColumns).map((rowSets, rowIndex) => {
        const firstSetInRow = rowIndex * numColumns + 1;
        const lastSetInRow = (rowIndex + 1) * numColumns;

        return (
          <div
            key={`row-${rowIndex}`}
            className={clsx('flex flex-col py-4 gap-4', cardBorderStyles)}
          >
            {/* Clickable row header to toggle collapse */}
            <h3
              onClick={() => {
                playClick();
                setCollapsedRows(prev =>
                  prev.includes(rowIndex)
                    ? prev.filter(i => i !== rowIndex)
                    : [...prev, rowIndex]
                );
              }}
              className={clsx(
                'group text-3xl ml-4 ',
                'flex flex-row items-center gap-2 rounded-xl hover:cursor-pointer',

                collapsedRows.includes(rowIndex) && 'mb-1.5'
              )}
            >
              <ChevronUp
                className={clsx(
                  'duration-250',
                  'text-[var(--border-color)]',
                  'max-md:group-active:text-[var(--text-color)]',
                  'md:group-hover:text-[var(--text-color)] mt-0.5',
                  collapsedRows.includes(rowIndex) && 'rotate-180'
                )}
                size={24}
              />
              Sets {firstSetInRow}-{lastSetInRow}
              <Boxes
                className="mt-1.5 text-[var(--secondary-color)]"
                size={28}
              />
            </h3>

            {/* Conditionally render the row content */}
            {!collapsedRows.includes(rowIndex) && (
              <div
                className={clsx(
                  'flex flex-col w-full',
                  'md:items-start md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'
                )}
              >
                {rowSets.map(vocabSetTemp => (
                  <div
                    key={vocabSetTemp.id + vocabSetTemp.name}
                    className={clsx(
                      'flex flex-col gap-2 px-4  h-full',
                      'border-[var(--border-color)] md:border-r-1'
                    )}
                  >
                    <p className="text-2xl">{vocabSetTemp.name}</p>
                    <WordSet
                      words={words.slice(vocabSetTemp.start, vocabSetTemp.end)}
                      setName={vocabSetTemp.name}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WordClass;
