import styles from './Navbar.module.css';

export default function Navbar({ changePage }){
  console.log("rendering navbar - Navbar");
  return (
    <header className={styles.header}>
      <div className={styles['header-logo']}>Logo</div>
      <ul className={styles['header-ul'] + " normal-text"}>
        <li><a href="#" onClick={() => changePage("newsfeed")}>I/O Local</a></li>
        <li><a href="#" onClick={() => changePage("profile")}>My Profile</a></li>
        <li><a href="#">Account Settings</a></li>
      </ul>
    </header>
  );
}