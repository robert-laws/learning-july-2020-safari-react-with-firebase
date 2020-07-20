import React, { useState } from 'react';

const CreateBoardForm = ({ createNewBoard }) => {
  const [board, setBoard] = useState({
    id: 1,
    title: '',
    background: '',
    lists: [],
  });

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewBoard(board);

    setBoard({
      id: 1,
      title: '',
      background: '',
      lists: [],
    });
  };

  return (
    <div className='create-board-form'>
      <form onSubmit={handleSubmit}>
        <input
          id='board-title'
          type='text'
          name='title'
          value={board.title}
          onChange={handleChange}
          placeholder='Board Title'
        />
        <select
          id='board-background'
          name='background'
          value={board.background}
          onChange={handleChange}
        >
          <option value=''>Select a Background Color</option>
          <option value='#DDAA11'>Mustard</option>
          <option value='#77AC12'>Green</option>
          <option value='#FF91CA'>Pink</option>
          <option value='#009991'>Teal</option>
        </select>
        <input id='board-submit' type='submit' value='Create New Board' />
      </form>
    </div>
  );
};

export default CreateBoardForm;
