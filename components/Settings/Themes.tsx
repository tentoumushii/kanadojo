'use client';
import { createElement } from 'react';
import themes from '@/static/themes';
import useThemeStore from '@/store/useThemeStore';
import clsx from 'clsx';
import { useClick, useLong } from '@/lib/hooks/useAudio';
import { buttonBorderStyles } from '@/static/styles';
import { useState } from 'react';

const Themes = () => {
  const { playClick } = useClick();
  const { playLong } = useLong();

  const { theme, setTheme } = useThemeStore();

  const [isHovered, setIsHovered] = useState('');

  return (
    <div className="flex flex-col gap-6">
      {themes.map((themeSet, i) => (
        <div
          key={i}
          className="flex flex-col gap-3"
        >
          <h4 className="text-xl flex flex-row items-center gap-1.5">
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
                  backgroundColor:
                    isHovered === currentTheme.id
                      ? currentTheme.borderColor
                      : currentTheme.backgroundColor,
                  borderColor: currentTheme.borderColor,
                }}
                onMouseEnter={() => setIsHovered(currentTheme.id)}
                onMouseLeave={() => setIsHovered('')}
                className={clsx(
                  currentTheme.id === 'long' && 'col-span-full',
                  'py-4 flex justify-center items-center',
                  buttonBorderStyles
                )}
                onClick={() => {
                  playClick();
                  if (currentTheme.id === 'long') playLong();
                }}
              >
                <input
                  type="radio"
                  name="selectedTheme"
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
                          value: 1,
                        }
                      );
                    }
                  }}
                  className="hidden"
                />
                <span className="text-center text-lg flex items-center gap-1.5">
                  <span>{currentTheme.id === theme ? '\u2B24 ' : ''}</span>
                  {currentTheme.id === 'long'
                    ? 'long loooooooong theme'
                    : currentTheme.id.split('-').map((themeNamePart, i) => (
                        <span
                          key={themeNamePart + Math.random() * 9999}
                          style={{
                            color:
                              process.env.NODE_ENV !== 'production'
                                ? i === 0
                                  ? currentTheme.mainColor
                                  : currentTheme.secondaryColor
                                : undefined,
                          }}
                        >
                          {i > 0 && ' '}
                          {themeNamePart}
                        </span>
                      ))}
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
