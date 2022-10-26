const styles = {
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

export default function Navbar(){
  return (
    <header style={styles.header}>
      <div className="wireframe" style={styles.header_logo}>Logo</div>
      <ul style={styles.header_ul} className="normal-text">
        <li><a href="#">I/O Local</a></li>
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Account Settings</a></li>
      </ul>
    </header>
  );
}