import { Fragment } from "react";
import "./App.css";
import AddPostForm from "./features/Posts/AddPostForm";
import PostsList from "./features/Posts/postList";
function App() {
  return (
    <Fragment>
      <AddPostForm />
      <PostsList />
    </Fragment>
  );
}

export default App;
