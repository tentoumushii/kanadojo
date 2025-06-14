'use client';
import clsx from 'clsx';
import { useState } from 'react';
import Subset from './Subset';
import { useClick } from '@/lib/useAudio';
import { cardBorderStyles } from '@/static/styles';
import { ChevronUp } from 'lucide-react';

const Hiragana = () => {
  const { playClick } = useClick();

  const kanaGroups = [
    {
      name: 'Hiragana ひらがな',
      subsets: [
        {
          name: 'HBase',
          sliceRange: [0, 10]
        },
        {
          name: 'HDakuon',
          sliceRange: [10, 15]
        },
        {
          name: 'HYoon',
          sliceRange: [15, 26]
        }
      ]
    },
    {
      name: 'Katakana カタカナ',
      subsets: [
        {
          name: 'KBase',
          sliceRange: [26, 36]
        },
        {
          name: 'KDakuon',
          sliceRange: [36, 41]
        },
        {
          name: 'KYoon',
          sliceRange: [41, 52]
        },
        {
          name: 'KForeign Sounds',
          sliceRange: [52, 60]
        }
      ]
    }
  ];

  const [hiddenSubsets, setHiddenSubsets] = useState<string[]>([
    'hdakuon',
    'hyoon',
    'kdakuon',
    'kyoon',
    'kforeign sounds'
  ]);

  return (
    <div className='flex flex-col gap-4 xs:flex-row xs:items-start w-full'>
      {kanaGroups.map(kanaGroup => (
        <form
          className={clsx(
            'flex flex-col w-full gap-2 xs:w-1/2 p-4 rounded-2xl',
            cardBorderStyles
          )}
          key={kanaGroup.name}
        >
          <legend
            className={clsx(
              'group text-2xl hover:cursor-pointer',
              'flex flex-row items-center gap-1'
            )}
            onClick={() => {
              playClick();
              if (hiddenSubsets.includes(kanaGroup.name.toLowerCase())) {
                const filteredHiddenSubsets = hiddenSubsets.filter(
                  subset => subset !== kanaGroup.name.toLowerCase()
                );
                setHiddenSubsets(filteredHiddenSubsets);
                return;
              }
              setHiddenSubsets([
                ...hiddenSubsets,
                kanaGroup.name.toLowerCase()
              ]);
            }}
          >
            <ChevronUp
              className={clsx(
                'duration-300',
                'text-[var(--border-color)]',
                'max-md:group-active:text-[var(--text-color)]',
                'md:group-hover:text-[var(--text-color)]',
                hiddenSubsets.includes(kanaGroup.name.toLowerCase()) &&
                  'rotate-180'
              )}
            />
            <span>{kanaGroup.name}</span>
          </legend>
          {!hiddenSubsets.includes(kanaGroup.name.toLowerCase()) &&
            kanaGroup.subsets.map((subset, i) => (
              <div key={i} className='flex flex-col w-full gap-2'>
                <div>
                  <h4
                    className={clsx(
                      'group text-xl hover:cursor-pointer',
                      'flex flex-row items-center gap-1'
                    )}
                    onClick={() => {
                      playClick();

                      if (hiddenSubsets.includes(subset.name.toLowerCase())) {
                        const filteredHiddenSubsets = hiddenSubsets.filter(
                          currentSubset =>
                            currentSubset !== subset.name.toLowerCase()
                        );
                        setHiddenSubsets(filteredHiddenSubsets);
                        return;
                      }
                      setHiddenSubsets([
                        ...hiddenSubsets,
                        subset.name.toLowerCase()
                      ]);
                    }}
                  >
                    <ChevronUp
                      className={clsx(
                        'duration-300',
                        'text-[var(--border-color)]',
                        'max-md:group-active:text-[var(--text-color)]',
                        'md:group-hover:text-[var(--text-color)]',
                        hiddenSubsets.includes(subset.name.toLowerCase()) &&
                          'rotate-180'
                      )}
                      size={24}
                    />
                    <span>{subset.name.slice(1)}</span>
                  </h4>
                  {!hiddenSubsets.includes(subset.name.toLowerCase()) && (
                    <Subset
                      sliceRange={subset.sliceRange}
                      group={kanaGroup.name}
                      subgroup={subset.name}
                    />
                  )}
                </div>

                {i < kanaGroup.subsets.length - 1 && (
                  <hr className='border-t-2 border-[var(--border-color)]' />
                )}
              </div>
            ))}
        </form>
      ))}
    </div>
  );
};

export default Hiragana;
