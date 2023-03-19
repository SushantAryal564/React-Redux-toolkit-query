import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice";

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😲",
    heart: "❤️",
    rocket: "🚀",
    coffee: "🍵",
  };
  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
        }}
      >
        {emoji}|{post.reactions[name]}
      </button>
    );
  });
  return reactionButton;
};

export default ReactionButton;
