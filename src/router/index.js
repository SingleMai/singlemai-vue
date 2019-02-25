import Vue from 'vue';
import Router from 'vue-router';

// 异步加载组件
// 首页
const Home = resolve => {
  import('@views/Home.vue').then(module => {
    resolve(module);
  });
};
// 登录
const Signin = resolve => {
  import('@views/signin/').then(module => {
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
// 创建博客文章
const editBlogArticle = resolve => {
  import('@views/blog-article/src/edit').then(module => {
    resolve(module);
  });
};
const blogArticleIndex = resolve => {
  import('@views/blog-article/').then(module => {
    resolve(module);
  });
};
// 查看博客详情
const blogArticleDetail = resolve => {
  import('@views/blog-article/src/detail').then(module => {
    resolve(module);
  });
};

// 管理后台
const backenHome = resolve => {
  import('@views/Backen').then(module => {
    resolve(module);
  });
};
const blogArticleEdit = resolve => {
  import('@views/blog-article/src/edit').then(module => {
    resolve(module);
  })
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/blog-article',
      component: Home,
      children: [
        {
          name: 'signin',
          path: '/signin',
          component: Signin
        },
        {
          name: 'blogArticle',
          path: '/blog-article',
          component: blogArticleIndex
        },
        {
          name: 'OutsideArticle',
          path: '/outside-article',
          component: outsideArticleHome
        },
        {
          name: 'create-outside-article',
          path: '/outside-article/edit',
          component: editOutsideArticle
        },
        {
          name: 'create-blog-article',
          path: '/blog-article/edit',
          component: editBlogArticle
        },
        {
          name: 'blogArticleDetail',
          path: '/blog-article/detail/:id',
          props: true,
          component: blogArticleDetail
        }
      ]
    },
    {
      name: 'BackenHome',
      path: '/backen',
      component: backenHome,
      children: [
        {
          name: 'BlogArticleEdit',
          path: 'blog-article/edit',
          component: blogArticleEdit
        }
      ]
    }
  ]
});
