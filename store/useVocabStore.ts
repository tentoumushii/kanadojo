import { create } from 'zustand';

export interface IWordObj {
  word: string;
  reading: string;
  displayMeanings: string[];
  meanings: string[];
}

interface IFormState {
  selectedGameModeVocab: string;
  selectedWordObjs: IWordObj[];
  setSelectedGameModeVocab: (mode: string) => void;
  addWordObj: (kanji: IWordObj) => void;
  addWordObjs: (kanjis: IWordObj[]) => void;
  clearWordObjs: () => void;
}

const useVocabStore = create<IFormState>(set => ({
  selectedGameModeVocab: '',
  selectedWordObjs: [],
  setSelectedGameModeVocab: gameMode =>
    set({ selectedGameModeVocab: gameMode }),
  addWordObj: wordObj =>
    set(state => ({
      selectedWordObjs: state.selectedWordObjs
        .map(wordObj => wordObj.word)
        .includes(wordObj.word)
        ? state.selectedWordObjs.filter(
            currentWordObj => currentWordObj.word !== wordObj.word
          )
        : [...state.selectedWordObjs, wordObj]
    })),
  addWordObjs: wordObjs =>
    set(state => ({
      selectedWordObjs: wordObjs.every(currentWordObj =>
        state.selectedWordObjs
          .map(currentWordObj => currentWordObj.word)
          .includes(currentWordObj.word)
      )
        ? state.selectedWordObjs.filter(
            currentWordObj =>
              !wordObjs
                .map(currentWordObj => currentWordObj.word)
                .includes(currentWordObj.word)
          )
        : [...new Set([...state.selectedWordObjs, ...wordObjs])]
    })),
  clearWordObjs: () => {
    set(() => ({
      selectedWordObjs: []
    }));
  }
}));

export default useVocabStore;
