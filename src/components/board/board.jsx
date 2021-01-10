import React from "react";
import "./board.scss";
import Footer from "../footer/footer";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Confetti from "react-dom-confetti";

const config = {
  angle: "120",
  spread: 360,
  startVelocity: 40,
  elementCount: "87",
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "18px",
  height: "13px",
  perspective: "345px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = {
      currentPlayer: "Player One",
      playerOne: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerTwo: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0,
      visible: false,
      winner: "Nobody",
    };
  }

  componentDidMount() {
    this.animateBoxes();
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  update = (e) => {
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

    if (this.state.count > 2) {
      this.checkForWinner(array, this.state.currentPlayer);
    }

    this.setState({
      count: this.state.count + 1,
      [player]: array,
      currentPlayer: nextPlayer,
    });
  };

  checkForWinner = (arr, currentPlayer) => {
    console.log("Checking for winning pattern...");
    var x_squares = [8, 3, 5, 7];

    arr = x_squares;

    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        for (var k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 15) {
            console.log("Winner is " + currentPlayer);
            this.gameOver(currentPlayer);
            return [arr[i], arr[j], arr[k]];
          }
        }
      }
    }
    console.log("No winner.");
    return false;
  };

  gameOver = (currentPlayer) => {
    this.setState({ visible: true, winner: currentPlayer });
  };

  async animateBoxes() {
    var elements = document.getElementsByTagName("td");

    var title = document.getElementsByClassName("title")[0];
    title.classList.add("animate__animated", "animate__fadeInDownBig");
    var subtitle = document.getElementsByClassName("subtitle")[0];
    subtitle.classList.add(
      "animate__animated",
      "animate__fadeIn",
      "animate__delay-1s"
    );

    var footer = document.getElementsByClassName("footer")[0];
    await this.sleep(75);
    footer.classList.add("animate__animated", "animate__fadeInUpBig");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add(
        "animate__animated",
        "animate__zoomIn",
        "fade-in"
      );
      elements[8 - i].classList.add(
        "animate__animated",
        "animate__zoomIn",
        "fade-in"
      );
      await this.sleep(105);
    }
  }

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  render() {
    const {
      currentPlayer,
      count,
      playerOne,
      playerTwo,
      visible,
      winner,
    } = this.state;
    console.log("count", count);
    return (
      <div className="board-container">
        <div className="board">
          <h2 className="title">Tic Tac Toe</h2>
          <h3 className="subtitle">It is {currentPlayer}'s turn...</h3>

          <table>
            <tbody>
              <tr>
                <td
                  onClick={(e) => this.update(e)}
                  id="8"
                  className="0"
                  ref={this.myRef}
                ></td>
                <td
                  onClick={(e) => this.update(e)}
                  id="1"
                  className="1"
                  ref={this.myRef}
                ></td>
                <td
                  onClick={(e) => this.update(e)}
                  id="6"
                  className="2"
                  ref={this.myRef}
                ></td>
              </tr>
              <tr>
                <td onClick={(e) => this.update(e)} id="3" className="3"></td>
                <td onClick={(e) => this.update(e)} id="5" className="4">
                  <Confetti active={visible} config={config} />
                </td>
                <td onClick={(e) => this.update(e)} id="7" className="5"></td>
              </tr>
              <tr>
                <td onClick={(e) => this.update(e)} id="4" className="6"></td>
                <td onClick={(e) => this.update(e)} id="9" className="7"></td>
                <td onClick={(e) => this.update(e)} id="2" className="8"></td>
              </tr>
            </tbody>
          </table>

          <div className="debug" style={{ color: "black" }}>
            <p>Count: {count}</p>
            <p>Player: {currentPlayer}</p>
            <p>Player 1 Array: {playerOne.toString()}</p>
            <p>Player 2 Array: {playerTwo.toString()}</p>
          </div>
          <Footer />
        </div>
        <Rodal
          showMask={false}
          animation="door"
          duration={400}
          visible={visible}
          onClose={this.hide.bind(this)}
        >
          <h3>Congratulations!</h3>

          <div class="row">
            <div class="column">IMAGE</div>
            <div class="column">Player {winner} won the game!</div>
          </div>
        </Rodal>
      </div>
    );
  }
}

export default Board;
