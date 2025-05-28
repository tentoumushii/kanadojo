'use client';
import Link from 'next/link';
import { ChevronsLeft, House } from 'lucide-react';
import clsx from 'clsx';
import { useClick } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';
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
      } else if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
      } else if (event.key.toLowerCase() === 'p') {
router.push('')
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeysOn]);

  return (
    <div className='flex flex-col pt-4 gap-1.5 md:gap-1 w-full '>
      <div className='flex flex-col md:flex-row gap-3 items-start w-full'>
        <h1 className={clsx('text-4xl font-bold', 'flex gap-2', 'flex-row')}>
          <span className='flex flex-row gap-2 items-center'>KanaDojo</span>
          <span className={clsx('font-normal')}>かな道場</span>
        </h1>
        <div className='flex flex-row gap-3 max-md:w-full'>
          <Link href={href} className='w-1/2'>
            <button
              ref={escButtonRef}
              className={clsx(
                buttonBorderStyles,
                'pb-1 pt-2 px-14 w-full',
                'hover:scale-105'
              )}
              onClick={() => {
                playClick();
                if (pathname === '/preferences') router.back();
              }}
            >
              <ChevronsLeft size={32} className='justify-self-center' />
            </button>
          </Link>
          <Link href='/' className='w-1/2'>
            <button
              ref={homeButtonRef}
              className={clsx(
                buttonBorderStyles,
                'pb-1 pt-2 px-14 w-full',
                'hover:scale-105'
              )}
              onClick={() => playClick()}
            >
              <House
                size={32}
                className={clsx('justify-self-center')}
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
