import { create } from 'zustand';

export interface IKanjiObj {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  displayMeanings: string[];
  fullDisplayMeanings: string[];
  meanings: string[];
}

interface IFormState {
  selectedGameModeKana: string;
  kanaGroupIndices: number[];
  setSelectedGameModeKana: (mode: string) => void;
  addKanaGroupIndex: (kanaGroupIndex: number) => void;
  addKanaGroupIndices: (kanaGroupIndices: number[]) => void;

  selectedGameModeKanji: string;
  selectedKanjiObjs: IKanjiObj[];
  setSelectedGameModeKanji: (mode: string) => void;
  addKanjiObj: (kanji: IKanjiObj) => void;
  addKanjiObjs: (kanjis: IKanjiObj[]) => void;
  clearKanjiObjs: () => void;
}

const useKanaKanjiStore = create<IFormState>(set => ({
  // KANA
  selectedGameModeKana: '',
  kanaGroupIndices: [],

  setSelectedGameModeKana: gameMode => set({ selectedGameModeKana: gameMode }),
  addKanaGroupIndex: kanaGroupIndex =>
    set(state => ({
      kanaGroupIndices: state.kanaGroupIndices.includes(kanaGroupIndex)
        ? state.kanaGroupIndices.filter(index => index !== kanaGroupIndex) // Remove if present
        : [...state.kanaGroupIndices, kanaGroupIndex] // Add if not present
    })),
  addKanaGroupIndices: kanaGroupIndices =>
    set(state => ({
      kanaGroupIndices: kanaGroupIndices.every(i =>
        state.kanaGroupIndices.includes(i)
      )
        ? state.kanaGroupIndices.filter(i => !kanaGroupIndices.includes(i)) // Remove if present
        : [...new Set([...state.kanaGroupIndices, ...kanaGroupIndices])]
    })),

  // KANJI
  selectedGameModeKanji: '',
  selectedKanjiObjs: [],
  setSelectedGameModeKanji: gameMode =>
    set({ selectedGameModeKanji: gameMode }),
  addKanjiObj: kanjiObj =>
    set(state => ({
      selectedKanjiObjs: state.selectedKanjiObjs
        .map(kanjiObj => kanjiObj.kanjiChar)
        .includes(kanjiObj.kanjiChar)
        ? state.selectedKanjiObjs.filter(
            currentKanjiObj => currentKanjiObj.kanjiChar !== kanjiObj.kanjiChar
          )
        : [...state.selectedKanjiObjs, kanjiObj]
    })),
  addKanjiObjs: kanjiObjs =>
    set(state => ({
      selectedKanjiObjs: kanjiObjs.every(currentKanjiObj =>
        state.selectedKanjiObjs
          .map(currentKanjiObj => currentKanjiObj.kanjiChar)
          .includes(currentKanjiObj.kanjiChar)
      )
        ? state.selectedKanjiObjs.filter(
            currentKanjiObj =>
              !kanjiObjs
                .map(currentKanjiObj => currentKanjiObj.kanjiChar)
                .includes(currentKanjiObj.kanjiChar)
          )
        : [...new Set([...state.selectedKanjiObjs, ...kanjiObjs])]
    })),
  clearKanjiObjs: () => {
    set(() => ({
      selectedKanjiObjs: []
    }));
  }
}));

export default useKanaKanjiStore;
