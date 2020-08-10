import React, { useState, useContext, useEffect } from 'react';
import CardContext from '../context/cards/cardContext';
import Card from './Card';
import CreateCardForm from './CreateCardForm';
import DeleteButton from './DeleteButton';

const AllCards = ({ listId }) => {
  const cardContext = useContext(CardContext);
  const { cards, getCards, addCard, deleteCard } = cardContext;

  const [myCards, setMyCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

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
        myCards.map((card) => (
          <div key={card.id}>
            <Card text={card.text} />
            <DeleteButton
              deleteFunctions={[deleteCard]}
              type='Card'
              id={card.id}
            />
          </div>
        ))}
      <CreateCardForm listId={listId} createNewCard={createNewCard} />
    </div>
  );
};

export default AllCards;
