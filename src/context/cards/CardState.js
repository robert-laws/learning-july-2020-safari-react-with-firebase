import React, { useReducer } from 'react';
import CardContext from './cardContext';
import cardReducer from './cardReducer';
import { GET_CARDS } from '../types';
import { cards } from '../data/cardData';

const CardState = ({ children }) => {
  const initialState = {
    cards: cards,
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  const getCards = () => {
    dispatch({ type: GET_CARDS });
  };

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        getCards,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardState;
