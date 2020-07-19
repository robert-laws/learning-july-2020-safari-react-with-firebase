import React from 'react';
import Board from '../components/Board';
import PropTypes from 'prop-types';

const Home = ({ boards, createNewBoard }) => {
  return (
    <section className='home'>
      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
    </section>
  );
};

Home.propTypes = {
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired,
};

export default Home;
