import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({ list }) => {
  return (
    <div>
      <p>{list.title}</p>
      {list.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default List;
