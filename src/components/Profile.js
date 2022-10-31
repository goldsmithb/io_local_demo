import styles from './Profile.module.css'

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
      </div>

      <div>Post history</div>
    </div>
  )
}
