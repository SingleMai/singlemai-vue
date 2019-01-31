import Vue from 'vue';
import Router from 'vue-router';

// 异步加载组件
// 首页
const Home = resolve => {
  import('@views/Home.vue').then(module => {
    resolve(module);
  });
};
// 外链文章
const outsideArticleHome = resolve => {
  import('@views/outside-article/').then(module => {
    resolve(module);
  });
};
// 创建外链文章
const editOutsideArticle = resolve => {
  import('@views/outside-article/src/edit').then(module => {
    resolve(module);
  });
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/outside-article',
      name: 'OutsideArticle',
      component: outsideArticleHome
    },
    {
      name: 'create-outside-article',
      path: '/outside-article/edit',
      component: editOutsideArticle
    }
  ]
});
