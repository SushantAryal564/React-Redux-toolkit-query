import "./App.css";
import Counter from "./Features/Counter/counter";
import PostsList from "./Features/post/PostsList";
import PostForm from "./Features/PostForm/PostForm";
function App() {
  return (
    <div>
      <PostForm />
      <PostsList />
    </div>
  );
}
export default App;
