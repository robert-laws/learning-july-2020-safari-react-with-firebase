import React, { useState, useEffect } from 'react';

const CreateCardForm = ({ listId, createNewCard }) => {
  const [newCard, setNewCard] = useState({
    list: '',
    text: '',
  });

  useEffect(() => {
    setNewCard({
      ...newCard,
      list: listId,
    });
  }, [listId]);

  const handleChange = (event) => {
    setNewCard({
      ...newCard,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createNewCard(newCard);

    setNewCard({
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
