import gql from 'graphql-tag';

export default {
  FIND_ALL_ARTICLE_TAG: gql`
    query {
      findAllArticleTag {
        id
        tagName
      }
    }
  `
};
