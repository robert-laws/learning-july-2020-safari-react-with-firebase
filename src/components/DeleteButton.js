import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cardContext from '../context/cards/cardContext';

const DeleteButton = ({ deleteFunctions, type, id }) => {
  const CardContext = useContext(cardContext);
  const { deleteCardByListId } = CardContext;

  let history = useHistory();

  const handleClick = () => {
    // console.log(deleteFunctions);

    deleteFunctions.forEach((func) => {
      const val = func(id);
      val.then((result) => {
        if (result !== undefined) {
          result.forEach((item) => {
            deleteCardByListId(item);
          });
        }
      });
    });

    if (type === 'Board') {
      history.push('/');
    }
  };

  return <button onClick={handleClick}>Delete {type}</button>;
};

export default DeleteButton;
