import NewsFeed from './NewsFeed'
import styles from './Profile.module.css'

/* A profile has
  name,
  bio,
  post history
  add friend/message button
*/

export default function Profile({ changePage }) {
  return (
    <div className={styles.profile}>
      <input 
          onClick={() => changePage("newsfeed")}
          type="image" 
          className={styles['back-button']} 
          alt="Back Arrow Navigation" 
          src={"/backArrow.png"} />
      <div className={styles['top-bar']}>
        <img 
          src="/exampleProfilePicture.png" 
          alt="Profile picture"/>
        <div className={styles.bio}>
          <h2>John Doe</h2>
          <p>Read all about me!</p>
        </div>
        <button>Add Friend/Send Message</button>
      </div>

      <div className={styles['post-history']}>Post history</div>
    </div>
  )
}

// TODODODODOO
// - add filters to newsfeed 
// - add exmaple posts