/*
A Basic Post Component

Post will have a minimum width and height but otherwise flexibility

Post Object:
{
    title: "Example",
    author: "Bob S.",
    content: ""...",
    type: "social" | "market" | "request",
    score: int,
    date: string
  }
*/

import { useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Post.module.css'
import fullscreenButtonImg from '../media/fullscreen_button.png';
import upvoteImg from '../media/upvote.png';
import CommentSection from './CommentSection'

export default function Post({ post }) {
  const [score, setScore] = useState(post.score);
  const [showComments, setShowComments] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const clickFullscreen = () => { 
    isFullscreen ? setIsFullscreen(false) : setIsFullscreen(true);
  }
  const BGColors = {
    "social": "#ffcc8c",
    "market": "#8cffdb",
    "request": "#ff8cee"
  };
  const getBGColorRule = (type) => BGColors[type];

  const jsxPost = (
    <>
    <div 
      key={post.id} 
      className={styles.post + " " + (isFullscreen ? styles.fullscreen : " ")}
      style={{
        backgroundColor: getBGColorRule(post.type)
      }}>
      <div className={styles.header}>
        <div className="icon">Icon</div>
        <span>{post.title}</span>
        <input 
          onClick={clickFullscreen} 
          type="image" 
          className={styles.image} 
          alt="Full screen" 
          src={fullscreenButtonImg} />
      </div>

      <div className={styles.content}>{post.content}</div>

      <div className={styles.footer}>
        <div className={styles['flexbox-vertical']}>
          <span>{post.author}</span>
          <span className={styles.date}>{post.date}</span>
        </div>
        <div className={styles.controls}>
          <span className="score">{score}</span>
          <input 
            onClick={() => setScore(score + 1)} 
            type="image" 
            className={styles.image} 
            alt="upvote" 
            src={upvoteImg} />  
          <input 
            onClick={() => setScore(score - 1)} 
            type="image" 
            className={styles.image + " "  + styles.downvote} 
            alt="upvote" 
            src={upvoteImg} />  
          <span onClick={()=> setShowComments(showComments? false: true)}>comments</span>
        </div>
      </div>
    </div>
    {showComments && <CommentSection />}
    </>
  );

  // full screen mode
  if (isFullscreen) {
    return ReactDOM.createPortal(
      <div className={styles['fullscreen-backdrop']}>
        {jsxPost}
      </div>
    , document.body)
  } else if (!isFullscreen) {
    return (
      <>
        {jsxPost}
      </>
    )
  }
}