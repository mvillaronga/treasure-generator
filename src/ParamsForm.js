import React from 'react'
import {tiers, distribution} from './treasure'

class ParamsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tier: -1,
      distribution: -1,
      dice: 1
    }
    
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.dice_select = this.setDice(1)
  }

  setDice(cnt) {
    return [...Array(cnt)].map((item, idx) => <option value={idx + 1} key={idx + 1 }>{idx + 1}</option>)
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value =  target.value;

    if (target.name === 'tier') {
      this.dice_select = this.setDice(tiers[target.value].dice)
      this.setState({
        'dice': 1    });
      }

    this.setState({
      [name]: value    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("this.handleSubmit")
    this.props.onParamsChanged(this.state.tier, this.state.distribution, this.state.dice)
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Tiers:  
        <select 
          value={this.state.tier} 
          name="tier"
          onChange={this.handleInputChange}>

        <option value="-1"></option>
          {tiers.map((item, idx) => <option value={idx} key={idx}>{item.title} ({item.start} - {item.end})</option>)}
        </select>
      </label>

      <label>
        Distribution:  
        <select 
          value={this.state.distribution} 
          name="distribution"
          onChange={this.handleInputChange}>
          <option value="-1"></option>
          {distribution.map((item, idx) => <option value={idx} key={idx}>{item.name}</option>)}
        </select>
      </label>
      {
              console.log(this.state.tier)
          }
      <label>
        Coin Dice:
        <select 
          value={this.state.dice} 
          name="dice"
          onChange={this.handleInputChange}>
          { 
            // no idea why I can't access state and render the array here
            this.dice_select
          }
        </select>
      </label>


      <input type="submit" value="generate" />
    </form>
    )
  }
}

export default ParamsForm
