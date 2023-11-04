import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Board({ isRestarted, setIsRestarted }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [values, setValues] = useState("O");
  const [status, setStatus] = useState(null);

  function selectSquare(square) {
    const nextValue = calculateNextValue(squares);
    squares[square] = nextValue;
    setValues(nextValue);    

    const winner = calculateWinner(squares);

    if (winner) {
      setStatus(calculateStatus(winner, squares, nextValue));
    } else {
      setStatus(calculateStatus(false, squares, values));
    }

    setIsRestarted(false);
  }

  const restart = () => {
    setSquares((prevState) => {
      return (prevState = Array(9).fill(null));
    });
    setStatus((prevState) => {
      return (prevState = "");
    });
  };

  useEffect(() => {
    if (isRestarted) {
      restart();
    }    
  }, [isRestarted]);

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div >STATUS</div>
      <div >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button onClick={restart}>
        restart
      </button>
    </div>
  );
}

function Game() {
  const [isRestarted, setIsRestarted] = useState(false);

  const handleRestart = () => {
    setIsRestarted(true);
  };

  return (
    <div className="h-screen">
      <div className="w-[90%] lg:w-[40%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Board isRestarted={isRestarted} setIsRestarted={setIsRestarted} />
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleRestart()}
          className="py-2 px-5 bg-indigo-950 text-white flex items-center justify-center">
          restart
        </button>
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
