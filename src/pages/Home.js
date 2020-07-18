import React from 'react';
import PropTypes from 'prop-types';
import BoardPreview from '../components/BoardPreview';

const Home = (props) => {
  const { boards, createNewBoard } = props;

  const NewBoard = () => {
    const board = {
      id: 5000,
      title: 'Newly Created Board',
      background: '#4A22AC',
    };

    createNewBoard(board);
  };

  return (
    <>
      <h2>Home</h2>
      <button onClick={NewBoard}>New Board</button>
      {boards.map((board) => (
        <div key={board.id}>
          <BoardPreview board={board} />
        </div>
      ))}
    </>
  );
};

Home.propTypes = {
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired,
};

export default Home;
