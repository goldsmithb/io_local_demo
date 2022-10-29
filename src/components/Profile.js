import styles from './Profile.module.css'

export default function Profile({ changePage }) {
  return (
    <div className={styles.profile}>
      <span 
        className={styles['back-button']} 
        onClick={() => changePage("newsfeed")}>
        Go back</span>
      <div className={styles['top-bar']}>
        <img alt="Profile picture"/>
        <div className={styles.bio}>
          <h2>John Doe</h2>
          <p>Read all about me!</p>
        </div>
      </div>

      <div>Post history</div>
    </div>

  )
}
