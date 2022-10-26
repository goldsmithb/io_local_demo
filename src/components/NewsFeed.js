import { useState } from 'react';
import fullscreenButtonImg from '../media/fullscreen_button.png';
import Post from './Post'
import NewPostForm from './NewPostForm'
import styles from './NewsFeed.module.css'

const examplePostList = [{
  id: Math.floor(Math.random()*1000),
  title: "Example",
  author: "Bob S.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
  type: "social",
  score: 0
},
{
  id: Math.floor(Math.random()*1000),
  title: "Example 2",
  author: "Karen S.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
  type: "market",
  score: 100
},
{
  id: Math.floor(Math.random()*1000),
  title: "Example 2",
  author: "Karen S.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
  type: "market",
  score: 100
},
{
  id: Math.floor(Math.random()*1000),
  title: "Example 2",
  author: "Karen S.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
  type: "market",
  score: 100
},
{
  id: Math.floor(Math.random()*1000),
  title: "Example 2",
  author: "Karen S.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
  type: "market",
  score: 100
},
{
  id: Math.floor(Math.random()*1000),
  title: "Example 2",
  author: "Karen S.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
  type: "market",
  score: 100
},
{
  id: Math.floor(Math.random()*1000),
  title: "Example 2",
  author: "Karen S.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec velit non lorem ultrices aliquet non eu risus. Vivamus euismod sapien sit amet eros gravida pellentesque vitae at sem. Nam at aliquam sapien. Aliquam et tortor sit amet urna laoreet dignissim. Mauris imperdiet blandit varius. Sed in varius quam. Morbi volutpat porta dolor, et ornare augue fringilla sit amet. Praesent non urna orci. Duis orci nisi, congue sed est non, fringilla volutpat elit. Curabitur lacus ipsum, dictum ac dolor non, viverra dignissim nisi.",
  type: "market",
  score: 100
}]

export default function NewsFeed() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [examplePosts, setExamplePosts] = useState(examplePostList);

  const clickFullscreen = () => { 
    isFullscreen ? setIsFullscreen(false) : setIsFullscreen(true);
  }

  const addNewPost = (newPost) => {
    setExamplePosts((prevPosts) => [newPost, ...prevPosts]);
    setShowNewPostForm(false);
  }

  return (
    <div className={styles['news-feed']}>
      {!showNewPostForm && (
        <button onClick={() => setShowNewPostForm(showNewPostForm? false : true)}>
          Create New Post
        </button>
      )}
      {showNewPostForm && <NewPostForm addNewPost={addNewPost} />}
      {examplePosts.map((post) => (
        <Post key={post.id} 
          post={post} isFullscreen={isFullscreen} 
          clickFullscreen={clickFullscreen}/>
      ))
      // we still need some conditional things for different post types
      }
    </div>
  )
}