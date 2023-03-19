import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/userSlice";
import React from "react";

const PostAuthor = ({ userID }) => {
  const user = useSelector(selectAllUsers);
  const author = user.find((user) => user.id === userID);
  return <span>by {author ? author.name : "unknown author"}</span>;
};

export default PostAuthor;
