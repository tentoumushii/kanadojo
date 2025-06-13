'use client';
import clsx from 'clsx';
import useVocabStore from '@/store/useVocabStore';
import { useState } from 'react';
import useThemeStore from '@/store/useThemeStore';
import { useClick } from '@/lib/useAudio';
import { miniButtonBorderStyles } from '@/static/styles';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Search, MousePointer } from 'lucide-react';

const WordSet = ({
  words,
  setName
}: {
  words: {
    word: string;
    reading: string;
    displayMeanings: string[];
    meanings: string[];
  }[];
  setName: string;
}) => {
  const params = useParams();
  const { group, subgroup, wordClass } = params;

  const { playClick } = useClick();

  const selectedWordObjs = useVocabStore(state => state.selectedWordObjs);
  const addWord = useVocabStore(state => state.addWordObj);
  const addWords = useVocabStore(state => state.addWordObjs);
  const displayKana = useThemeStore(state => state.displayKana);

  const [focusedWord, setFocusedWord] = useState('');

  return (
    <fieldset className='font-bold flex flex-col items-start gap-3'>
      {words.map((wordObj, i) => (
        <div key={wordObj.word} className='w-full flex flex-col gap-3'>
          <label
            className='w-full flex flex-row items-center gap-2 '
            onClick={() => playClick()}
          >
            <input
              type='checkbox'
              value={wordObj.word}
              checked={selectedWordObjs
                .map(currentWordObj => currentWordObj.word)
                .includes(wordObj.word)}
              onChange={e => {
                e.currentTarget.blur();
                addWord(wordObj);
              }}
            />
            <span
              className='group relative grid w-full font-normal  min-h-auto place-items-start hover:cursor-pointer'
              onTouchStart={() => setFocusedWord(wordObj.word)}
            >
              {/* Japanese word (centered vertically, appears on hover) */}
              <span
                className={clsx(
                  'row-start-1 col-start-1  transition-opacity duration-200  z-10 flex items-center justify-center h-full text-4xl pb-2 ',
                  displayKana
                    ? 'md:group-hover:opacity-0 md:opacity-100'
                    : 'md:group-hover:opacity-100 md:opacity-0',
                  displayKana
                    ? focusedWord === wordObj.word
                      ? 'max-md:opacity-0'
                      : 'max-md:opacity-100'
                    : focusedWord === wordObj.word
                    ? 'max-md:opacity-100'
                    : 'max-md:opacity-0'
                )}
              >
                {wordObj.word}
              </span>
              {/* English meanings (default position, hides on hover) */}
              <span
                className={clsx(
                  'row-start-1 col-start-1  transition-opacity duration-200  text-xl flex items-center justify-center h-full ',
                  displayKana
                    ? 'md:group-hover:opacity-100 md:opacity-0'
                    : 'md:group-hover:opacity-0 md:opacity-100',
                  displayKana
                    ? focusedWord === wordObj.word
                      ? 'max-md:opacity-100'
                      : 'max-md:opacity-0'
                    : focusedWord === wordObj.word
                    ? 'max-md:opacity-0'
                    : 'max-md:opacity-100'
                )}
              >
                {wordObj.displayMeanings.join(', ')}
              </span>
            </span>
          </label>

          {i !== words.length - 1 && (
            <hr className='w-full border-t-1 border-[var(--border-color)]' />
          )}
        </div>
      ))}
      <div className='flex flex-row gap-2 w-full'>
        <button
          type='button'
          className={clsx(
            'p-2 duration-225 hover:scale-105 font-normal text-lg flex-none',
            miniButtonBorderStyles,
            'flex flex-row justify-center items-center gap-1.5'
          )}
          onClick={e => {
            playClick();
            e.currentTarget.blur();
            addWords(words);
          }}
        >
          <span>select</span>
          <MousePointer size={22} />
        </button>
        <Link
          href={`/vocabulary/${group}/${subgroup}/${wordClass}/${setName
            .split(' ')
            .join('-')
            .toLowerCase()}`}
          className='flex-1 group'
        >
          <button
            className={clsx(
              'flex flex-row justify-center items-center gap-1.5 p-2 w-full font-normal',
              miniButtonBorderStyles
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

export default WordSet;
