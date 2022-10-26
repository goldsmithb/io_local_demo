import { useState } from 'react';

export default function NavSideBar() {
  const [showGroups, setShowGroups] = useState(false);

  return (
    <ul>
      <li>My Profile</li>
      <li>My Friends</li>
      <li><span 
            className="caret" 
            onClick={() => setShowGroups(showGroups ? false : true)}>
              My Groups
          </span>
        {showGroups && (
          <ul className="nested">
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
