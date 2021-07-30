import axios from 'axios';
import { ActionContext } from 'vuex';
import { State } from '@/types/interfaces';

const actions = {
  async fetchVoices({ commit }:ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get('');

    console.log(data);

    commit('updateVoices', data);
  },
};

export default actions;
