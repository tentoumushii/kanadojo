'use client';
import clsx from 'clsx';
import { buttonBorderStyles } from '@/static/styles';
import useThemeStore from '@/store/useThemeStore';
import { useClick } from '@/lib/hooks/useAudio';
import { AudioLines, VolumeX, Command, KeyboardOff } from 'lucide-react';

const Behavior = () => {
  const { playClick } = useClick();

  const displayKana = useThemeStore(state => state.displayKana);
  const setDisplayKana = useThemeStore(state => state.setDisplayKana);

  const silentMode = useThemeStore(state => state.silentMode);
  const setSilentMode = useThemeStore(state => state.setSilentMode);

  const hotkeysOn = useThemeStore(state => state.hotkeysOn);
  const setHotkeys = useThemeStore(state => state.setHotkeys);

  const hotkeys = [
    { key: 'Esc', action: 'Back' },
    { key: 'H', action: 'Home' },
    { key: 'P', action: 'Open Preferences' },
    { key: 'Enter \u23CE', action: 'Start Training' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg">
        In the character selection menu, by default, display:
      </h4>
      <div className="flex flex-row gap-4">
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4'
            ,
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setDisplayKana(false);
          }}
        >
          {!displayKana && '\u2B24 '}
          Romaji, Translations&nbsp;🇺🇸
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4'
            ,
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setDisplayKana(true);
          }}
        >
          {displayKana && '\u2B24 '}
          Kana, Kanji&nbsp;🇯🇵
        </button>
      </div>
      <h4 className="text-lg">Play UI + feedback sound effects:</h4>
      <div className="flex flex-row gap-4">
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end'
            ,
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setSilentMode(false);
          }}
        >
          <span>
            {!silentMode && '\u2B24 '}
            on
          </span>
          <AudioLines
            size={20}
            className="mb-0.5"
          />
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end'
            ,
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setSilentMode(true);
          }}
        >
          <span>
            {silentMode && '\u2B24 '}
            off
          </span>
          <VolumeX
            size={20}
            className="mb-0.5"
          />
        </button>
      </div>
      <h4 className="text-lg">Enable hotkeys (desktop only):</h4>
      <div className="flex flex-row gap-4">
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end'
            ,
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setHotkeys(true);
          }}
        >
          <span>
            {hotkeysOn && '\u2B24 '}
            on
          </span>
          <Command
            size={20}
            className="mb-0.5"
          />
        </button>
        <button
          className={clsx(
            buttonBorderStyles,
            'text-center text-lg',
            'w-1/2 md:w-1/4 p-4',
            'flex flex-row gap-1.5 justify-center items-end'
            ,
            'text-[var(--secondary-color)]'
          )}
          onClick={() => {
            playClick();
            setHotkeys(false);
          }}
        >
          <span>
            {!hotkeysOn && '\u2B24 '}
            off
          </span>
          <KeyboardOff
            size={20}
            className="mb-0.5"
          />
        </button>
      </div>
      <div className="max-w-md">
        <h5 className="text-lg mb-2">Hotkey Reference</h5>
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg overflow-hidden">
            <thead className="bg-[var(--card-color)]">
              <tr>
                <th className="px-4 py-2 text-left bg-[var(--border-color)]">
                  Key
                </th>
                <th className="px-4 py-2 text-left bg-[var(--border-color)]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {hotkeys.map((hotkey, index) => (
                <tr
                  key={index}
                  className={'bg-[var(--card-color)]'}
                >
                  <td className="px-4 py-3 font-mono  bg-[var(--card-color)]">
                    <kbd className="px-2 py-1 bg-[var(--border-color)] rounded-md">
                      {hotkey.key}
                    </kbd>
                  </td>
                  <td className="px-4 py-2">{hotkey.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Behavior;
