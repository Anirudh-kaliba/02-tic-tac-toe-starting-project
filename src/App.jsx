import { useState } from "react";
import Playerinfo from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";
import GameOver from "./Components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./Components/winning-combinations.js";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  // Derive gameBoard from gameTurns
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  gameTurns.forEach((turn) => {
    const { row, col } = turn.position;
    gameBoard[row][col] = turn.player;
  });

  // Check for a winner
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = firstSquare;
      break;
    }
  }

  // Check for a draw
  const hasDraw = !winner && gameTurns.length === 9;

  const handleSelectSquare = (rowIndex, colIndex) => {
    if (gameBoard[rowIndex][colIndex] || winner || hasDraw) return;

    setGameTurns((prevTurns) => [
      { player: activePlayer, position: { row: rowIndex, col: colIndex } },
      ...prevTurns,
    ]);

    setActivePlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
  };

  const handleRestart = () => {
    setGameTurns([]);
    setActivePlayer('X');
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Playerinfo initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Playerinfo initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        {(winner || hasDraw) ? (
          <GameOver winner={winner} onRestart={handleRestart} />
        ) : (
          <GameBoard
            gameBoard={gameBoard}
            onSelectSquare={handleSelectSquare}
          />
        )}
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
