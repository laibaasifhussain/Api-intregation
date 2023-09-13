import axios from "axios";
import { useState } from "react";

export default function Post() {
  const [newPost, setNewPost] = useState({});
  const baseApi = "https://jsonplaceholder.typicode.com/comments";

  //Post API Done
  function handlePostSubmit(e) {
    e.preventDefault();
    axios
      .post(baseApi, newPost)
      .then((res) =>
        alert(
          `(id:  ${res.data.id} ) (Email: ${res.data.email}) (Body: ${res.data.body}) post added Successfully`
        )
      )
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>Add new Post</h1>
      <form onSubmit={handlePostSubmit}>
        <div>
          <label>For Body</label>
          <textarea
            type="text"
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
        </div>

        <div>
          <label>For Email</label>
          <input
            type="text"
            onChange={(e) => setNewPost({ ...newPost, email: e.target.value })}
          />
        </div>

        <button>Submit Post</button>
      </form>
    </>
  );
}
