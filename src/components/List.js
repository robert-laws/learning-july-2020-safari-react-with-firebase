import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({ title, cards }) => {
  return (
    <div className='list'>
      <h4>{title}</h4>
      <div className='card'>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
};

export default List;
