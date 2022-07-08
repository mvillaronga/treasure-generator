import React from 'react'
import {tiers, distribution} from './treasure'

class ParamsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tier: -1,
      distribution: -1,
      dice: 0
    }
    
    this.handleInputChange = this.handleInputChange.bind(this)

    this.tier_select = tiers.map((item, idx) => 
      <option value={idx}>{item.title} ({item.start} - {item.end})</option>
    )
    this.dist_select = distribution.map((item, idx) => 
      <option value={idx}>{item.name}</option>
    )
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  render() {
    return (
    <form>
      <label>
        Tiers:  
        <select 
          value={this.state.tier} 
          name="tier"
          onChange={this.handleInputChange}>

        <option value="-1"></option>
          {this.tier_select}
        </select>
      </label>

      <label>
        Distribution:  
        <select 
          value={this.state.distribution} 
          name="distribution"
          onChange={this.handleInputChange}>
          <option value="-1"></option>
          {this.dist_select}
        </select>
      </label>

      <input type="submit" value="generate" />
    </form>
    )
  }
}

export default ParamsForm