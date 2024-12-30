import React from "react";

function GameBoard() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // Step 1: Initialize state with initialGameBoard
  const [gameBoard, setGameBoard] = React.useState(initialGameBoard);

  // Step 2: Function to handle button clicks
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      // Create a deep copy of the game board
      const updatedBoard = prevGameBoard.map((row) => [...row]);

      // Update the selected square with 'X' for now
      updatedBoard[rowIndex][colIndex] = "X";

      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
