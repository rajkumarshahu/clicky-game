import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
    alertMessage: [
      "Your Guess is correct!!!",
      "Incorrect Guess. Game Over!!!",
      "Click on any character to play again !!!",
      "Click on a character to gain points! If you click on the same character twice you will lose!"

    ],
    animations: ["animated bounce delay-2s", "animated tada"],
  };

  componentDidMount() {
    this.setState({ message: this.state.alertMessage[3] });
    this.gameStart();
  }

  gameStart = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: 0 });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    this.setState({ score: 0 });
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    this.setState({ animation: this.state.animations[1] });
    this.setState({ score: 0 });
    return true;
  };

  suffleCard = id => {
    this.state.cards.find((card, i) => {
      if (card.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            this.setState({ message: this.state.alertMessage[0] });
            this.setState({ animation: this.state.animations[0] });
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else if (this.state.score === 12) {
          this.setState({ highscore: this.state.score });
          this.setState({ message: this.state.alertMessage[2] });
          this.setState({ animation: this.state.animations[0] });
          console.log(this.state.score);

          this.gameStart();
        } else {
          this.gameOver();

          this.setState({ message: this.state.alertMessage[1] });
        }
      }
      return false;
    });
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Title
          score={this.state.score}
          highscore={this.state.highscore}
          message={this.state.message}
        >
          Clicky Game
        </Title>
        <div></div>

        {this.state.cards.map(card => (
          <Card
            suffleCard={this.suffleCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            class={this.state.animation}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}
export default App;
