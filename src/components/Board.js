import React, { useState, useEffect } from 'react';
import List from './List';
import CreateListForm from './CreateListForm';
import { useParams } from 'react-router-dom';
import { listData } from '../data/listData';
import { boardData } from '../data/boardData';

const Board = () => {
  const { id } = useParams();

  const [board, setBoard] = useState({});
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const board = boardData.find((board) => board.id === parseInt(id));
    setBoard(board);
  }, [id]);

  useEffect(() => {
    const lists = listData.filter((list) => list.board === parseInt(id));
    setLists(lists);
  }, [id]);

  const createNewList = (newList) => {
    setLists([...lists, newList]);
  };

  if (board) {
    return (
      <div className='board-wrapper'>
        <div
          className='board'
          style={{ backgroundColor: `${board.background}` }}
        >
          <h4>{board.title}</h4>

          <div className='list-wrapper'>
            {lists &&
              lists.map((list) => (
                <List key={list.id} listId={list.id} title={list.title} />
              ))}

            {lists.length === 0 && (
              <div className='board-no-lists'>
                <h4>No Lists</h4>
              </div>
            )}
          </div>

          <CreateListForm boardId={id} createNewList={createNewList} />
        </div>
      </div>
    );
  } else {
    return <div>No Board</div>;
  }
};

export default Board;
