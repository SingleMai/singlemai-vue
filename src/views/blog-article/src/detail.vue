<template>
  <div class="blog-article__detail s-display-flex s-display-flex__direction-col">
    <a-card style="width: 1200px;borderTop: 0">
      <h3 class="s-title s-text-center">{{ blogArticleData.title }}</h3>
      <s-article-caption center :data="captionDataTop"></s-article-caption>
      <s-article-caption center :data="captionDatadDown"></s-article-caption>
      <div class="blog-article__content" v-html="htmlBody"></div>

      <s-tag-line-list :data="blogArticleData.tags"></s-tag-line-list>
    </a-card>
  </div>
</template>
<script>
  import query from '@graphql/';
  import marked from 'marked'

  export default {
    name: 'BlogArticleDetail',
    mounted () {
      this.getBlogArticleDetail();
    },
    data() {
      return {
        blogArticleData: {},
      };
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      category () {
        return this.blogArticleData.category || {};
      },
      captionDataTop() {
        return [
          { icon: 'calendar', text: this.blogArticleData.createdAt },
          { icon: 'schedule', text: this.blogArticleData.updatedAt },
          { icon: 'folder', text: this.category.categoryName },
        ]
      },
      captionDatadDown() {
        return [
          { icon: 'fle-word', text: 281 },
          { icon: 'clock-circle', text: 281 },
          { icon: 'eye', text: 281 },
        ]
      },
      htmlBody () {
        return marked(this.blogArticleData && this.blogArticleData.mainBody || '');
      }
    },
    methods: {
      async getBlogArticleDetail() {
        const data = await this.$apollo.query({
          query: query.GET_BLOG_ARTICLE_DETAIL,
          // 参数
          variables: {
            id: this.id
          }
        });
        this.blogArticleData = data.data.findBlogArticleDetail;
      }
    }
  };
</script>

<style lang='less' scoped='' type='text/css'>
.blog-article__content {
  margin-top: 20px;
}
</style>
