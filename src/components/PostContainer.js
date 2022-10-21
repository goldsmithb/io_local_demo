import { useState } from 'react';
import Post from './Post'

export default function PostContaine() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  function clickFullscreen() { 
    isFullscreen ? setIsFullscreen(false) : setIsFullscreen(true);
  }

  return (
    <div className={"post-container " + (isFullscreen ? "fullscreen-backdrop" : "")}>
      <Post isFullscreen={isFullscreen} clickFullscreen={clickFullscreen}/>
      <Post />
      <Post />
    </div>
  )
}