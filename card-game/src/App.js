import React, { Component } from 'react';
import './App.css';
import GameCards from "./Components/Cards/card"
import card from "./Components/Cards/data.json";
import Wrap from "./Components/wrap/wrap"

class App extends Component {
  constructor() {
    super();

    this.state = {
      card,
      score: 0,
      top: 0
    }
  }

  handleClick = (id, clicked) => {
    const Order = this.state.card;
    if (clicked) {
      Order.forEach((card, i) => {
        Order[i].clicked = false;
      });
      return this.setState({
        card: Order.sort(() => Math.random() - 0.5),
        message: "You Guessed Wrong!",
        score: 0
      })
    } else {
      Order.forEach((card, i) => {
        if (id === card.id) {
          Order[i].clicked = true;
        }
      });

      const { top, score } = this.state;
      const currentScore = score + 1;
      const newTop = currentScore > top ? currentScore : top;
      return this.setState({
        image: Order.sort(() => Math.random() - 0.5),
        message: "You Guessed Correct!",
        score: currentScore,
        top: newTop
      })
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <h3 className="card-title mt-2 pb-4"><strong>{this.state.message}</strong></h3>
          <p className="card-text">Score: {this.state.score} | Top Score: {this.state.top}</p>
        </header>
        <div className="App-intro">
          <Wrap>
            {card.map(card => (
              <GameCards
                id={card.id}
                image={card.image}
                clicked={card.clicked}
                handleClick={this.handleClick} />
            ))}
          </Wrap>
        </div>
      </div>
    );
  }
}

export default App;
