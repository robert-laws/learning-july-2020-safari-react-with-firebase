import React from 'react';

const DeleteButton = ({ deleteFunctions, type, id }) => {
  const handleClick = () => {
    // console.log(deleteFunctions);
    deleteFunctions.forEach((func) => {
      func(id);
    });
  };

  return <button onClick={handleClick}>Delete {type}</button>;
};

export default DeleteButton;
