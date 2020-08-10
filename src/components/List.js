import React from 'react';
import PropTypes from 'prop-types';
import AllCards from './AllCards';

const List = ({ listId, title, children }) => {
  return (
    <div className='list'>
      <h4>{title}</h4>
      {children}
      <AllCards listId={listId} />
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
};

export default List;
