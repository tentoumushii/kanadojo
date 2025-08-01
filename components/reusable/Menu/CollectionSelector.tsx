'use client';
import clsx from 'clsx';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import { usePathname } from 'next/navigation';
import {
  N5KanjiLength,
  N4KanjiLength,
  N3KanjiLength,
  N2KanjiLength,
  N5VocabLength,
  N4VocabLength,
  N3VocabLength,
  N2VocabLength
} from '@/static/unitSets';
import { useClick } from '@/lib/hooks/useAudio';

const numCollectionSets = {
  '/kanji': {
    n5: Math.ceil(N5KanjiLength / 10),
    n4: Math.ceil(N4KanjiLength / 10),
    n3: Math.ceil(N3KanjiLength / 10),
    n2: Math.ceil(N2KanjiLength / 10)
  },
  '/vocabulary': {
    n5: Math.ceil(N5VocabLength / 10),
    n4: Math.ceil(N4VocabLength / 10),
    n3: Math.ceil(N3VocabLength / 10),
    n2: Math.ceil(N2VocabLength / 10)
  }
};

const CollectionSelector = () => {
  const { playClick } = useClick();

  const selectedKanjiCollection = useKanaKanjiStore(
    state => state.selectedKanjiCollection
  );
  const setSelectedKanjiCollection = useKanaKanjiStore(
    state => state.setSelectedKanjiCollection
  );

  const selectedVocabCollection = useVocabStore(
    state => state.selectedVocabCollection
  );
  const setSelectedVocabCollection = useVocabStore(
    state => state.setSelectedVocabCollection
  );

  const clearKanjiObjs = useKanaKanjiStore(state => state.clearKanjiObjs);
  const clearWordObjs = useVocabStore(state => state.clearWordObjs);

  const clearKanjiSets = useKanaKanjiStore(state => state.clearKanjiSets);
  const clearVocabSets = useVocabStore(state => state.clearVocabSets);

  const pathname = usePathname();

  const selectedCollection =
    pathname === '/kanji'
      ? selectedKanjiCollection
      : pathname === '/vocabulary'
      ? selectedVocabCollection
      : null;

  const setSelectedCollection =
    pathname === '/kanji'
      ? setSelectedKanjiCollection
      : pathname === '/vocabulary'
      ? setSelectedVocabCollection
      : () => {};

  const collections = [
    {
      name: 'n5',
      displayName: `Unit 1, Sets 1-${
        numCollectionSets[pathname as keyof typeof numCollectionSets].n5
      }`
    },
    {
      name: 'n4',
      displayName: `Unit 2, Sets ${
        numCollectionSets[pathname as keyof typeof numCollectionSets].n5 + 1
      }-${
        numCollectionSets[pathname as keyof typeof numCollectionSets].n5 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n4
      }`
    },
    {
      name: 'n3',
      displayName: `Unit 3, Sets ${
        numCollectionSets[pathname as keyof typeof numCollectionSets].n5 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n4 +
        1
      }-${
        numCollectionSets[pathname as keyof typeof numCollectionSets].n5 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n4 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n3
      }`
    },
    {
      name: 'n2',
      displayName: `Unit 4, Sets ${
        numCollectionSets[pathname as keyof typeof numCollectionSets].n5 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n4 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n3 +
        1
      }-${
        numCollectionSets[pathname as keyof typeof numCollectionSets].n5 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n4 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n3 +
        numCollectionSets[pathname as keyof typeof numCollectionSets].n2
      }`
    }
  ];

  return (
    <div
      className={clsx(
        'rounded-2xl bg-[var(--card-color)]',
        'duration-250',
        'transition-all ease-in-out',
        'flex flex-col md:flex-row',
        'w-full '
      )}
    >
      {collections.map((collection, i) => (
        <div key={i} className={clsx('flex flex-col md:flex-row', 'w-full ')}>
          <button
            key={i}
            className={clsx(
              'flex justify-center items-center gap-2.5 py-6',
              'text-[var(--main-color)] text-xl',
              'w-full',
              'hover:cursor-pointer',
              // 'hover:bg-[var(--border-color)]',
              i === 0 &&
                'max-md:rounded-tl-2xl max-md:rounded-tr-2xl md:rounded-tl-2xl md:rounded-bl-2xl',
              i === collections.length - 1 &&
                'max-md:rounded-bl-2xl max-md:rounded-br-2xl md:rounded-tr-2xl md:rounded-br-2xl',
              'duration-250',
              collection.name === selectedCollection &&
                'bg-[var(--border-color)]'
            )}
            onClick={() => {
              playClick();

              setSelectedCollection(collection.name);
              if (pathname === '/kanji') {
                clearKanjiObjs();
                clearKanjiSets();
              } else if (pathname === '/vocabulary') {
                clearWordObjs();
                clearVocabSets();
              }
            }}
          >
            {/* <span className='w-1/4 text-4xl flex justify-center items-center bg-[var(--secondary-color)] text-[var(--background-color)]'>
              {i+1}
            </span> */}
            <span className='text-[var(--secondary-color)] mb-0.5'>
              {collection.name === selectedCollection ? '\u2B24' : ''}
            </span>
            <span className='text-2xl'>
              {collection.displayName.split(', ')[0]}
            </span>
            {/* <span className='text-sm text-[var(--secondary-color)] pt-2'>
              {collection.displayName.split(', ')[1]}
            </span> */}
          </button>

          {i < collections.length - 1 && (
            <div
              className={clsx(
                'md:border-l-1 md:h-auto md:w-0',
                'border-[var(--border-color)]',
                'border-t-1 w-full border-[var(--border-color)]'
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CollectionSelector;
