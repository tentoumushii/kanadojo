'use client';
import Link from 'next/link';
import Info from '@/components/reusable/Info';
import clsx from 'clsx';
import Banner from '@/components/reusable/Banner';
import { useClick } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import { IWordClass } from '@/lib/interfaces';
import { useParams, usePathname } from 'next/navigation';

const SelectionMenu = () => {
  const { playClick } = useClick();
  const params = useParams() as unknown as IWordClass;
  const { group, subgroup } = params;
  let linksToDisplay = [] as { name: string; name_ja?: string; href: string }[];
  const pathname = usePathname();
  const category = pathname.split('/')[1].toLowerCase();

  const groupLinks = [
    {
      name: 'JLPT',
      href: `/${category}/jlpt`
    }
    // {
    //   name: 'Joyo',
    //   href: '/vocabulary/joyo'
    // }
  ];

  const subgroupLinks = [
    {
      name: `${group === 'jlpt' ? 'N5' : 'grade-1'}`,
      href: `/${category}/${group}/${group === 'jlpt' ? 'n5' : 'grade-1'}`
    },
    {
      name: `${group === 'jlpt' ? 'N4' : 'grade-2'}`,
      href: `/${category}/${group}/${group === 'jlpt' ? 'n4' : 'grade-2'}`
    },
    {
      name: `${group === 'jlpt' ? 'N3' : 'grade-3'}`,
      href: `/${category}/${group}/${group === 'jlpt' ? 'n3' : 'grade-3'}`
    },
    {
      name: `${group === 'jlpt' ? 'N2' : 'grade-4'}`,
      href: `/${category}/${group}/${group === 'jlpt' ? 'n2' : 'grade-4'}`
    }
    // {
    //   name: `${group === 'jlpt' ? 'N1' : 'grade-5'}`,
    //   href: `/vocabulary/${group}/${group === 'jlpt' ? 'n1' : 'grade-5'}`
    // }
  ];

  const vocabWordClassLinks = [
    {
      name: 'Nouns',
      name_ja: '名詞',
      href: `/${category}/${group}/${subgroup}/nouns`
    },
    {
      name: 'Adjectives',
      name_ja: '形容詞',
      href: `/${category}/${group}/${subgroup}/adjectives`
    },
    {
      name: 'Verbs',
      name_ja: '動詞',
      href: `/${category}/${group}/${subgroup}/verbs`
    },
    {
      name: 'Adverbs',
      name_ja: '副詞',
      href: `/${category}/${group}/${subgroup}/adverbs`
    }
  ];

  linksToDisplay = subgroup
    ? vocabWordClassLinks
    : group
    ? subgroupLinks
    : groupLinks;

  const currentDojo = !group
    ? 'groupMenu'
    : !subgroup
    ? 'jlptMenu'
    : 'wordClassMenu';

  return (
    <div className='flex flex-row justify-center max-w-[100dvw] min-h-[100dvh] '>
      <div className='pb-10 flex flex-col items-start md:justify-center gap-4 px-4 sm:w-3/4 xl:w-2/3 2xl:w-1/2 w-full'>
        <Banner
          subheading={`${
            category === 'kanji'
              ? 'Kanji 漢字'
              : category === 'vocabulary'
              ? 'Vocabulary 語彙'
              : category === 'sentences'
              ? 'Sentences 文'
              : null
          } ~ ${group ? group.toUpperCase() : ''} ${
            subgroup ? subgroup.toUpperCase() : ''
          }`}
        />
        <Info currentDojo={currentDojo} />
        <div className='w-full grid grid-cols-2 gap-4 flex-none'>
          {linksToDisplay.map((link, i) => (
            <Link href={link.href} key={i}>
              <button
                className={clsx(
                  'flex w-full h-full text-2xl p-2',
                  buttonBorderStyles,

                  'flex-col items-center justify-center',
                  'md:flex-row md:justify-center md:items-center md:gap-1.5',
                  'max-md:aspect-square md:py-6',
                  'group'
                )}
                onClick={() => playClick()}
              >
                <span lang='en' className='group-hover:underline'>
                  {link.name}
                </span>
                {link.name_ja && <span>{link.name_ja}</span>}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionMenu;
