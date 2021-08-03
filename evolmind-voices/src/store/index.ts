import { createStore } from 'vuex';
import actions from '@/store/actions';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
});
