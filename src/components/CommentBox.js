export default function CommentBox({ obj, onDeletePost, onUpdatePost }) {
  const styleDelButton = {
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "5px",
    color: "white",
    border: "1px solid white",
    marginRight: "5px",
  };

  return (
    <>
      <div
        style={{ backgroundColor: "cornsilk", margin: "5px 20px 50px 20px" }}
      >
        <p>Post Id: {obj.postId}</p>
        <p>Body: {obj.body}</p>
        <p>Email: {obj.email}</p>
        <button style={styleDelButton} onClick={() => onDeletePost(obj.id)}>
          Delete Post
        </button>
        <button
          style={{ ...styleDelButton, backgroundColor: "green" }}
          onClick={() => onUpdatePost(obj.id)}
        >
          Update Post
        </button>
      </div>
    </>
  );
}
