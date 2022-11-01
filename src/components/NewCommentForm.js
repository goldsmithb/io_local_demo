import { useState } from 'react'
import styles from "./NewCommentForm.module.css"

export default function NewCommentForm({ addNewComment }) {
  const [content, setContent] = useState("");

  const resetForm = () => {
    setContent("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      author: "Current User",
      content: content
    }
    addNewComment(newComment);
    resetForm();
  }
  console.log(content)

  return (
  <form onSubmit={handleSubmit} className={styles.form}>
    <label>
      <span className='icon'>Icon</span>
    </label>
    <label className={styles.content}>
      <input 
        type="text" 
        value={content} 
        onChange={(e) => setContent(e.target.value)}/>
    </label>
    <button>Submit</button>
  </form>
  )
}
