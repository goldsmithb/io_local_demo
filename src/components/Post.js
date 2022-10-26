/*
A Basic Post Component

Post will have a minimum width and height but otherwise flexibility

Post content:
{
    title: "Example",
    author: "Bob S.",
    content: ""...",
    type: "social" | "market" | "request",
    score: int
  }
*/

import { useState } from 'react'
import './Post.css'
import fullscreenButtonImg from '../media/fullscreen_button.png';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

export default function Post({ post, key, isFullscreen, clickFullscreen }) {
  const [id, setId] = useState(post.id);
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);
  const [type, setType] = useState(post.type);
  const [score, setScore] = useState(post.score);

  return (
    <div key={id} className={"post wireframe " + (isFullscreen ? "fullscreen" : "")}>
      <div className="post__header">
        <div className="post__header-icon wireframe">Icon</div>
        <span>{title}</span>
        <input onClick={clickFullscreen} type="image" id="image" alt="Full screen" src={fullscreenButtonImg} />
      </div>

      <div className="post__content">{content}</div>

      <div className="post__footer">
        <span>{author}</span>
        <div className="post__controls">
          <span className="score">{score}</span>
          <span onClick={() => setScore(score + 1)}>upvote</span>
          <span onClick={() => setScore(score - 1)}>downvote</span>
          <span>comments</span>
        </div>
      </div>
    </div>
  )
}