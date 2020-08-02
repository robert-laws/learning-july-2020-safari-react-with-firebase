import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateListForm = ({ boardId, createNewList }) => {
  const [newList, setNewList] = useState({
    id: uuidv4(),
    board: '',
    title: '',
  });

  useEffect(() => {
    setNewList({
      ...newList,
      board: boardId,
    });
  }, [boardId]);

  const handleChange = (event) => {
    setNewList({
      ...newList,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createNewList(newList);

    setNewList({
      id: uuidv4(),
      board: boardId,
      title: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='create-list-input'
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
