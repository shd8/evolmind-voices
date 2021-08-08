import { State, Voice } from '@/types/interfaces';

const mutations = {

  updateVoices(state: State, payload: Array<Voice>): void {
    state.voices = [...payload];
  },

  updateFavorites(state: State, payload: Voice): void {
    // eslint-disable-next-line no-unused-expressions
    state.favorites.some((favorite) => favorite.id === payload.id)
      ? state.favorites = state.favorites.filter((favorite) => favorite.id !== payload.id)
      : state.favorites.push(payload);
  },

  sortByAlphabet(state: State): void {
    state.voices.sort((a, b) => (a.name > b.name ? 1 : -1));
    state.favorites.sort((a, b) => (a.name > b.name ? 1 : -1));
  },

  sortByAlphabetReverse(state: State): void {
    state.voices.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
    state.favorites.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
  },

  updateFilterString(state: State, payload: string): void {
    state.inputString = payload;
  },

  updateCategoryTag(state: State, payload: string): void {
    state.currentCategory = payload;
  },

  clearFilters(state: State): void {
    state.currentCategory = '';
    state.inputString = '';
  },

  generateRandomVoice(state: State): void {
    state.randomVoice = state.voices[Math.floor(Math.random() * state.voices.length)];
  },
};

export default mutations;
