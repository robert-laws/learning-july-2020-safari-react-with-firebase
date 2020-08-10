import {
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  DELETE_CARD_BY_LIST_ID,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((card) => card.id !== action.payload)],
      };

    case DELETE_CARD_BY_LIST_ID:
      return {
        ...state,
        cards: [...state.cards.filter((card) => card.list !== action.payload)],
      };

    default:
      return state;
  }
};
