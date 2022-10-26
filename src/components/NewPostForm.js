import { useState } from 'react';

/**BUG: reset form does not reset the type state */

export default function NewPostForm({ addNewPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("social");

  const resetForm = () => {
    setTitle("");
    setContent("");
    setType("market");
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
      <label>
        <span>Post type:</span>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="social">Social</option>
          <option value="market">Market</option>
          <option value="request">Request</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}