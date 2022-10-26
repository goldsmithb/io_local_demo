import { useState } from 'react';
import fullscreenButtonImg from '../media/fullscreen_button.png';
import Post from './Post'

export default function NewsFeed() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [examplePosts, setExamplePosts] = useState([{
    title: "Example",
    author: "Bob S.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
    type: "social"
  },
  {
    title: "Example 2",
    author: "Karen S.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
    type: "market"
  }]);

  function clickFullscreen() { 
    isFullscreen ? setIsFullscreen(false) : setIsFullscreen(true);
  }

  return (
    <div className="news-feed">
      {examplePosts.map((post) => (
        <div className={"post wireframe " + (isFullscreen ? "fullscreen" : "")}>
          <div className="post__header">
            <div className="post__header-icon wireframe">Icon</div>
            <span>{post.title}</span>
            <input onClick={clickFullscreen} type="image" id="image" alt="Full screen" src={fullscreenButtonImg} />
          </div>

          <div className="post__content">{post.content}</div>

          <div className="post__footer">
            <span>{post.author}</span>
            <div className="post__controls">
              <div>upvote</div>
              <div>downvote</div>
              <div>comments</div>
            </div>
          </div>
        </div>
      ))
      // we still need some conditional things for different post types
      }
    </div>
    
    // <div className={"news-feed " + (isFullscreen ? "fullscreen-backdrop" : "")}>
    //   <Post isFullscreen={isFullscreen} clickFullscreen={clickFullscreen}/>
    //   <Post />
    //   <Post />
    // </div>
  )
}