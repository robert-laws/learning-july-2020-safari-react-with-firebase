import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cardData } from '../data/cardData';
import Card from './Card';
import CreateCardForm from './CreateCardForm';

const List = ({ listId, title }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardData);
  }, []);

  const getCardMatches = (listId) => {
    const matchCard = cards.filter((card) => card.list === listId);
    return matchCard;
  };

  const createNewCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className='list'>
      <h4>{title}</h4>
      <div className='card'>
        {getCardMatches(listId).length > 0
          ? getCardMatches(listId).map((card) => (
              <Card key={card.id} text={card.text} />
            ))
          : getCardMatches(listId).length === 0 && <span>No Lists</span>}
      </div>
      <CreateCardForm listId={listId} createNewCard={createNewCard} />
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
};

export default List;
