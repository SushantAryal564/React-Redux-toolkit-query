import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded, addNewPosts } from "../post/PostSlice";
import { selectAllUsers } from "../Users/userSlice";
const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const users = useSelector(selectAllUsers);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserID(e.target.value);
  console.log(userID);
  const canSave =
    [title, content, userID].every(Boolean) && addRequestStatus === "idle";

  const submitHandler = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          addNewPosts({ title, body: content, userId: userID })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserID("");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });
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
