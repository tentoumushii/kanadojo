'use client';
import clsx from 'clsx';
import useKanaKanjiStore from '@/store/useKanaKanjiStore';
import useVocabStore from '@/store/useVocabStore';
import { usePathname } from 'next/navigation';

const CollectionSelector = () => {
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
    {name: 'n5', displayName: 'Unit 1'},
    {name: 'n4', displayName: 'Unit 2'},
    {name: 'n3', displayName: 'Unit 3'},
    {name: 'n2', displayName: 'Unit 4'},
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
        <>
          <button
            key={i}
            className={clsx(
              'flex justify-center items-center gap-2 py-6 text-xl',
              'text-[var(--main-color)] ',
              'w-full',
              'hover:cursor-pointer',
              'hover:bg-[var(--border-color)]',
              i === 0 && 'rounded-tl-2xl rounded-bl-2xl',
              i === collections.length - 1 && 'rounded-tr-2xl rounded-br-2xl',
              'duration-250'
            )}
            onClick={() =>
              setSelectedCollection(collection.name)
            }
          >
            <span className="text-[var(--secondary-color)]">
              {collection.name === selectedCollection
                ? '\u2B24'
                : ''}
            </span>
            <span className="text-2xl">
              {collection.displayName}
            </span>
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
        </>
      ))}
    </div>
  );
};

export default CollectionSelector;
