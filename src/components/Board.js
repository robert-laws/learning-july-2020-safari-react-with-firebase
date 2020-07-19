import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Board = ({ board: { id, title, lists } }) => {
  return (
    <div>
      <h4>{title}</h4>
      {/* <div className='list-wrapper'>
        {lists.length &&
          lists.map((list) => <List key={list.id} list={list} />)}
      </div> */}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
};

export default Board;
