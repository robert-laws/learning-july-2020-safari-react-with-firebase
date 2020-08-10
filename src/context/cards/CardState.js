import React, { useReducer } from 'react';
import CardContext from './cardContext';
import cardReducer from './cardReducer';
import {
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  DELETE_CARD_BY_LIST_ID,
} from '../types';
// import { cards } from '../data/cardData';
import { cardsRef } from '../../firebase';

const CardState = ({ children }) => {
  const initialState = {
    cards: [],
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  const getCards = async () => {
    try {
      const cardsData = await cardsRef.get();
      const cards = cardsData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().card,
      }));
      dispatch({ type: GET_CARDS, payload: cards });
    } catch (error) {
      console.error('Error getting all cards: ', error);
    }
  };

  const addCard = async (card) => {
    try {
      const newCard = await cardsRef.add({ card });
      const cardObject = {
        id: newCard.id,
        ...card,
      };
      dispatch({ type: ADD_CARD, payload: cardObject });
    } catch (error) {
      console.error('Error creating new card: ', error);
    }
  };

  const deleteCard = async (id) => {
    try {
      const card = cardsRef.doc(id);
      await card.delete();
      dispatch({ type: DELETE_CARD, payload: id });
    } catch (error) {
      console.error('Error deleting card: ', error);
    }
  };

  const deleteCardByListId = async (id) => {
    try {
      const cards = await cardsRef.where('card.list', '==', id).get();
      // console.log(cards.docs.length);
      if (cards.docs.length !== 0) {
        cards.forEach((card) => {
          card.ref.delete();
          dispatch({ type: DELETE_CARD_BY_LIST_ID, payload: id });
        });
      }
    } catch (error) {
      console.error('Error deleting card: ', error);
    }
  };

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        getCards,
        addCard,
        deleteCard,
        deleteCardByListId,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardState;
