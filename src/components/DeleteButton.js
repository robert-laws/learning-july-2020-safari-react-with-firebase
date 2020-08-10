import React from 'react';

const DeleteButton = ({ deleteFunction, type, id }) => {
  const handleClick = () => {
    deleteFunction(id);
  };

  return <button onClick={handleClick}>Delete {type}</button>;
};

export default DeleteButton;
