import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import CreateListForm from './CreateListForm';
import { listData } from '../data/listData';
import { useParams } from 'react-router-dom';
import { boardData } from '../data/boardData';

const Board = () => {
  const { id } = useParams();

  const [board, setBoard] = useState({});
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const board = boardData.find((board) => board.id === parseInt(id));
    setBoard(board);
  }, []);

  useEffect(() => {
    const lists = listData.filter((list) => list.board === parseInt(id));
    setLists(lists);
  }, [id]);

  // const getListMatches = (boardId) => {
  //   const matchList = lists.filter((list) => list.board === boardId);
  //   return matchList;
  // };

  // const createNewList = (newList) => {
  //   setLists([...lists, newList]);
  // };

  if (board) {
    return (
      <div className='board' style={{ backgroundColor: `${board.background}` }}>
        <h4>{board.title}</h4>

        <div className='list-wrapper'>
          {lists &&
            lists.map((list) => (
              <List key={list.id} listId={list.id} title={list.title} />
            ))}

          {lists.length === 0 && <h4>No Lists</h4>}
        </div>

        {/* <CreateListForm boardId={id} createNewList={createNewList} /> */}
      </div>
    );
  } else {
    return <div>No Board</div>;
  }
};

// Board.propTypes = {
//   board: PropTypes.object.isRequired,
// };

export default Board;
