import storage from '../storage.js';
// import constant from '../constant.js';
// import helper from '../helper.js';

export default {
  /** 更新设置信息区展示的tab项
  * @param  { Object } state vuex操作
  * @param  { Object } value 信息展示区的新数值
  */
  setTabsAreaList(state, value) {
    const KEY = constant.STORAGE.TABS_LIST;
    state.tabsAreaList = value; // 设置vuex
    storage.setJson(KEY, value); // 更新localstorage的内容，这里在刷新页面时会导致有一次重复设置
  },
};