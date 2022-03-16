import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_POST } from "../utils/queries";
import Post from "../components/Post";

function AllPost() {
  const { loading, data } = useQuery(ALL_POST);
  const posts = data?.allPosts || [];

  if (loading) {
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <div className="container mb-5">
      <div className="d-flex flex-column align-items-center">
        {posts.map((post) => {
          return (
            <Post
              key={post._id}
              postId={post._id}
              username={post.created_by.username}
              avatarImg={post.created_by.avatarImg}
              postImg={post.postImg}
              caption={post.caption}
              likeCount={post.likeCount}
              likes={post.likes}
              comments={post.comments}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllPost;
