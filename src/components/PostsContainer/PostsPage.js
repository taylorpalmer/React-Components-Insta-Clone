//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [post, setPost] = useState(null);
  return (
    <div className="posts-container-wrapper">
      {dummyData.map(item => {
        return <Post post={item} />;
      })
      /* map through data here to return a Post and pass data as props to Post */
      }
    </div>
  );
};

export default PostsPage;
