import Vue from 'vue';
import './plugins/vuetify';
import $gql from './graphql/index.js';

// markdown 编辑器
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import App from './App.vue';
import router from './router/';
import store from './store/';
import $storage from './storage';
import $constant from './constant';
import { createProvider } from './vue-apollo';

import articleCard from '@components/article-card/outside-article';
import blogArticleItem from '@components/article-card/blog-article';
import articleCaption from '@components/article-caption/';
Vue.component('s-article-card', articleCard);
Vue.component('s-blog-article-item', blogArticleItem);
Vue.component('s-article-caption', articleCaption);

Vue.config.productionTip = false;
Vue.prototype.$gql = $gql;
Vue.prototype.$storage = $storage;
Vue.prototype.$constant = $constant;

Vue.use(mavonEditor);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
