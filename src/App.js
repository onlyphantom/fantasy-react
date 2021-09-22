import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Fantasy Football. Everyone is a loser.
        </p>
        <a
          className="App-link"
          href="https://github.com/onlyphantom"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
