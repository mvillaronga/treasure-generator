import React from 'react'
import ParamsForm from './ParamsForm.js'
import { rollTreasure, tiers, distribution } from './treasure.js';

class GeneratorController extends React.Component {
  constructor(props) {
    super(props);

    this.default_treasure = {coins: 0, items: []}

    this.state = {
      treasure: this.default_treasure
    }

    this.handleParamsChanged = this.handleParamsChanged.bind(this)
  }

  handleParamsChanged = (tier, dist, dice) => {
    var t = rollTreasure(tiers[tier], dice, distribution[dist])
    this.setState({treasure:t})
  }
  

  render() {
    return (
      <header className="App-header">

        <ParamsForm onParamsChanged={this.handleParamsChanged}/>

        <h1>Items</h1>
        <div>Coins {this.state.treasure.coins} GP</div>
        <ul>{
          this.state.treasure.items.map((item, idx) => 
            <li key={idx}>1 [{item.quality} {item.rarity} {item.type}] ({item.value} GP)</li>) }
        </ul>
      </header>
    )
  }
}

export default GeneratorController