import React, { useContext, useEffect } from 'react';
import BoardContext from '../context/boards/boardContext';
import { Link } from 'react-router-dom';
import CreateBoardForm from '../components/CreateBoardForm';

const Home = () => {
  const boardContext = useContext(BoardContext);

  const { boards, getBoards, addBoard } = boardContext;

  // useEffect(() => {
  //   getBoards();
  // }, []);

  const createNewBoard = (board) => {
    addBoard(board);
  };

  if (!boards) {
    return (
      <div>
        <h4>No Boards Found</h4>
      </div>
    );
  }

  return (
    <section>
      <CreateBoardForm createNewBoard={createNewBoard} />
      <div className='board-wrapper'>
        <div className='all-boards'>
          {boards !== null &&
            boards.map((board) => (
              <Link key={board.id} to={`/boards/${board.id}`}>
                <div
                  className='board-list-item'
                  style={{ backgroundColor: `${board.background}` }}
                >
                  {board.title}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
