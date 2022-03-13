import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_POST } from "../utils/queries";

function AllPost() {
  const { loading, data } = useQuery(ALL_POST);
  const posts = data?.allPosts || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <h1>POST</h1>
    </div>
  );
}

export default AllPost;
