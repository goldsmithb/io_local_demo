import { useState } from 'react'
import styles from './CommentSection.module.css'
import NewCommentForm from './NewCommentForm'

const exampleComment = {
  author: "Commenter",
  content: "I love this post."
}

const exampleCommentsList = new Array(10);
exampleCommentsList.fill(exampleComment);
console.log(exampleCommentsList);

export default function CommentSection() {
  const [exampleComments, setExampleComments] = useState(exampleCommentsList);

  const addNewComment = (newComment) => {
    setExampleComments((oldComments) => [newComment, ...oldComments]);
  }

  return (
    <div className={styles['comment-section']}>
      <NewCommentForm addNewComment={addNewComment}/>
      {exampleComments.map((comment) => (
        <div className={styles.comment}>
          <span>{comment.author}</span>
          <p>{comment.content}</p>  
        </div>
      ))}
    </div>
  )
}