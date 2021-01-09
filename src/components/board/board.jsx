import React from "react";
import "./board.scss";
import Footer from "../footer/footer";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: "Player One",
      playerOne: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerTwo: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0,
    };
  }

  update(e) {
    let i = parseInt(e.target.className);
    let array = [];
    let player,
      nextPlayer = "";
    if (this.state.count % 2 === 0) {
      player = "playerOne";
      nextPlayer = "Player Two";
      array = this.state.playerOne;
      array[i] = e.target.id;
    } else {
      player = "PlayerTwo";
      nextPlayer = "Player One";
      array = this.state.playerTwo;
      array[i] = e.target.id;
    }

    this.setState({
      count: this.state.count + 1,
      [player]: array,
      currentPlayer: nextPlayer,
    });
  }

  render() {
    const { currentPlayer, count, playerOne, playerTwo } = this.state;
    console.log("count", count);
    return (
      <div className="board-container">
        <div className="board-background"></div>
        <div className="board">
          <h2 className="title">Tic Tac Toe</h2>
          <h3 className="subtitle">It is {currentPlayer}'s turn...</h3>

          <table>
            <tr>
              <td onClick={(e) => this.update(e)} id="8" className="0"></td>
              <td onClick={(e) => this.update(e)} id="1" className="1"></td>
              <td onClick={(e) => this.update(e)} id="6" className="2"></td>
            </tr>
            <tr>
              <td onClick={(e) => this.update(e)} id="3" className="3"></td>
              <td onClick={(e) => this.update(e)} id="5" className="4"></td>
              <td onClick={(e) => this.update(e)} id="7" className="5"></td>
            </tr>
            <tr>
              <td onClick={(e) => this.update(e)} id="4" className="6"></td>
              <td onClick={(e) => this.update(e)} id="9" className="7"></td>
              <td onClick={(e) => this.update(e)} id="2" className="8"></td>
            </tr>
          </table>

          <div className="debug" style={{ color: "black" }}>
            <p>Count: {count}</p>
            <p>Player: {currentPlayer}</p>
            <p>Player 1 Array: {playerOne.toString()}</p>
            <p>Player 2 Array: {playerTwo.toString()}</p>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Board;
