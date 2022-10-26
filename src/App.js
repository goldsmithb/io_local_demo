import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewsFeed from './components/NewsFeed'
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>

      <Navbar />

      <main>
        <article id="main">Main Contenet
          <NewsFeed />
        </article>
        <aside className="sidebar1">Sidebar 1 (nav)</aside>
        <aside className="sidebar2">Sidebar 2 (ads)</aside>


      </main>
        
      <footer>
        <p>footer</p>
      </footer>

    </React.Fragment>
  );
}

export default App;
