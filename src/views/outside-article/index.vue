<template>
  <v-flex xs12
          md6
          offset-md3>
    <div v-for="(artile, index) in outsideArticles"
         :key="artile.title">
      <s-article-card :index="index"
                      :title="artile.title"
                      :desc="artile.desc"
                      :stars="artile.stars"
                      :hasRead="artile.hasRead"
                      :coverImage="artile.coverImage"
                      :tags="artile.tags"
                      @clickDetailBtn="learnArticle"
                      @clickStartBtn="starsArticle"></s-article-card>
    </div>
  </v-flex>
</template>
<script>
import query from '@graphql/';
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
      query: query.FIND_PAGING_OUTSIDE_ARTICLE,
      // 参数
      variables: {
        input: {
          limit: 10,
          offset: 0
        }
      },
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
    async starsArticle({ index }) {
      const { id, stars } = this.outsideArticles[index];
      await this.$apollo.mutate({
        mutation: query.STARS_OUTSIDE_ARTICLE,
        // 参数
        variables: {
          id,
          stars: !stars
        }
      });
    },
    async learnArticle({ index }) {
      const { id, path } = this.outsideArticles[index];
      await this.$apollo.mutate({
        mutation: query.READ_OUTSIDE_ARTICLE,
        // 参数
        variables: {
          id,
          hasRead: true
        }
      });
      this.route2Detail(path);
    },
    route2Detail(path) {  
      window.open(path, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css"></style>
