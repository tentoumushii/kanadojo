'use client';
import clsx from 'clsx';
import { chunkArray } from '@/lib/helperFunctions';
import { useState } from 'react';
import { cardBorderStyles } from '@/static/styles';
import useGridColumns from '@/lib/hooks/useGridColumns';
import { useClick } from '@/lib/hooks/useAudio';
import {
  ChevronUp,
  Boxes,
  CircleCheck,
  Circle,
  MousePointer,
} from 'lucide-react';
import useVocabStore from '@/store/useVocabStore';
import VocabSetDictionary from '@/components/Dojo/Vocab/SetDictionary';

import N5Nouns from '@/static/vocab/jlpt/n5/nouns';
import N4Nouns from '@/static/vocab/jlpt/n4/nouns';
import N3Nouns from '@/static/vocab/jlpt/n3/nouns';
import N2Nouns from '@/static/vocab/jlpt/n2/nouns';

const vocabData = {
  jlpt: {
    n5: {
      nouns: N5Nouns,
    },
    n4: {
      nouns: N4Nouns,
    },
    n3: {
      nouns: N3Nouns,
    },
    n2: {
      nouns: N2Nouns,
    },
  },
  joyo: {},
};

const WordClass = () => {
  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );

  const selectedVocabSets = useVocabStore(state => state.selectedVocabSets);
  const setSelectedVocabSets = useVocabStore(
    state => state.setSelectedVocabSets
  );
  const addWordObjs = useVocabStore(state => state.addWordObjs);

  const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);
  console.log('selectedWordObjs', selectedWordObjs);

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

                  'md:items-start md:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'
                )}
              >
                {rowSets.map((vocabSetTemp, i) => (
                  <div
                    key={vocabSetTemp.id + vocabSetTemp.name}
                    className={clsx(
                      'flex flex-col px-4 h-full',
                      'border-[var(--border-color)]',
                      i < rowSets.length - 1 && 'md:border-r-1'
                    )}
                  >
                    <button
                      className={clsx(
                        'text-2xl flex justify-center items-center gap-2 group',
                        // miniButtonBorderStyles,
                        'rounded-xl bg-[var(--background-color)] hover:cursor-pointer',
                        'duration-250',
                        'transition-all ease-in-out',

                        'px-2 py-3',

                        selectedVocabSets.includes(vocabSetTemp.name) &&
                          'bg-[var(--border-color)]'
                      )}
                      onClick={e => {
                        e.currentTarget.blur();

                        playClick();
                        if (selectedVocabSets.includes(vocabSetTemp.name)) {
                          setSelectedVocabSets(
                            selectedVocabSets.filter(
                              set => set !== vocabSetTemp.name
                            )
                          );
                          addWordObjs(
                            words.slice(vocabSetTemp.start, vocabSetTemp.end)
                          );
                        } else {
                          setSelectedVocabSets([
                            ...new Set(
                              selectedVocabSets.concat(vocabSetTemp.name)
                            ),
                          ]);
                          addWordObjs(
                            words.slice(vocabSetTemp.start, vocabSetTemp.end)
                          );
                        }
                      }}
                    >
                      {selectedVocabSets.includes(vocabSetTemp.name) ? (
                        <CircleCheck className="mt-0.5 text-[var(--secondary-color)]" />
                      ) : (
                        <Circle className="mt-0.5 text-[var(--secondary-color)]" />
                      )}
                      {vocabSetTemp.name}
                      <MousePointer className="mt-0.5 text-[var(--secondary-color)] " />
                    </button>
                    <VocabSetDictionary set={vocabSetTemp.name} />
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
