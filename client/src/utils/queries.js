import { gql } from "@apollo/client";

export const ALL_POST = gql`
  {
    allPosts {
      _id
      post_created_at
      postImg
      caption
      created_by {
        _id
        username
        avatarImg
      }
      createdAt
    }
  }
`;
