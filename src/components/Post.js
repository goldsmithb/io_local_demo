/*
A Basic Post Component

Post will have a minimum width and height but otherwise flexibility
*/

import { useState } from 'react'
import './Post.css'

export default function Post({ isFullscreen, clickFullscreen }) {
  const title = "Example Post";
  const author = "This is a website for learning react.";
  const content = "Lorem ipsum";

  return (
    <div className={"post wireframe " + (isFullscreen ? "fullscreen" : "")}>
      <div className="post__header">
        <div className="post__header-icon wireframe">Icon</div>
        <span>Title</span>
        <input onClick={clickFullscreen} type="image" id="image" alt="Full screen" src={require("../media/fullscreen_button.png")} />
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