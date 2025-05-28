'use client';
import { useState } from 'react';
import clsx from 'clsx';
import KanjiSet from './KanjiSet';
import N5Kanji from '@/static/kanji/N5';
import N4Kanji from '@/static/kanji/N4';
import N3Kanji from '@/static/kanji/N3';
import N2Kanji from '@/static/kanji/N2';
import { cardBorderStyles, buttonBorderStyles } from '@/static/styles';
import { useParams } from 'next/navigation';
import { chunkArray } from '@/lib/helperFunctions';
import { ChevronUp } from 'lucide-react';
import { useClick } from '@/lib/useAudio';
import useGridColumns from '@/lib/useGridColumns';

const vocabData = {
  n5: N5Kanji,
  n4: N4Kanji,
  n3: N3Kanji,
  n2: N2Kanji
};

const Subgroup = () => {
  const { playClick } = useClick();

  const params = useParams();
  const { subgroup } = params;

  const kanjiObjs = vocabData[subgroup as keyof typeof vocabData];

  const kanjiSetsTemp = new Array(80)
    .fill({})
    .slice(0, Math.ceil(kanjiObjs.length / 10))
    .map((obj, i) => ({
      name: `Set ${i + 1}`,
      start: i * 10,
      end: (i + 1) * 10,
      id: `set-${i + 1}`
    }));

  const [collapsedRows, setCollapsedRows] = useState<number[]>([]);

  const numColumns = useGridColumns();

  return (
    <div className='flex flex-col w-full gap-4'>
      {chunkArray(kanjiSetsTemp, numColumns).map((rowSets, rowIndex) => {
        const firstSetInRow = rowIndex * numColumns + 1;
        const lastSetInRow = (rowIndex + 1) * numColumns;

        return (
          <div key={`row-${rowIndex}`} className='flex flex-col gap-4'>
            {/* Clickable row header to toggle collapse */}
            <button
              onClick={() => {
                playClick();
                setCollapsedRows(prev =>
                  prev.includes(rowIndex)
                    ? prev.filter(i => i !== rowIndex)
                    : [...prev, rowIndex]
                );
              }}
              className={clsx(
                'group text-2xl text-left px-4 py-2',
                buttonBorderStyles,
                'flex flex-row items-center gap-1 rounded-xl',
                'hover:scale-y-105 hover:scale-x-101',
                'max-md:hidden'
              )}
            >
              <ChevronUp
                className={clsx(
                  'duration-250',
                  'text-[var(--border-color)]',
                  'max-md:group-active:text-[var(--text-color)]',
                  'md:group-hover:text-[var(--text-color)]',
                  collapsedRows.includes(rowIndex) && 'rotate-180'
                )}
                size={24}
              />
              Sets {firstSetInRow}-{lastSetInRow}
            </button>

            {/* Conditionally render the row content */}
            {!collapsedRows.includes(rowIndex) && (
              <div
                className={clsx(
                  'flex flex-col w-full gap-4',
                  'md:items-start md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'
                )}
              >
                {rowSets.map(kanjiSetTemp => (
                  <div
                    key={kanjiSetTemp.id + kanjiSetTemp.name}
                    className={clsx(
                      'flex flex-col gap-2 p-4 h-full',
                      cardBorderStyles
                    )}
                  >
                    <p className='text-2xl'>{kanjiSetTemp.name}</p>
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
