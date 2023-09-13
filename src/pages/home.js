import axios from "axios";
import { useEffect, useState } from "react";
import CommentBox from "../components/CommentBox";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  //Get API Done
  function getApi() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments([...res.data]))
      .catch((err) => err);
  }

  useEffect(() => {
    getApi();
  }, []);

  // Delete API done
  function DeletePost(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => alert(`Post ${id} Deleted Successfully`))
      .catch((err) => console.log(err));
  }

  function UpdatePost(id) {
    navigate(`/${id}`);
  }
  return (
    <>
      <div>
        <button
          style={{
            backgroundColor: "orange",
            padding: "10px",
            marginLeft: "20px",
          }}
          onClick={() => navigate("/post")}
        >
          Add New Post
        </button>
      </div>

      <div>
        {comments.map((c) => (
          <CommentBox
            key={c.id}
            obj={c}
            onDeletePost={DeletePost}
            onUpdatePost={UpdatePost}
          />
        ))}
      </div>
    </>
  );
}
