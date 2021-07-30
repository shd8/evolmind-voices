import { State, Voice } from '@/types/interfaces';

const mutations = {

  updateVoices(state: State, payload: Array<Voice>): void {
    state.voices = [...payload];
  },
};

export default mutations;
