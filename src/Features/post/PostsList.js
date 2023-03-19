import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./PostSlice";
import PostExcerpt from "./PostExcerpt";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const poststatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const dispatch = useDispatch();
  useEffect(() => {
    const abortController = new AbortController();
    if (poststatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [poststatus]);
  let content;
  if (poststatus === "loading") {
    content = <p>Loading...</p>;
  } else if (poststatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => {
      return <PostExcerpt key={post.id} post={post} />;
    });
  } else if (poststatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
