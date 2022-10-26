/*
A Basic Post Component

Post will have a minimum width and height but otherwise flexibility

Post content:
{
    title: "Example",
    author: "Bob S.",
    content: ""...",
    type: "social" | "market" | "request"
  }
*/

import { useState } from 'react'
import './Post.css'
import fullscreenButtonImg from '../media/fullscreen_button.png';

export default function Post({ isFullscreen, clickFullscreen }) {
  return (
    <div className={"post wireframe " + (isFullscreen ? "fullscreen" : "")}>
      <div className="post__header">
        <div className="post__header-icon wireframe">Icon</div>
        <span>Title</span>
        <input onClick={clickFullscreen} type="image" id="image" alt="Full screen" src={fullscreenButtonImg} />
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