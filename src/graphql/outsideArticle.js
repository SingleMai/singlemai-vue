import gql from 'graphql-tag';

export default {
  FIND_PAGING_OUTSIDE_ARTICLE: gql`
    query findPagingOutsideArticle($input: Input_Paging) {
      findPagingOutsideArticle(input: $input) {
        count
        rows {
          id
          title
          coverImage
          tags {
            id
            tagName
          }
          stars
          path
          desc
          hasRead
        }
      }
    }
  `,
  READ_OUTSIDE_ARTICLE: gql`
    mutation readOutsideArticle($id: ID, $hasRead: DB_Boolean) {
      readOutsideArticle(id: $id, hasRead: $hasRead) {
        id
        hasRead
      }
    }
  `,
  STARS_OUTSIDE_ARTICLE: gql`
    mutation starsOutsideArticle($id: ID, $stars: DB_Boolean) {
      starsOutsideArticle(id: $id, stars: $stars) {
        id
        stars
      }
    }
  `
};
