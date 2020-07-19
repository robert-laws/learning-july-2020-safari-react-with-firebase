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

  return (
    <div className='app'>
      <Header />
      <Home boards={boards} createNewBoard={createNewBoard} />
      <Footer />
    </div>
  );
}

export default App;
