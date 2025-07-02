'use client';
import Link from 'next/link';
import { ChevronsLeft, Settings, House } from 'lucide-react';
import clsx from 'clsx';
import { useClick } from '@/lib/useAudio';
import { useEffect, useRef } from 'react';
import useThemeStore from '@/store/useThemeStore';
import { usePathname, useRouter } from 'next/navigation';

const Banner = ({
  subheading
}: {
  subheading?: string | React.ReactElement;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const href = pathname.split('/').slice(0, -1).join('/') || '/';
  const hotkeysOn = useThemeStore(state => state.hotkeysOn);

  const { playClick } = useClick();

  const escButtonRef = useRef<HTMLButtonElement | null>(null);
  const homeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!hotkeysOn) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        escButtonRef.current?.click();
      } else if (event.key.toLowerCase() === 'h') {
        homeButtonRef.current?.click();
      } else if (event.key.toLowerCase() === 'p') {
        router.push('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeysOn]);

  return (
    <div
      className={clsx(
        'flex pt-4',
        'flex flex-col md:flex-row gap-2 md:gap-4 w-full'
      )}
    >
      <div className={clsx('text-4xl font-bold', 'flex flex-col gap-2')}>
        <h1 className='flex flex-row gap-1 items-center'>
          <span className=''>KanaDojo</span>
          <span className={clsx('font-normal')}>かな道場️</span>
        </h1>
        {subheading && (
          <h2 className='text-3xl flex flex-row gap-1.5 items-center text-[var(--secondary-color)]  font-normal'>
            {subheading}
          </h2>
        )}
      </div>

      <div
        className={clsx(
          'rounded-2xl bg-[var(--card-color)]',
          'duration-250',
          'transition-all ease-in-out',
          'flex flex-row',
          'w-full md:w-1/3 h-full'
          // 'border-b-4 border-[var(--border-color)]'
        )}
      >
        <Link href={href} className='w-1/3'>
          <button
            ref={escButtonRef}
            className={clsx(
              'w-full h-full py-2',
              'hover:cursor-pointer',
              'text-[var(--secondary-color)] hover:text-[var(--main-color)]',
              'hover:bg-[var(--border-color)] rounded-tl-2xl rounded-bl-2xl',
              'duration-250',
              'max-md:py-6'
            )}
            onClick={() => {
              playClick();
              if (pathname === '/preferences') router.back();
            }}
          >
            <ChevronsLeft
              size={32}
              className='justify-self-center align-self-center'
            />
          </button>
        </Link>

        <div
          className={clsx(
            'border-l-1 h-auto w-0',
            'border-[var(--border-color)]'
          )}
        />

        <Link href='/' className='w-1/3'>
          <button
            ref={homeButtonRef}
            className={clsx(
              'w-full h-full',
              'hover:cursor-pointer',
              'text-[var(--secondary-color)] hover:text-[var(--main-color)]',
              'hover:bg-[var(--border-color)]',
              'duration-250'
            )}
            onClick={() => playClick()}
          >
            <House
              size={32}
              className={clsx('justify-self-center align-self-center')}
              onClick={() => playClick()}
            />
          </button>
        </Link>

        <div
          className={clsx(
            'border-l-1 h-auto w-0',
            'border-[var(--border-color)]'
          )}
        />

        <Link href='/preferences' className='w-1/3'>
          <button
            className={clsx(
              'w-full h-full',
              'hover:cursor-pointer',
              'text-[var(--secondary-color)] hover:text-[var(--main-color)]',
              'hover:bg-[var(--border-color)] rounded-tr-2xl rounded-br-2xl',
              'duration-250'
            )}
            onClick={() => playClick()}
          >
            <Settings
              size={32}
              className={clsx('justify-self-center align-self-center')}
              onClick={() => playClick()}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
