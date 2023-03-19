import React from "react";
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userID={post.userId} />
      <TimeAgo timeStamp={post.date} />
      <ReactionButton post={post} />
    </article>
  );
};

export default PostExcerpt;
