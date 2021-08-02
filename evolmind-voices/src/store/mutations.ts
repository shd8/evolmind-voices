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
    state.filteredVoices.sort((a, b) => (a.name > b.name ? 1 : -1));
    state.favorites.sort((a, b) => (a.name > b.name ? 1 : -1));
    state.filteredFavorites.sort((a, b) => (a.name > b.name ? 1 : -1));
  },

  sortByAlphabetReverse(state: State): void {
    state.voices.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
    state.filteredVoices.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
    state.favorites.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
    state.filteredFavorites.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
  },

  filterByCategory(state:State, category: string): void {
    state.filteredVoices = state.voices
      .filter((voice) => voice.tags.some((tag) => tag === category));

    state.filteredFavorites = state.favorites
      .filter((voice) => voice.tags.some((tag) => tag === category));

    console.log(state.filteredFavorites);
  },

};

export default mutations;
