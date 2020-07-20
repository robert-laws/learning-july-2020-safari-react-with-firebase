import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { v4 as uuidv4 } from 'uuid';

const Board = ({ board: { id, title, background, lists }, addListToBoard }) => {
  // const [myLists, setMyLists] = useState(lists);
  const [newList, setNewList] = useState({
    id: uuidv4(),
    title: '',
    cards: [],
  });

  const handleChange = (event) => {
    setNewList({
      ...newList,
      title: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addListToBoard(id, newList);

    // setMyLists([...myLists, newList]);

    setNewList({
      id: uuidv4(),
      title: '',
      cards: [],
    });
  };

  return (
    <div className='board' style={{ backgroundColor: `${background}` }}>
      <h4>{title}</h4>
      <div className='list-wrapper'>
        {lists.length &&
          lists.map((list) => (
            <List key={list.id} title={list.title} cards={list.cards} />
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newList.title}
          onChange={handleChange}
          name='newList'
          placeholder='add a new list'
        />
      </form>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
};

export default Board;
