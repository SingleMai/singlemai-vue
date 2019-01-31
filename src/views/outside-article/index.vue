<template>
  <v-flex xs12
          md6
          offset-md3>
    <div v-for="(artile, index) in outsideArticles"
         :key="artile.title">
      <s-article-card :index="index"
                      :title="artile.title"
                      :desc="artile.desc"
                      :hasRead="artile.hasRead"
                      @clickDetailBtn="route2Detail"></s-article-card>
    </div>
  </v-flex>
</template>
<script>
import gql from 'graphql-tag';

export default {
  name: 'OutsideArticle',
  data() {
    return {
      outsideArticleData: []
    };
  },
  apollo: {
    outsideArticleData: {
      query: gql`
        query findPagingOutsideArticle(
          $input: Input_Paging = { limit: 10, offset: 0 }
        ) {
          findPagingOutsideArticle(input: $input) {
            count
            rows {
              id
              title
              coverImage
              path
              desc
              hasRead
            }
          }
        }
      `,
      // 自定义解析result结果的参数。这样可以使apollo使用outsideArticleData作为键名
      update(data) {
        return data.findPagingOutsideArticle;
      }
    }
  },
  computed: {
    outsideArticles() {
      return (this.outsideArticleData && this.outsideArticleData.rows) || [];
    }
  },
  methods: {
    route2Detail({ id, index }) {
      window.open(this.outsideArticles[index].path, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css"></style>
