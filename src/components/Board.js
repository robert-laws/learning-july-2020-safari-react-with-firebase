import React, { useState, useContext, useEffect } from 'react';
import BoardContext from '../context/boards/boardContext';
import ListContext from '../context/lists/listContext';
import AllList from './AllLists';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Board = () => {
  const boardContext = useContext(BoardContext);
  const { boards, deleteBoard } = boardContext;

  const listContext = useContext(ListContext);
  const { deleteListByBoardId } = listContext;

  const { id } = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    if (boards !== null) {
      const myBoard = boards.find((board) => board.id === id);
      setBoard(myBoard);
    }
  }, [id, boards]);

  if (!board) {
    return (
      <div>
        <h4>No Board Found</h4>
      </div>
    );
  }

  return (
    <div className='board-wrapper'>
      <div className='home-link'>
        <Link to='/'>Return to Board List</Link>
      </div>
      <div className='board' style={{ backgroundColor: `${board.background}` }}>
        <h4>{board.title}</h4>
        <DeleteButton
          deleteFunctions={[deleteListByBoardId, deleteBoard]}
          type='Board'
          id={board.id}
        />
      </div>
      <div className='list-wrapper'>
        <AllList boardId={board.id} />

        {/* <CreateListForm boardId={id} createNewList={createNewList} />*/}
      </div>
    </div>
  );
};

export default Board;
