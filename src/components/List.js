import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({ list }) => {
  return (
    <div className='list'>
      <h4>{list.title}</h4>
      <div className='card'>
        {list.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default List;
