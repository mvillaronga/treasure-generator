import logo from './logo.svg';
import './App.css';
import {makeItem, tiers, distribution} from './treasure.js'

function App() {
  var item = makeItem(tiers[2], distribution[1])

  return (
    <div className="App">
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
        <h1>Items</h1>
        <div>
          1 [{item.quality} {item.rarity} {item.type}] ({item.value} GP)
        </div>
      </header>
    </div>
  );
}

export default App;
