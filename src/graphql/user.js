import gql from 'graphql-tag';

export default {
  SIGNIN: gql`
    query signin($input: Input_UserSign) {
      signin(input: $input) {
        user {
          id
          name
          avator
          permission
        }
        token
      }
    }
  `
};
