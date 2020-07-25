import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateBoardForm from '../components/CreateBoardForm';
import { boardData } from '../data/boardData';

const Home = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setBoards(boardData);
  }, []);

  const createNewBoard = (board) => {
    setBoards([...boards, board]);
  };

  return (
    <section className='home'>
      <CreateBoardForm createNewBoard={createNewBoard} />
      <div className='board-wrapper'>
        {/* {boards.map((board) => (
          <Board key={board.id} board={board} />
        ))} */}
        {boards.map((board) => (
          <Link key={board.id} to={`/boards/${board.id}`}>
            {board.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

// Home.propTypes = {
//   boards: PropTypes.array.isRequired,
//   createNewBoard: PropTypes.func.isRequired,
// };

export default Home;
