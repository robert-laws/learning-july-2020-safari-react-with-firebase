import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Board = ({ board: { title, lists } }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>...</p>
      <div className='list-wrapper'>
        {lists.length &&
          lists.map((list) => (
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
