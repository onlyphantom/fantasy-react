import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [version, setVersion] = useState(1)
  const [appCreator, setAppCreator] = useState('Calvin')
  const [pokemon, setPokemon] = useState({})

  // when the app first load, do something
  useEffect(() => {
    setVersion(20)
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(json => {
      setPokemon(json)
    })
    console.log(pokemon)
    // listen to an api
  }, [])

  useEffect(() => {
    setVersion(v=>v+100)
  }, [appCreator])

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bold">
          Welcome to Fantasy Football <small>(v: {version})</small>. <br/>Everyone is a loser.
        </p>
        <button onClick={() => setVersion(prev => prev + 1)}>Increment Version</button>
        <button onClick={() => setVersion(prev => prev -1)}>Reduce Version</button>
        <button onClick={() => setVersion(1)}>Reset Version</button>
        <input type="text" value={appCreator} onChange={(e) => setAppCreator(e.target.value.toUpperCase())} />
        <a
          className="App-link"
          href="https://github.com/onlyphantom"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow {appCreator} on GitHub
        </a>
        {pokemon['forms'] && <a className="App-link" href={pokemon && pokemon["forms"][0]["url"]} target="_blank">
          Find {pokemon && pokemon["forms"][0]['name']} on the web.
        </a>}
      </header>
    </div>
  );
}

export default App;
