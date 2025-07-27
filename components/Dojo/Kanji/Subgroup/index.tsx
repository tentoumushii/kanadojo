'use client';
import { useState } from 'react';
import clsx from 'clsx';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import { cardBorderStyles,  } from '@/static/styles';
import { chunkArray } from '@/lib/helperFunctions';
import {
  ChevronUp,
  Boxes,
  MousePointer,
  CircleCheck,
  Circle,
} from 'lucide-react';
import { useClick } from '@/lib/hooks/useAudio';
import useGridColumns from '@/lib/hooks/useGridColumns';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import KanjiSetDictionary from '@/components/Dojo/Kanji/SetDictionary';

const vocabData = {
  n5: N5Kanji,
  n4: N4Kanji,
  n3: N3Kanji,
  n2: N2Kanji,
};

const Subgroup = () => {
  const selectedKanjiCollection = useKanaKanjiStore(
    state => state.selectedKanjiCollection
  );
  const selectedKanjiSets = useKanaKanjiStore(state => state.selectedKanjiSets);
  const setSelectedKanjiSets = useKanaKanjiStore(
    state => state.setSelectedKanjiSets
  );
  const addKanjiObjs = useKanaKanjiStore(state => state.addKanjiObjs);

  const selectedKanjiObjs = useKanaKanjiStore(state => state.selectedKanjiObjs);
  console.log('selectedKanjiObjs', selectedKanjiObjs);

  const { playClick } = useClick();

  const kanjiObjs =
    vocabData[selectedKanjiCollection as keyof typeof vocabData];

  const kanjiSetsTemp = new Array(80)
    .fill({})
    .slice(0, Math.ceil(kanjiObjs.length / 10))
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
      {chunkArray(kanjiSetsTemp, numColumns).map((rowSets, rowIndex) => {
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
              <Boxes
                className=" text-[var(--secondary-color)]"
                size={28}
              />
              Sets {firstSetInRow}-{lastSetInRow}
            </h3>

            {/* Conditionally render the row content */}
            {!collapsedRows.includes(rowIndex) && (
              <div
                className={clsx(
                  'flex flex-col w-full',
                  'md:items-start md:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'
                )}
              >
                {rowSets.map((kanjiSetTemp, i) => (
                  <div
                    key={kanjiSetTemp.id + kanjiSetTemp.name}
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

                        selectedKanjiSets.includes(kanjiSetTemp.name) &&
                          'bg-[var(--border-color)]'
                      )}
                      onClick={e => {
                        e.currentTarget.blur();

                        playClick();
                        if (selectedKanjiSets.includes(kanjiSetTemp.name)) {
                          setSelectedKanjiSets(
                            selectedKanjiSets.filter(
                              set => set !== kanjiSetTemp.name
                            )
                          );
                          addKanjiObjs(
                            kanjiObjs.slice(
                              kanjiSetTemp.start,
                              kanjiSetTemp.end
                            )
                          );
                        } else {
                          setSelectedKanjiSets([
                            ...new Set(
                              selectedKanjiSets.concat(kanjiSetTemp.name)
                            ),
                          ]);
                          addKanjiObjs(
                            kanjiObjs.slice(
                              kanjiSetTemp.start,
                              kanjiSetTemp.end
                            )
                          );
                        }
                      }}
                    >
                      {selectedKanjiSets.includes(kanjiSetTemp.name) ? (
                        <CircleCheck className="mt-0.5 text-[var(--secondary-color)]" />
                      ) : (
                        <Circle className="mt-0.5 text-[var(--secondary-color)]" />
                      )}
                      {kanjiSetTemp.name}
                      <MousePointer className="mt-0.5 text-[var(--secondary-color)] " />
                    </button>
                    <KanjiSetDictionary set={kanjiSetTemp.name} />
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

export default Subgroup;
