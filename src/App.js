import logo from './logo.svg';
import './App.css';
import {rollTreasure, makeItem, tiers, distribution} from './treasure.js'

function App() {
  var item = makeItem(tiers[1], distribution[1])
  var treasure = rollTreasure(tiers[2], 1, 2, distribution[1]) 

  const items = treasure.items.map((item) => 
    <li>1 [{item.quality} {item.rarity} {item.type}] ({item.value} GP)</li>)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Items</h1>
        <div>Coins {treasure.coins} GP</div>
        <ul>{items}</ul>
      </header>
    </div>
  );
}

export default App;
