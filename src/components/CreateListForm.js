import React, { useState, useEffect } from 'react';

const CreateListForm = ({ boardId, createNewList }) => {
  const [newList, setNewList] = useState({
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
