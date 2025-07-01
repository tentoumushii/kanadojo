'use client';
import Link from 'next/link';
import { ChevronsLeft, House } from 'lucide-react';
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
    <div className='flex flex-col pt-4 gap-1.5 md:gap-1 w-full'>
      <div className='flex flex-col md:flex-row gap-3 items-start w-full'>
        <h1 className={clsx('text-4xl font-bold', 'flex gap-2', 'flex-row')}>
          <span className='flex flex-row gap-2 items-center'>KanaDojo</span>
          <span className={clsx('font-normal')}>かな道場️</span>
        </h1>

        <div
          className={clsx(
            'rounded-xl bg-[var(--card-color)]',
            'duration-250',
            'transition-all ease-in-out',
            'flex flex-row',
            'w-full md:w-1/4',
            'border-b-4 border-[var(--border-color)]'
          )}
        >
          <Link href={href} className='w-1/2'>
            <button
              ref={escButtonRef}
              className={clsx(
                'w-full h-full py-2',
                'hover:cursor-pointer',
                'text-[var(--main-color)] md:text-[var(--secondary-color)] hover:text-[var(--main-color)]',
                'hover:bg-[var(--border-color)] rounded-tl-xl rounded-bl-lg',
                'duration-250'
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

          <Link href='/' className='w-1/2'>
            <button
              ref={homeButtonRef}
              className={clsx(
                'w-full h-full',
                'hover:cursor-pointer',
                'text-[var(--main-color)] md:text-[var(--secondary-color)] hover:text-[var(--main-color)]',
                'hover:bg-[var(--border-color)] rounded-tr-xl rounded-br-lg',
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
        </div>
      </div>
      {subheading && (
        <h2 className='text-3xl flex flex-row gap-1.5 items-center'>
          {subheading}
        </h2>
      )}
    </div>
  );
};

export default Banner;
