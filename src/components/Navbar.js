import styles from './Navbar.module.css';

const gstyles = {
  header: {
    backgroundColor: "#b8b8b8",
    color: 'white',
    width: '100%',
    margin: '0',
    padding: '0 15%',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header_ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '30px'
  },
  header_logo: {
    height: '35px',
    width: '35px',
    display: 'inline' // doesnt give desired overlay effect - rm?
  }
}

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