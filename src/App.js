import React, { useState, useEffect } from 'react';
import './App.scss';
import { boardData } from './data/boardData';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setBoards(boardData);
  }, []);

  const createNewBoard = (board) => {
    setBoards([...boards, board]);
  };

  const addListToBoard = (boardId, list) => {
    const targetBoard = boards.filter((board) => boardId === board.id)[0];

    const updatedLists = {
      ...targetBoard.lists.push(list),
    };

    const updatedBoard = {
      ...targetBoard,
      lists: updatedLists,
    };
  };

  return (
    <div className='app'>
      <Header />
      <Home
        boards={boards}
        createNewBoard={createNewBoard}
        addListToBoard={addListToBoard}
      />
      <Footer />
    </div>
  );
}

export default App;
