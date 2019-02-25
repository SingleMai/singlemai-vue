<template>
  <div class="blog-article__list s-display-flex s-display-flex__direction-col">
    <s-blog-article-card v-for="(artile, index) in blogArticles"
                         :key="artile.id"
                         class="blog-article-card__wrap s-my-card"
                         :index="index"
                         :title="artile.title"
                         :desc="artile.desc"
                         :category="artile.category"
                         :coverImage="artile.coverImage"
                         :createdAt="artile.createdAt"
                         :updatedAt="artile.updatedAt"
                         :isStars="false"
                         @clickDetailBtn="getBlogArticleDetail"></s-blog-article-card>
  </div>
</template>

<script>
import query from '@graphql/';

export default {
  name: 'BlogArticleIndex',
  data() {
    return {
      blogArticleData: []
    }
  },
  apollo: {
    blogArticleData: {
      query: query.FIND_PAGING_BLOG_ARTICLE,
      // 订阅更多
      subscribeToMore: {
        document: query.SUBSCRIBE_BLOG_ARTICLE,
        updateQuery: ({ findPagingBlogArticle }, { subscriptionData }) => {
          // 在这里用之前的结果和新数据组合成新的结果
          findPagingBlogArticle.count++;
          findPagingBlogArticle.rows.unshift(subscriptionData.data.addBlogArticle);
        },
      },
      // 参数
      variables: {
        input: {
          limit: 10,
          offset: 0
        }
      },
      // 自定义解析result结果的参数。这样可以使apollo使用blogArticleData作为键名
      update(data) {
        return data.findPagingBlogArticle;
      }
    },
  },
  computed: {
    blogArticles() {
      return (this.blogArticleData && this.blogArticleData.rows) || [];
    }
  },
  methods: {
    getBlogArticleDetail(index) {
      this.$router.push({
        name: 'blogArticleDetail',
        params: {
          id: this.blogArticles[index].id
        }
      })
    }
  }
}
</script>

