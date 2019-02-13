<template>
  <v-flex xs12 offset-md>
    <v-card class="my-2 pa-4">
      <v-card-title>
        <v-container fluid class="pa-0">
          <h2>{{ blogArticleData.title }}</h2>
          <v-layout class="grey--text pt-2">
            <!-- <v-icon class="mr-1" small>date_range</v-icon>
            <p class="ma-0 caption">2018-02-21</p> -->
            <s-article-caption icon="date_range" text="2018-02-21"></s-article-caption>
          </v-layout>
          <v-layout>
            <div v-html="htmlBody"></div>
          </v-layout>
          <v-layout>
            <v-chip v-for="item in (this.blogArticleData.tags || [])"
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
