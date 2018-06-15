import React, { Component } from 'react';
import "./data.json";
import "./card.css"

class Cards extends Component {

  render(props) {
    return (
      <div>
        <img src={this.props.image} alt="" style={{ width: '200px', height:'200px'}} onClick={() => this.props.handleClick(this.props.id, this.props.clicked)}/>
      </div>
    )
  }
}

export default Cards;