import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  displayKana: boolean;
  setDisplayKana: (displayKana: boolean) => void;

  theme: string;
  setTheme: (theme: string) => void;

  font: string;
  setFont: (fontName: string) => void;

  silentMode: boolean;
  setSilentMode: (silent: boolean) => void;

  hotkeysOn: boolean;
  setHotkeys: (hotkeys: boolean) => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      displayKana: false,
      setDisplayKana: displayKana => set({ displayKana }),
      theme: 'light',
      setTheme: theme => set({ theme }),
      font: 'Zen Maru Gothic',
      setFont: fontName => set({ font: fontName }),
      silentMode: false,
      setSilentMode: silent => set({ silentMode: silent }),
      hotkeysOn: true,
      setHotkeys: hotkeys => set({ hotkeysOn: hotkeys })
    }),

    {
      name: 'theme-storage'
    }
  )
);

export default useThemeStore;
