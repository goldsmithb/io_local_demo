import styles from './CommentSection.module.css'

const exampleComment = {
  author: "Commenter",
  content: "I love this post."
}

const exampleComments = new Array(10);
exampleComments.fill(exampleComment);
console.log(exampleComments);

export default function CommentSection() {
  return (
    <div className={styles['comment-section']}>
      {exampleComments.map((comment) => (
        <div className={styles.comment}>
          <span>{comment.author}</span>
          <p>{comment.content}</p>  
        </div>
      ))}
    </div>
  )
}