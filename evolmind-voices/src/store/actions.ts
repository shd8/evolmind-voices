import { ActionContext } from 'vuex';
import { State } from '@/types/interfaces';
import VOICES from '@/assets/voices.json';

const actions = {
  async fetchVoices({ commit }:ActionContext<State, State>): Promise<void> {
    console.log(VOICES);

    commit('updateVoices', VOICES);
  },
};

export default actions;
