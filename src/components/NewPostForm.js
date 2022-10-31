import { useState } from 'react';
import styles from './NewPostForm.module.css'

/**BUG: reset form does not reset the type state */

const numToDay = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

export default function NewPostForm({ addNewPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("social");

  const resetForm = () => {
    setTitle("");
    setContent("");
    setType("");
  }

  const getDateString = () => {
    let date = new Date()
      .toString()
      .split(" ");
    date[0] += ',';
    date[3] += " at";
    return date
      .slice(0, 5)
      .join(" ")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      id: Math.floor(Math.random()*1000),
      author: "current user",
      content: content,
      type: type,
      score: 0,
      date: getDateString()
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