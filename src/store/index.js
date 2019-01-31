import Vue from 'vue';
import Vuex from 'vuex';

// import actions from './actions'
import * as getters from './getters';
import mutations from './mutations';
// import constant from '../constant.js';

Vue.use(Vuex);

const state = {
  // allTags: [], // 系统中全部的标签
};

export default new Vuex.Store({
  state,
  // actions,
  getters,
  mutations
});
