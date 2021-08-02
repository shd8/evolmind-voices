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
};

export default mutations;
