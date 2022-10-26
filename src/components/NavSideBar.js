import { useState } from 'react';
import styles from './NavSideBar.module.css'

export default function NavSideBar() {
  const [showGroups, setShowGroups] = useState(false);

  return (
    <ul className={styles.sidebar}>
      <li>My Profile</li>
      <li>My Friends</li>
      <li><span 
            className={styles.caret + " " + (showGroups ? styles['caret-down'] : "")}
            onClick={() => setShowGroups(showGroups ? false : true)}>
              My Groups
          </span>
        {showGroups && (
          <ul className={styles.nested}>
            <li>10591</li>
            <li>Westchester Country</li>
            <li>New York City</li>
            <li>New York</li>
            <li>Tri-State Area</li>
          </ul>
        )}
      </li>
      <li>My Mailbox</li>

    </ul>
  )
}
