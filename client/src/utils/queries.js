import { gql } from "@apollo/client";

export const ALL_POST = gql`
  {
    allPosts {
      _id
      postImg
      caption
      created_by {
        _id
        username
        avatarImg
      }
      createdAt
      likeCount
      likes {
        _id
      }
      comments {
        _id
        comment_by {
          _id
          username
          avatarImg
        }
        commentText
        createdAt
      }
    }
  }
`;
