import gql from 'graphql-tag';

export default {
  FIND_TAG_CATEGORY: gql`
    query {
      findAllTagCategory {
        id
        categoryId
        categoryName
      }
    }
  `
};
