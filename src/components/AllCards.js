import React, { useState, useContext, useEffect } from 'react';
import CardContext from '../context/cards/cardContext';
import Card from './Card';
import CreateCardForm from './CreateCardForm';

const AllCards = ({ listId }) => {
  const cardContext = useContext(CardContext);
  const { cards, addCard } = cardContext;

  const [myCards, setMyCards] = useState([]);

  useEffect(() => {
    if (listId !== null) {
      const card = cards.filter((card) => {
        return card.list === listId;
      });
      setMyCards(card);
    }
  }, [listId, cards]);

  const createNewCard = (card) => {
    addCard(card);
  };

  if (myCards.length === 0) {
    return (
      <div className='card'>
        <h4>No Cards Found</h4>
        <CreateCardForm listId={listId} createNewCard={createNewCard} />
      </div>
    );
  }

  return (
    <div className='card'>
      {myCards &&
        myCards.map((card) => <Card key={card.id} text={card.text} />)}
      <CreateCardForm listId={listId} createNewCard={createNewCard} />
    </div>
  );
};

export default AllCards;
