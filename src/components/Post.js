/*
A Basic Post Component
*/

import { useState } from 'react'

const styles = {

  button: {
    fontSize: "18px",
    backgroundColor: "#333"
  }
}

const Post = () => {
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
    <div>
      <div>Icon, Title, FS</div>
      <div>Main content</div>
      <div>Author, upvote, downvote, comments</div>
    </div>
    /*
    <div className="banner">
      <h2>{title.toUpperCase()}</h2>
      <p>{"by " + author}</p>
      <p>Today's date is: {new Date().toDateString()}</p>
      <p>Random Number: {Math.random() * 100}</p>
      <a href={address}>Visit the Net Ninja Site</a>
      <br></br>
      <button style={styles.button} onClick={(e) => console.log(e) }>Click me</button>
      <button onClick={handleClick}>Click me - I use a handler defined outside the xml block</button>

      <div>another div?</div>
    </div>
    // NO! <div>another div?</div>
    */
  )
}

// render the component to the dom
//   render <component> in <place in dom>
ReactDOM.render(<Post />, document.getElementById('main'))