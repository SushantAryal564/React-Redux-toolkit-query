import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../post/PostSlice";
import { selectAllUsers } from "../Users/userSlice";
const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");
  const users = useSelector(selectAllUsers);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserID(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    if (title && content) dispatch(postAdded(title, content, userID));
    setTitle("");
    setContent("");
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userID);
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h2>Add a new Post</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          name="postTitle"
          onChange={onTitleChanged}
          id="postTitle"
          value={title}
        />
        <select id="postAuthor" value={userID} onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content: </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default PostForm;
