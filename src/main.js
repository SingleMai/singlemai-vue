import Vue from 'vue';
import './plugins/vuetify';
import graphql from './graphql/index.js';
import App from './App.vue';
import router from './router/';
import store from './store';
import { createProvider } from './vue-apollo';

import articleCard from '@components/article-card/';
Vue.component('s-article-card', articleCard);

Vue.config.productionTip = false;
Vue.prototype.$query = graphql;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
