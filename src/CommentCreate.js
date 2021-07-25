import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
const [comment, setComment] = useState("")

const onSubmit = async(event) => {
  event.preventDefault();

  await axios.post(`http://localhost:8081/posts/${postId}/comments`, {
    comment
  })

  setComment("")
}
return (
  <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Write a new Comment?</label>
          <input 
            className="form-control"
            value={comment}
            onChange={e => setComment(e.target.value)} />
        </div>
          <button className=" btn btn-primary"> Submit Comment</button>
      </form>
  </div>
)
}
export default CommentCreate;