import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
const [content, setContent] = useState("")

const onSubmit = async(event) => {
  event.preventDefault();

  await axios.post(
    `http://localhost:8081/posts/${postId}/comments`, {
    content
  })

  setContent("")
}
return (
  <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Write a new Comment?</label>
          <input 
            value={content}
            className="form-control"
            onChange={e => setContent(e.target.value)} />
        </div>
          <button className=" btn btn-primary"> Submit Comment</button>
      </form>
  </div>
)
}
export default CommentCreate;