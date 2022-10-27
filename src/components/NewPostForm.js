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
    e.preventDefault();
    const newPost = {
      title: title,
      id: Math.floor(Math.random()*1000),
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
      <div className={styles['top-bar']}>
        <label className={styles.title}>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title..."
            className={styles.title}/>
        </label>
        <label className={styles.type}>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="social">Social</option>
            <option value="market">Market</option>
            <option value="request">Request</option>
          </select>
        </label>
      </div>

      <label className={styles.content}>
        <input 
          type="text" 
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content..."
          value={content} />
      </label>

      <div className={styles.buttons}>
        <button type="button">Add Image</button>  
        <button>Submit</button>
      </div>

    </form>
  )
}