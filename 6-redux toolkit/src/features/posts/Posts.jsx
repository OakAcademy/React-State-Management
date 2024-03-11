import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const Posts = () => {
  const { postList, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>Posts</h1>
      {error && <h1> {error} </h1>}
      {loading && <h1>Loading</h1>}
      {!loading && (
        <ul>
          {postList.map((post, index) => (
            <li key={index}> {post.title} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
