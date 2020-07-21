import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { v4 as uuidv4 } from 'uuid';
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

  // const [myLists, setMyLists] = useState(lists);
  // const [newList, setNewList] = useState({
  //   id: uuidv4(),
  //   title: '',
  //   cards: [],
  // });

  // const handleChange = (event) => {
  //   setNewList({
  //     ...newList,
  //     title: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   addListToBoard(id, newList);

  //   // setMyLists([...myLists, newList]);

  //   setNewList({
  //     id: uuidv4(),
  //     title: '',
  //     cards: [],
  //   });
  // };

  return (
    <div className='board' style={{ backgroundColor: `${background}` }}>
      <h4>{title}</h4>

      <div className='list-wrapper'>
        {getListMatches(id) &&
          getListMatches(id).map((list) => (
            <List key={list.id} title={list.title} cards={list.cards} />
          ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
};

export default Board;
