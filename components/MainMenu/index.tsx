'use client';
import Link from 'next/link';
import Banner from './Banner';
import Info from '@/components/reusable/Info';
import {
  ScrollText,
  FileLock2,
  Cookie,
  // FileDiff,
  Sun,
  Moon,
  Heart
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import { useClick } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import useThemeStore from '@/store/useThemeStore';

const MainMenu = () => {
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  const { playClick } = useClick();

  const links = [
    {
      name_en: 'Kana',
      name_ja: 'かな',
      href: '/kana'
    },
    {
      name_en: 'Kanji',
      name_ja: '漢字',
      href: '/kanji'
    },
    {
      name_en: 'Vocabulary',
      name_ja: '語彙',
      href: '/vocabulary'
    }
    // {
    //   name_en: 'Sentences',
    //   name_ja: '文',
    //   href: '/sentences'
    // }
  ];

  const legalLinks = [
    { name: 'terms', href: '/terms', icon: ScrollText },
    { name: 'privacy', href: '/privacy', icon: Cookie },
    { name: 'security', href: '/security', icon: FileLock2 },
    // { name: 'patch notes', href: '/patch-notes', icon: FileDiff }
  ];

  return (
    <div className='flex flex-row justify-center max-w-[100dvw] min-h-[100dvh]'>
      <div className='pt-5 pb-16 flex flex-col items-center md:justify-center gap-4 px-4 w-full sm:w-3/4 lg:w-1/2 3xl:w-2/5'>
        <div className='flex flex-row justify-between items-center w-full px-1 gap-2'>
          <Banner />
          <div className='flex flex-row justify-end gap-2 w-1/2 md:w-1/3'>
            {theme === 'dark' ? (
              <Moon
                size={32}
                onClick={() => {
                  playClick();
                  setTheme('light');
                }}
                className={clsx(
                  'hover:cursor-pointer duration-225 hover:scale-120',
                  'active:scale-100 active:duration-225'
                )}
              />
            ) : (
              <Sun
                size={32}
                onClick={() => {
                  playClick();
                  setTheme('dark');
                }}
                className={clsx(
                  'hover:cursor-pointer duration-225 hover:scale-120',
                  'active:scale-100 active:duration-225'
                )}
              />
            )}
            <FontAwesomeIcon
              icon={faDiscord}
              size='2x'
              className={clsx(
                'hover:cursor-pointer duration-225 hover:scale-120',
                'active:scale-100 active:duration-225'
              )}
              onClick={() => {
                playClick();
                window.open('https://discord.gg/CyvBNNrSmb', '_blank');
              }}
            />
            {/* <FontAwesomeIcon
              icon={faXTwitter}
              size='2x'
              className={clsx(
                'hover:cursor-pointer duration-225 hover:scale-120',
                'active:scale-100 active:duration-225'
              )}
              onClick={() => {
                playClick();
                window.open('https://x.com/langdojo', '_blank');
              }}
            /> */}
            {/* <Instagram
              size={32}
              className={clsx(
                'hover:cursor-pointer duration-225 hover:scale-120',
                'active:scale-100 active:duration-225'
              )}
              onClick={() => {
                playClick();
                window.open('https://instagram.com/langdojo', '_blank');
              }}
            /> */}
            <Heart
              size={32}
              className={clsx(
                'hover:cursor-pointer duration-225 hover:scale-120',
                'active:scale-100 active:duration-225',
                'fill-current animate-bounce text-red-500'
              )}
              onClick={() => {
                playClick();
                window.open('https://ko-fi.com/kanadojo', '_blank');
              }}
            />
          </div>
        </div>
        <Info currentDojo='mainMenu' />
        <div className='w-full grid grid-cols-2 gap-4 flex-none'>
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={clsx(
                link.name_en === 'Vocabulary' && 'md:col-span-full'
              )}
            >
              <button
                className={clsx(
                  'flex w-full h-full text-2xl rounded-2xl duration-200 hover:scale-y-108 hover:scale-x-102 hover:cursor-pointer bg-[var(--card-color)] border-[var(--border-color)]',
                  buttonBorderStyles,
                  'active:scale-95 md:active:scale-98 active:duration-225',
                  'flex-col items-center justify-center',
                  'md:flex-row md:justify-center md:items-center md:gap-1.5',
                  'max-md:aspect-square md:py-6'
                )}
                onClick={() => playClick()}
              >
                <span lang='en'>{link.name_en}</span>
                <span lang='ja' className='font-normal'>
                  {link.name_ja}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={clsx(
          'fixed bottom-3 flex flex-row gap-2',
          ' max-md:bg-[var(--border-color)] rounded-xl'
        )}
      >
        {legalLinks.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className='p-2 text-sm hover:cursor-pointer hover:underline rounded-2xl flex flex-row gap-1 items-center'
            onClick={() => playClick()}
          >
            <link.icon className='size-4' />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
