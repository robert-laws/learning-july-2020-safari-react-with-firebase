import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateBoardForm from '../components/CreateBoardForm';
import { boardData } from '../data/boardData';

const Home = () => {
  // const [boards, setBoards] = useState([]);

  // useEffect(() => {
  //   setBoards(boardData);
  // }, []);

  // const createNewBoard = (board) => {
  //   setBoards([...boards, board]);
  // };

  return (
    <section>
      {/* <CreateBoardForm createNewBoard={createNewBoard} /> */}
      <div className='board-wrapper'>
        {boards.map((board) => (
          <div className='board-list-item'>{board.title}</div>
          // <Link key={board.id} to={`/boards/${board.id}`}>
          //   <div
          //     className='board-list-item'
          //     style={{ backgroundColor: `${board.background}` }}
          //   >
          //     {board.title}
          //   </div>
          // </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
