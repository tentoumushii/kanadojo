'use client';
import { createElement } from 'react';
import themes from '@/static/themes';
import useThemeStore from '@/store/useThemeStore';
import clsx from 'clsx';
import { useClick, useLong } from '@/lib/useAudio';
import { buttonBorderStyles } from '@/static/styles';

const Themes = () => {
  const { playClick } = useClick();
  const { playLong } = useLong();

  const { theme, setTheme } = useThemeStore();

  return (
    <div className='flex flex-col gap-6'>
      {themes.map((themeSet, i) => (
        <div key={i} className='flex flex-col gap-3'>
          <h4 className='text-xl flex flex-row items-center gap-1.5'>
            {createElement(themeSet.icon)}
            <span>{themeSet.name}</span>
          </h4>
          <fieldset
            className={clsx(
              'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            )}
          >
            {themeSet.themes.map(currentTheme => (
              <label
                key={currentTheme.id}
                style={{
                  color: currentTheme.mainColor,
                  backgroundColor: currentTheme.backgroundColor,
                  borderColor: currentTheme.borderColor
                }}
                className={clsx(
                  currentTheme.id === 'long' && 'col-span-full',
                  'py-4 flex justify-center items-center hover:scale-x-103 hover:scale-y-110',
                  buttonBorderStyles,
                  currentTheme.id !== 'long'
                    ? 'hover:scale-x-103 hover:scale-y-110'
                    : 'hover:scale-95'
                )}
                onClick={() => {
                  playClick();
                  if (currentTheme.id === 'long') playLong();
                }}
              >
                <input
                  type='radio'
                  name='selectedTheme'
                  onChange={() => {
                    setTheme(currentTheme.id);
                    // @ts-expect-error gtag fix
                    if (typeof window.gtag === 'function') {
                      // @ts-expect-error gtag fix
                      window.gtag(
                        'event',
                        process.env.NODE_ENV === 'production'
                          ? '(REAL USERS) Theme Button Clicks'
                          : '(Me Testing) Testing Theme Button Clicks',
                        {
                          event_category: 'Theme Change',
                          event_label: currentTheme.id,
                          value: 1
                        }
                      );
                    }
                  }}
                  className='hidden'
                />
                <span className='text-center text-lg'>
                  {currentTheme.id === theme ? '\u2B24 ' : ''}
                  {currentTheme.id === 'long'
                    ? 'long loooooooong theme'
                    : currentTheme.id.split('-').join(' ')}
                </span>
              </label>
            ))}
          </fieldset>
        </div>
      ))}
    </div>
  );
};

export default Themes;
