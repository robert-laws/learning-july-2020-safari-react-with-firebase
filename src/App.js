import React, { useState, useEffect } from 'react';
import './App.scss';
import { boardData } from './data/boardData';
import Board from './components/Board';

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setBoards(boardData);
  }, []);

  const handleClick = () => {
    setBoards([
      ...boards,
      {
        id: Math.floor(Math.random() * 10000),
        title: 'New Board Example',
        background: '#7A1ACC',
      },
    ]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Board</button>
      {boards.map((board) => (
        <Board
          key={board.id}
          title={board.title}
          background={board.background}
        />
      ))}
    </div>
  );
}

export default App;
