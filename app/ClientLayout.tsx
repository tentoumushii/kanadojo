'use client';
import clsx from 'clsx';
import { useEffect } from 'react';
import useThemeStore from '@/store/useThemeStore';
import fonts from '@/static/fonts';
import { ScrollRestoration } from 'next-scroll-restoration';

export default function ClientLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useThemeStore();
  const font = useThemeStore(state => state.font);

  const fontClassName = fonts.find(fontObj => font === fontObj.name)?.font
    .className;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, [theme]);

  useEffect(() => {
    // Resume AudioContext on first user interaction
    const handleClick = () => {
      // @ts-expect-error (use-sound exposes Howler globally)
      if (window.Howler?.ctx?.state === 'suspended') {
        // @ts-expect-error (use-sound exposes Howler globally)
        window.Howler.ctx.resume();
      }
    };

    document.addEventListener('click', handleClick, { once: true });
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      data-scroll-restoration-id='container'
      className={clsx(
        'bg-[var(--background-color)] text-[var(--main-color)] min-h-[100dvh] max-w-[100dvw]',
        fontClassName
      )}
      style={{
        height: '100dvh',
        overflowY: 'scroll'
      }}
    >
      {children}
      <ScrollRestoration />
    </div>
  );
}
