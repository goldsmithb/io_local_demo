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

export default function NewsFeed({ changePage }) {
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [examplePosts, setExamplePosts] = useState(examplePostList);

  const addNewPost = (newPost) => {
    setExamplePosts((prevPosts) => [newPost, ...prevPosts]);
    setShowNewPostForm(false);
  }

  return (
    <div className={styles['news-feed']}>
      <label className={styles.filter}>
        <select >
          <option value="social">Social</option>
          <option value="market">Market</option>
          <option value="request">Request</option>
        </select>
      </label>
      <div className={styles.welcome}>Welcome to I/O Local. Get plugged in.</div>
      <div 
        className={styles['form-field'] + " " + (showNewPostForm ? "focused" : "")}
        style={{width: showNewPostForm ? "90%" : "70%"}}>
        {!showNewPostForm && (
          <input
            type="text" 
            onClick={() => setShowNewPostForm(showNewPostForm? false : true)}
            placeholder="Write a new post..."
            />
        )}
        {showNewPostForm && <NewPostForm addNewPost={addNewPost} />}
      </div>
      
      {examplePosts.map((post) => (
        <Post key={post.id} post={post} />
      ))
      // we still need some conditional things for different post types
      }
    </div>
  )
}