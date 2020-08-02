import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AllCards from './AllCards';
// import CreateCardForm from './CreateCardForm';

const List = ({ listId, title }) => {
  return (
    <div className='list'>
      <h4>{title}</h4>
      <AllCards listId={listId} />
      {/*<CreateCardForm listId={listId} createNewCard={createNewCard} /> */}
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
};

export default List;
