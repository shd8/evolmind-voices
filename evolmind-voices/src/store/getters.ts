import { Voice, State } from '@/types/interfaces';

const getters = {

  filteredVoices(state:State): Array<Voice> {
    return state.voices
      .filter((voice) => (voice.name.toLowerCase().includes(state.inputString.toLowerCase())
      && voice.tags.some((tag) => tag === state.currentCategory)));
  },

  filteredFavorites(state: State): Array<Voice> {
    return state.favorites
      .filter((favorite) => favorite.tags.some((tag) => tag === state.currentCategory)
      && favorite.name.toLowerCase().includes(state.inputString.toLowerCase()));
  },

};

export default getters;
