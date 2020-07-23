import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateListForm = ({ boardId, createNewList }) => {
  const [newList, setNewList] = useState({
    id: uuidv4(),
    board: boardId,
    title: '',
    cards: [],
  });

  const handleChange = (event) => {
    setNewList({
      ...newList,
      title: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createNewList(newList);

    setNewList({
      id: uuidv4(),
      board: boardId,
      title: '',
      cards: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={newList.title}
        onChange={handleChange}
        placeholder='List Title'
      />
    </form>
  );
};

export default CreateListForm;
