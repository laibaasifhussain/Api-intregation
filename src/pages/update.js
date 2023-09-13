import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Update() {
  const [updatePost, setUpdatePost] = useState({});
  const params = useParams();

  function getPostData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
      .then((res) => setUpdatePost({ ...res.data }))
      .catch((err) => console.log(err));
  }

  //   Update API DONE
  function UpdatePostSubmit(e) {
    e.preventDefault();
    axios
      .put(
        `https://jsonplaceholder.typicode.com/comments/${params.id}`,
        updatePost
      )
      .then((res) =>
        alert(
          `Post Updated Successfully ${res.data.id} ${res.data.email} ${res.data.body}`
        )
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <h1>Update Post {params.id}</h1>
      <form onSubmit={UpdatePostSubmit}>
        <div>
          <label>For Body</label>
          <textarea
            type="text"
            value={updatePost.body ? updatePost.body : ""}
            onChange={(e) =>
              setUpdatePost({ ...updatePost, body: e.target.value })
            }
          />
        </div>

        <div>
          <label>For Email</label>
          <input
            type="text"
            value={updatePost.email ? updatePost.email : ""}
            onChange={(e) =>
              setUpdatePost({ ...updatePost, email: e.target.value })
            }
          />
        </div>

        <button>Submit Post</button>
      </form>
    </>
  );
}
