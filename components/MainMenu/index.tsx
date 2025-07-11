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
  // Github
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import { useClick } from '@/lib/useAudio';
import useThemeStore from '@/store/useThemeStore';

const MainMenu = () => {
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  const { playClick } = useClick();

  const links = [
    {
      name_en: 'Kana',
      name_ja: 'あ',
      href: '/kana'
    },
    {
      name_en: 'Kanji',
      name_ja: '見',
      href: '/kanji'
    },
    {
      name_en: 'Vocabulary',
      name_ja: '彙',
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
    { name: 'security', href: '/security', icon: FileLock2 }
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
                  'hover:cursor-pointer duration-250 hover:scale-120',
                  'active:scale-100 active:duration-225',
                  'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
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
                  'hover:cursor-pointer duration-250 hover:scale-120',
                  'active:scale-100 active:duration-225',
                  'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
                )}
              />
            )}
            {/* <Settings
              size={32}
              className={clsx(
                'hover:cursor-pointer duration-250 hover:scale-120',
                'active:scale-100 active:duration-225'
              )}
              onClick={() => {
                playClick();
                window.open('/settings', '_self');
              }}
            /> */}

            <FontAwesomeIcon
              icon={faDiscord}
              size='2x'
              className={clsx(
                'hover:cursor-pointer duration-250 hover:scale-120',
                'active:scale-100 active:duration-225',
                'md:hidden',
                'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
              )}
              onClick={() => {
                playClick();
                window.open('https://discord.gg/CyvBNNrSmb', '_blank');
              }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size='2x'
              className={clsx(
                'hover:cursor-pointer duration-250 hover:scale-120',
                'active:scale-100 active:duration-225',
                'text-[var(--secondary-color)] hover:text-[var(--main-color)]'
              )}
              onClick={() => {
                playClick();
                window.open(
                  'https://github.com/tentoumushii/kanadojo',
                  '_blank'
                );
              }}
            />
            <Heart
              size={32}
              className={clsx(
                'hover:cursor-pointer duration-250 hover:scale-120',
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
        <Info />
        <div
          // className='w-full grid grid-cols-2 gap-4 flex-none'
          className={clsx(
            'rounded-2xl bg-[var(--card-color)]',
            'duration-250',
            'transition-all ease-in-out',
            'flex flex-col md:flex-row',
            'w-full'
            // 'border-b-4 border-[var(--border-color)]'
          )}
        >
          {links.map((link, i) => (
            <>
              <Link
                href={link.href}
                key={i}
                className={clsx(
                  // link.name_en === 'Vocabulary' && 'md:col-span-full'
                  'w-full'
                )}
              >
                <button
                  className={clsx(
                    'flex w-full h-full text-2xl',
                    ' justify-center items-center gap-1.5',
                    'py-8',
                    'group',
                    i === 0 && 'rounded-tl-2xl rounded-bl-2xl',
                    i === links.length - 1 && 'rounded-tr-2xl rounded-br-2xl',
                    'hover:cursor-pointer',
                    'hover:bg-[var(--border-color)]',
                    'duration-250'
                  )}
                  onClick={() => playClick()}
                >
                  <span
                    lang='ja'
                    className='font-normal text-[var(--secondary-color)]'
                  >
                    {link.name_ja}
                  </span>
                  <span lang='en' className=''>
                    {link.name_en}
                  </span>
                </button>
              </Link>

              {i < links.length - 1 && (
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
      </div>
      <div
        className={clsx(
          'fixed bottom-3 flex flex-row gap-2',
          'max-md:bg-[var(--border-color)] rounded-xl'
        )}
      >
        {legalLinks.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className='p-2 text-sm hover:cursor-pointer  rounded-2xl flex flex-row gap-1 items-center text-[var(--secondary-color)] hover:text-[var(--main-color)]'
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
