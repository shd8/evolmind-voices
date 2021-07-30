import axios from 'axios';
import { ActionContext } from 'vuex';
import { State } from '@/types/interfaces';

const actions = {
  async fetchVoices({ commit }:ActionContext<State, State>): Promise<void> {
    const { data } = await axios.get('../assets/voice.json');

    console.log(data);

    commit('updateProducts', data);
  },
};

export default actions;
