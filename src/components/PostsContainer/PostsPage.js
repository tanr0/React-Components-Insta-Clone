//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"

const PostsPage = () => {
    // set up state for your data
  const [state, setState] = useState();

    // map through data here to return a Post and pass data as props to Post
  return (
    <div className="posts-container-wrapper">
      {dummyData.map( (item) => {
        return <Post body={item.text} username={item.username} />
      }) }
    </div>
  );
};

export default PostsPage;

