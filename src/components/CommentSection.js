import { useState } from 'react'

const exampleComment = {
  author: "Commenter",
  content: "I love this post."
}

const exampleComments = new Array(10);
exampleComments.fill(exampleComment);
console.log(exampleComments);

export default function CommentSection() {
  return (
    <div className="comment-section">
      {exampleComments.map((comment) => (
        <>
          <span>{comment.author}</span>
          <p>{comment.content}</p>  
        </>
      ))}
    </div>
  )
}