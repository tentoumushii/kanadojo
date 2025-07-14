'use client';
import { useState } from 'react';
import clsx from 'clsx';
import KanjiSet from './KanjiSet';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import { cardBorderStyles } from '@/static/styles';
import { chunkArray } from '@/lib/helperFunctions';
import { ChevronUp, Boxes, BookMarked } from 'lucide-react';
import { useClick } from '@/lib/hooks/useAudio';
import useGridColumns from '@/lib/hooks/useGridColumns';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';

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
                {rowSets.map(kanjiSetTemp => (
                  <div
                    key={kanjiSetTemp.id + kanjiSetTemp.name}
                    className={clsx(
                      'flex flex-col gap-2 px-4  h-full',
                      'border-[var(--border-color)] md:border-r-1'
                    )}
                  >
                    <p className="text-2xl flex items-center gap-1.5">
                      {kanjiSetTemp.name}{' '}
                      <BookMarked className="mt-0.5 text-[var(--secondary-color)]" />
                    </p>
                    <KanjiSet
                      kanjiList={kanjiObjs.slice(
                        kanjiSetTemp.start,
                        kanjiSetTemp.end
                      )}
                      setName={kanjiSetTemp.name}
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

export default Subgroup;
