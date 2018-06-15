import React, { Component } from 'react';
import "../Cards/data.json";

class Wrap extends Component {

  render(props) {
    return (
      <div className="container">
       <div className="row">{this.props.children}</div>
      </div>
    )
  }
}

export default Wrap;