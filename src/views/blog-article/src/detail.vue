<template>
  <v-flex xs12 offset-md>
    <v-card class="my-2 pa-4">
      <v-card-title>
        <v-container fluid class="pa-0">
          <h2>{{ blogArticleData.title }}</h2>
          <v-layout class="grey--text pt-2">
            <s-article-caption icon="date_range" :text="blogArticleData.createdAt"></s-article-caption>
            <v-divider class="mx-1" vertical></v-divider>
            <s-article-caption icon="today" :text="blogArticleData.updatedAt"></s-article-caption>
            <v-divider class="mx-1" vertical></v-divider>
            <s-article-caption icon="folder_open" :text="blogArticleData.category.categoryName"></s-article-caption>
          </v-layout>
          <v-layout class="my-4">
            <div v-html="htmlBody"></div>
          </v-layout>
          <v-layout>
            <v-chip v-for="item in (blogArticleData.tags || [])"
                    :key="item.id"
                    label>#{{ item.tagName }}</v-chip>
          </v-layout>
        </v-container>
      </v-card-title>
    </v-card>
  </v-flex>
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
        blogArticleData: {}
      };
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
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

<style lang='scss' scoped='' type='text/css'>
</style>
