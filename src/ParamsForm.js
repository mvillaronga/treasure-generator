import React, { Component } from 'react'
import {tiers, distribution} from './treasure'

class ParamsForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tier: -1,
      distribution: -1,
      dice: 0
    }

    
    this.tier_select = tiers.map((item, idx) => 
      <option value={idx}>{item.title} ({item.start} - {item.end})</option>
    )

    this.dist_select = distribution.map((item, idx) => 
      <option value={idx}>{item.name}</option>
    )
  }

  render() {
    return (
    <form>
      <label>
        Tiers:  
        <select>
        <option value="-1"></option>
        {this.tier_select}
        </select>
      </label>

      <label>
        Distribution:  
        <select>
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
