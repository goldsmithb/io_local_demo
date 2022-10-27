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
import styles from './Post.module.css'
import fullscreenButtonImg from '../media/fullscreen_button.png';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import CommentSection from './CommentSection'

export default function Post({ post, isFullscreen, clickFullscreen }) {
  const [id, setId] = useState(post.id);
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);
  const [type, setType] = useState(post.type);
  const [score, setScore] = useState(post.score);
  const [showComments, setShowComments] = useState(false);

  return (
    <>
    <div key={id} className={styles.post + (isFullscreen ? " fullscreen wireframe" : " wireframe")}>
      <div className={styles.header}>
        <div className={styles['header-icon'] +" wireframe"}>Icon</div>
        <span>{title}</span>
        <input 
          onClick={clickFullscreen} 
          type="image" 
          className={styles.image} 
          alt="Full screen" 
          src={fullscreenButtonImg} />
      </div>

      <div className={styles.content}>{content}</div>

      <div className={styles.footer}>
        <span>{author}</span>
        <div className={styles.controls}>
          <span className="score">{score}</span>
          <span onClick={() => setScore(score + 1)}>upvote</span>
          <span onClick={() => setScore(score - 1)}>downvote</span>
          <span onClick={()=> setShowComments(showComments? false: true)}>comments</span>
        </div>
      </div>
    </div>
    {showComments && <CommentSection />}

    </>
  )
}