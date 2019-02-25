import Vue from 'vue';
import Antd from 'ant-design-vue';
import $gql from './graphql/index.js';

import './styles/index.less';
// markdown 编辑器
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import App from './App.vue';
import router from './router/';
import store from './store/';
import $storage from './storage';
import $constant from './constant';
import { createProvider } from './vue-apollo';

// === 自定义组件
import sBlogArticleCard from '@components/article-card/blog-article';
import sOutsideArticleCard from '@components/article-card/outside-article';
import sTagLineList from '@components/tag-line-list/';
import sArticleCaption from '@components/article-caption/';
Vue.component('s-blog-article-card', sBlogArticleCard);
Vue.component('s-outside-article-card', sOutsideArticleCard);
Vue.component('s-tag-line-list', sTagLineList);
Vue.component('s-article-caption', sArticleCaption);

Vue.config.productionTip = false;
Vue.prototype.$gql = $gql;
Vue.prototype.$storage = $storage;
Vue.prototype.$constant = $constant;

Vue.use(Antd);
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
