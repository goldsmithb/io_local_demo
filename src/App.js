import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewsFeed from './components/NewsFeed'
import Navbar from './components/Navbar';
import NavSideBar from './components/NavSideBar'

function App() {
  return (
    <React.Fragment>

      <Navbar />

      <main>
        <article id="main">Main Contenet
          <NewsFeed />
        </article>
        <aside className="sidebar1">
          <NavSideBar />
        </aside>
        <aside className="sidebar2">
           {/* <AddSideBar />  */}
        </aside>


      </main>
        
      <footer>
        <p>footer</p>
      </footer>

    </React.Fragment>
  );
}

export default App;
