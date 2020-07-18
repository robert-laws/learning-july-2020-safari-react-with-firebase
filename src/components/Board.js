import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { listData } from '../data/listData';

const Board = ({ title }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(listData);
  }, []);

  const createNewList = () => {
    setLists([
      ...lists,
      {
        id: 9000,
        title: 'JSX Section',
        board: 100,
        cards: [
          {
            id: 1,
            text: 'card number one',
          },
        ],
      },
    ]);
  };

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={createNewList}>Add New List</button>
      {lists.map((list) => (
        <div key={list.id}>
          <List list={list} createNewList={createNewList} />
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Board;
