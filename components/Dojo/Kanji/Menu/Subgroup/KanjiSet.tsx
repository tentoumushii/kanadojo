'use client';
import clsx from 'clsx';
import { useState } from 'react';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useThemeStore from '@/store/useThemeStore';
import { useClick } from '@/lib/useAudio';
import { miniButtonBorderStyles } from '@/static/styles';
import { Search, MousePointer } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const KanjiSet = ({
  kanjiList,
  setName: setName
}: {
  kanjiList: {
    id: number;
    kanjiChar: string;
    onyomi: string[];
    kunyomi: string[];
    displayMeanings: string[];
    fullDisplayMeanings: string[];
    meanings: string[];
  }[];
  setName: string;
}) => {
  const params = useParams();

  const { group, subgroup } = params;

  const { playClick } = useClick();

  const selectedKanjiObjs = useKanaKanjiStore(state => state.selectedKanjiObjs);
  const addKanji = useKanaKanjiStore(state => state.addKanjiObj);
  const addKanjis = useKanaKanjiStore(state => state.addKanjiObjs);
  const displayKana = useThemeStore(state => state.displayKana);

  const [focusedKanjiChar, setFocusedKanjiChar] = useState('');

  const [highlightSet, setHighlightSet] = useState(false);

  return (
    <fieldset
      className='font-bold flex flex-col items-start gap-3'
      onMouseEnter={() => setHighlightSet(true)}
      onMouseLeave={() => setHighlightSet(false)}
    >
      {kanjiList.map((kanjiObj, i) => (
        <div key={kanjiObj.kanjiChar} className='w-full flex flex-col gap-3'>
          <label
            className={clsx(
              'w-full flex flex-row items-center gap-2',
              'duration-200 transition-colors ease-in-out',
              highlightSet
                ? 'text-[var(--main-color)]'
                : 'text-[var(--secondary-color)]'
            )}
            onClick={() => playClick()}
          >
            <input
              type='checkbox'
              value={kanjiObj.kanjiChar}
              checked={selectedKanjiObjs
                .map(currentKanjiObj => currentKanjiObj.kanjiChar)
                .includes(kanjiObj.kanjiChar)}
              onChange={e => {
                e.currentTarget.blur();
                addKanji(kanjiObj);
              }}
            />
            <span
              className='group relative grid w-full font-normal  min-h-auto place-items-start hover:cursor-pointer'
              onTouchStart={() => setFocusedKanjiChar(kanjiObj.kanjiChar)}
            >
              {/* Japanese word (centered vertically, appears on hover) */}
              <span
                className={clsx(
                  'row-start-1 col-start-1 transition-opacity duration-200  z-10 flex items-center justify-center h-full text-4xl pb-2 ',
                  displayKana
                    ? 'md:group-hover:opacity-0 md:opacity-100'
                    : 'md:group-hover:opacity-100 md:opacity-0',
                  displayKana
                    ? focusedKanjiChar === kanjiObj.kanjiChar
                      ? 'max-md:opacity-0'
                      : 'max-md:opacity-100'
                    : focusedKanjiChar === kanjiObj.kanjiChar
                    ? 'max-md:opacity-100'
                    : 'max-md:opacity-0'
                )}
              >
                {kanjiObj.kanjiChar}
              </span>
              {/* English meanings (default position, hides on hover) */}
              <span
                className={clsx(
                  'row-start-1 col-start-1  transition-opacity duration-200  text-xl flex items-center justify-center h-full ',
                  displayKana
                    ? 'md:group-hover:opacity-100 md:opacity-0'
                    : 'md:group-hover:opacity-0 md:opacity-100',
                  displayKana
                    ? focusedKanjiChar === kanjiObj.kanjiChar
                      ? 'max-md:opacity-100'
                      : 'max-md:opacity-0'
                    : focusedKanjiChar === kanjiObj.kanjiChar
                    ? 'max-md:opacity-0'
                    : 'max-md:opacity-100'
                )}
              >
                {kanjiObj.displayMeanings.join(', ')}
              </span>
            </span>
          </label>
          {i !== kanjiList.length - 1 && (
            <hr className='w-full border-t-1 border-[var(--border-color)]' />
          )}
        </div>
      ))}
      <div className='flex flex-row gap-2 w-full'>
        <button
          type='button'
          className={clsx(
            'p-2 font-normal text-lg flex-none',
            miniButtonBorderStyles,
            'border-b-4 border-[var(--border-color)] hover:border-[var(--secondary-color)]',
            'flex flex-row justify-center items-center gap-1.5'
          )}
          onClick={e => {
            playClick();
            e.currentTarget.blur();
            addKanjis(kanjiList);
          }}
        >
          <span>select</span>
          <MousePointer size={22} />
        </button>
        <Link
          href={`/kanji/${group}/${subgroup}/${setName
            .split(' ')
            .join('-')
            .toLowerCase()}`}
          className='flex-1 group'
        >
          <button
            className={clsx(
              'flex flex-row justify-center items-center gap-1.5 p-2 w-full font-normal',
              miniButtonBorderStyles,
              'border-b-4 border-[var(--border-color)] hover:border-[var(--secondary-color)]'
            )}
            onClick={() => playClick()}
          >
            <span className='text-lg group-hover:underline'>inspect</span>
            <Search size={22} />
          </button>
        </Link>
      </div>
    </fieldset>
  );
};

export default KanjiSet;
