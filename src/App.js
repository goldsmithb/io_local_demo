import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewsFeed from './components/NewsFeed'
import Navbar from './components/Navbar';
import NavSideBar from './components/NavSideBar'
import AdSideBar from './components/AdSideBar';
import Profile from './components/Profile'

function App() {
  // pages are: newsfeed | profile
  const [page, setPage] = React.useState("newsfeed");
  const changePage = (page) => setPage(page); 

  return (
    <React.Fragment>

      <Navbar />

      <main>
        <article id="main">
          {page === "newsfeed" && <NewsFeed />}
          {page === "profile" && <Profile changePage={changePage}/>}
          {/* ^^ we can have a go back button on the prof page*/}
        </article>
        <aside className="sidebar1">
          <NavSideBar page={page} changePage={changePage}/>
        </aside>
        <aside className="sidebar2">
           <AdSideBar /> 
        </aside>

      </main>
        
      <footer>
        <p>Bradley Goldsmith 2022</p>
      </footer>

    </React.Fragment>
  );
}

export default App;
