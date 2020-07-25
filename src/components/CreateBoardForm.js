import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const CreateBoardForm = ({ createNewBoard }) => {
  const [error, setError] = useState(false);
  const [board, setBoard] = useState({
    id: uuidv4(),
    title: '',
    background: '',
  });

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (board.title === '' || board.background === '') {
      setError(true);
    } else {
      setError(false);
      createNewBoard(board);

      setBoard({
        id: uuidv4(),
        title: '',
        background: '',
      });
    }
  };

  return (
    <div className='create-board-form'>
      <form onSubmit={handleSubmit}>
        <input
          className={error ? 'error' : ''}
          id='board-title'
          type='text'
          name='title'
          value={board.title}
          onChange={handleChange}
          placeholder='Board Title'
        />
        <select
          className={error ? 'error' : ''}
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
      <div id='form-message' className={error ? 'error' : 'no-error'}>
        Error, please correct the problems highlighted in red and try again.
      </div>
    </div>
  );
};

CreateBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
};

export default CreateBoardForm;
