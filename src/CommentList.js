//wrote this component. Will need to check if it working proper.
import React, {useState, useEffect } from "react";
import axios from "axios";

const CommentList = () => {
  const [commenst, setComments] = useState({})
  
  const FetchComments = async() => {
    const res = await axios.get(
      `htp://localhost:8081/posts/${postsId}/comments`)  
  
    setComments(res.data)
  }
    
    useEffect(() => {
      FetchComments();
    }, [])

  const renderedComments = Object.values(comments).maps(comment => {
    return (
      <div className="card"
      style= {{}}
      key={comment.id}
      >
        <div>

        </div>
      </div>
    )
  })

  }

export default CommentList;