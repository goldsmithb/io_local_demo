import { useState } from 'react';

export default function NewPostForm({ addNewPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const resetForm = () => {
    setTitle("");
    setContent("");
  }

  const handleSubmit = (e) => {
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
    <form onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
      </label>
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