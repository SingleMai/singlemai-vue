import Vue from 'vue';
import Vuex from 'vuex';

// import actions from './actions'
import * as getters from './getters';
import mutations from './mutations';
// import constant from '../constant.js';

Vue.use(Vuex);

const state = {
  userInfo: null, // 用户登录信息
};

export default new Vuex.Store({
  state,
  // actions,
  getters,
  mutations
});
