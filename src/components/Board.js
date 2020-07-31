import React, { useState, useContext, useEffect } from 'react';
import BoardContext from '../context/boards/boardContext';
// import List from './List';
// import CreateListForm from './CreateListForm';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Board = () => {
  const boardContext = useContext(BoardContext);
  const { boards } = boardContext;
  const { id } = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    if (boards !== null) {
      const myBoard = boards.find((board) => board.id === id);
      setBoard(myBoard);
    }
  }, [boards]);

  if (!board) {
    return (
      <div>
        <h4>No Board Found</h4>
      </div>
    );
  }

  return (
    <div className='board-wrapper'>
      <Link to='/'>Return to Board List</Link>
      <div className='board' style={{ backgroundColor: `${board.background}` }}>
        <h4>{board.title}</h4>

        {/* <div className='list-wrapper'>
          {lists &&
            lists.map((list) => (
              <List key={list.id} listId={list.id} title={list.title} />
            ))}

          {lists.length === 0 && (
            <div className='board-no-lists'>
              <h4>No Lists</h4>
            </div>
          )}
        </div> */}

        {/* <CreateListForm boardId={id} createNewList={createNewList} />*/}
      </div>
    </div>
  );
};

export default Board;
