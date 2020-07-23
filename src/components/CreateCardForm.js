import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateCardForm = ({ listId, createNewCard }) => {
  const [newCard, setNewCard] = useState({
    id: uuidv4(),
    list: listId,
    text: '',
  });

  const handleChange = (event) => {
    setNewCard({
      ...newCard,
      text: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createNewCard(newCard);

    setNewCard({
      id: uuidv4(),
      list: listId,
      text: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='text'
        value={newCard.text}
        onChange={handleChange}
        placeholder='Card Text'
      />
    </form>
  );
};

export default CreateCardForm;
