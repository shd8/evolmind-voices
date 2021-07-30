import { createStore } from 'vuex';
import actions from '@/store/actions';
import state from '@/store/state';
import mutations from '@/store/mutations';

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  },
});
