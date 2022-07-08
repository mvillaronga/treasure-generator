import React from 'react'
import ParamsForm from './ParamsForm.js'
import {rollTreasure, tiers, distribution} from './treasure.js'

class GeneratorController extends React.Component {
  constructor(props) {
    super(props);

    this.treasure = rollTreasure(tiers[2], 1, 2, distribution[1]) 
    this.items = this.treasure.items.map((item) => 
      <li>1 [{item.quality} {item.rarity} {item.type}] ({item.value} GP)</li>)
  
  }

  render() {
    return (
      <header className="App-header">

        <ParamsForm />

        <h1>Items</h1>
        <div>Coins {this.treasure.coins} GP</div>
        <ul>{this.items}</ul>
      </header>
    )
  }
}

export default GeneratorController