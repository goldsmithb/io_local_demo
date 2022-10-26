import { useState } from 'react';
import styles from './NewPostForm.module.css'

/**BUG: reset form does not reset the type state */

export default function NewPostForm({ addNewPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("social");

  const resetForm = () => {
    setTitle("");
    setContent("");
    setType("");
  }

  const handleSubmit = (e) => {
    console.log(type);
    e.preventDefault();
    const newPost = {
      title: title,
      author: "current user",
      content: content,
      type: "social",
      score: 0
    }
    addNewPost(newPost);
    resetForm();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div id={styles['top-bar']}>
        <label className={styles.title}>
          <span>Title:</span>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title} 
            className={styles.content}/>
        </label>
        <label className={styles.type}>
          <span>Post type:</span>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="social">Social</option>
            <option value="market">Market</option>
            <option value="request">Request</option>
          </select>
        </label>
      </div>

      <label>
        <span>Content:</span>
        <input 
          type="text" 
          onChange={(e) => setContent(e.target.value)}
          value={content} />
      </label>
      <button>Submit</button>
    </form>
  )
}