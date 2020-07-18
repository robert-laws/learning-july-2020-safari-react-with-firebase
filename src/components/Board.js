import React, { useState, useEffect } from 'react';
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
      },
    ]);
  };

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={createNewList}>Add New List</button>
      {lists.map((list) => (
        <div key={list.id}>
          <List title={list.title} createNewList={createNewList} />
        </div>
      ))}
    </div>
  );
};

export default Board;
