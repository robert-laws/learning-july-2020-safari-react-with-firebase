import React from 'react';
import { useHistory } from 'react-router-dom';

const DeleteButton = ({ deleteFunctions, type, id }) => {
  let history = useHistory();

  const handleClick = () => {
    // console.log(deleteFunctions);
    deleteFunctions.forEach((func) => {
      func(id);
    });

    if (type === 'Board') {
      history.push('/');
    }
  };

  return <button onClick={handleClick}>Delete {type}</button>;
};

export default DeleteButton;
