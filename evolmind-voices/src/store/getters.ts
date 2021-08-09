import { Voice, State } from '@/types/interfaces';
import CATEGORIES from '@/assets/categories';

const getters = {

  filteredVoices(state:State): Array<Voice> {
    if (state.inputString === '' && state.currentCategory === '') return state.voices;

    if (state.inputString !== '' && state.currentCategory === '') {
      return state.voices
        .filter((voice) => (voice.name.toLowerCase()
          .includes(state.inputString.toLowerCase())));
    }

    return state.voices
      .filter((voice) => (voice.name.toLowerCase()
        .includes(state.inputString.toLowerCase()))
    && voice.tags.some((tag) => tag === state.currentCategory));
  },

  filteredFavorites(state: State): Array<Voice> {
    if (state.inputString === '' && state.currentCategory === '') return state.favorites;

    if (state.inputString !== '' && state.currentCategory === '') {
      return state.favorites
        .filter((favorite) => (favorite.name.toLowerCase()
          .includes(state.inputString.toLowerCase())));
    }

    return state.favorites
      .filter((favorite) => (favorite.name.toLowerCase()
        .includes(state.inputString.toLowerCase()))
    && favorite.tags.some((tag) => tag === state.currentCategory));
  },

  currentCategoryName(state: State): string {
    return CATEGORIES
      .find((category) => category.tag === state.currentCategory).category;
  },

  isInFavorites:
  (state: State) => (voiceId: string):boolean => state.favorites
    .some((favorite) => favorite.id === voiceId),
};

export default getters;
