import React from 'react';
import Board from '../components/Board';
import PropTypes from 'prop-types';
import CreateBoardForm from '../components/CreateBoardForm';

const Home = ({ boards, createNewBoard }) => {
  return (
    <section className='home'>
      <CreateBoardForm createNewBoard={createNewBoard} />
      <div className='boards'>
        {boards.map((board) => (
          <Board key={board.id} board={board} />
        ))}
      </div>
    </section>
  );
};

Home.propTypes = {
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired,
};

export default Home;
