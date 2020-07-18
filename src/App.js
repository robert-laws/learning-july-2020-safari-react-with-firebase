import React, { useState, useEffect } from 'react';
import './App.scss';
import { boardData } from './data/boardData';
import Home from './pages/Home';
import Board from './components/Board';

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setBoards(boardData);
  }, []);

  const createNewBoard = (board) => {
    setBoards([...boards, board]);
  };

  return (
    <div>
      <h1>Boards App</h1>
      <hr />
      <Home boards={boards} createNewBoard={createNewBoard} />
      <Board title={'Sample Board'} />
    </div>
  );
}

export default App;
