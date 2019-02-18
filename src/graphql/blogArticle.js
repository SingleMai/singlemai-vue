import gql from 'graphql-tag';

export default {
  SUBSCRIBE_BLOG_ARTICLE: gql`
    subscription addBlogArticle {
      addBlogArticle {
        id
        title
        coverImage
        desc
        createdAt
        updatedAt
        category {
          id
          categoryName
        }
      }
    }
  `,
  FIND_PAGING_BLOG_ARTICLE: gql`
    query findPagingBlogArticle($input: Input_Paging) {
      findPagingBlogArticle(input: $input) {
        count
        rows {
          id
          title
          coverImage
          desc
          createdAt
          updatedAt
          category {
            id
            categoryName
          }
        }
      }
    }
  `,
  GET_BLOG_ARTICLE_DETAIL: gql`
    query getBlogArticleDetail($id: ID!) {
      findBlogArticleDetail(id: $id) {
        id
        title
        coverImage
        desc
        createdAt
        updatedAt
        mainBody
        category {
            id
            categoryName
        }
        tags {
          id
          tagName
        }
      }
    }
  `,
  CREATE_BLOG_ARTICLE: gql`
    mutation createBlogArticle($input: Input_BlogArticle!) {
      createBlogArticle(input: $input) {
        id
        title
        desc
        coverImage
        mainBody
      }
    }
  `
};
