/*
A Basic Post Component
*/

import { useState } from 'react'
import './Post.css'

export default function Post() {
  const title = "Example Post";
  const author = "This is a website for learning react.";
  const content = "Lorem ipsum";

  const [isFocused, setIsFocused] = useState(false);

  const handleClick = (e) => {
    console.log("Clicked!");
    console.log("The site title is:", title);
    console.log(e);
  }

  return (
    <div className="post wireframe">
      <div className="post__header">
        <div>Icon</div>
        <span>Title</span>
        <div>FS Button</div>
      </div>
      <div className="post__content">Main content</div>
      <div className="post__footer">
        <span>Author</span>
        <div className="post__controls">
          <div>upvote</div>
          <div>downvote</div>
          <div>comments</div>
        </div>
      </div>
    </div>
  )
}