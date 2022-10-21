import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>

      <div id="header">Header/ Navigation</div>

      <main>
        <article id="main">Main Contenet</article>
        <aside class="sidebar1">Sidebar 1 (nav)</aside>
        <aside class="sidebar2">Sidebar 2 (ads)</aside>
      </main>
        
      <footer>
        <p>footer</p>
      </footer>

    </body>
    
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
