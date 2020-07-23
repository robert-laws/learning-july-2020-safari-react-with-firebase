import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import CreateListForm from './CreateListForm';
import { listData } from '../data/listData';

const Board = ({ board: { id, title, background } }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(listData);
  }, []);

  const getListMatches = (boardId) => {
    const matchList = lists.filter((list) => list.board === boardId);
    return matchList;
  };

  const createNewList = (newList) => {
    setLists([...lists, newList]);
  };

  return (
    <div className='board' style={{ backgroundColor: `${background}` }}>
      <h4>{title}</h4>

      <div className='list-wrapper'>
        {getListMatches(id) &&
          getListMatches(id).map((list) => (
            <List key={list.id} listId={list.id} title={list.title} />
          ))}
      </div>

      <CreateListForm boardId={id} createNewList={createNewList} />
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
};

export default Board;
