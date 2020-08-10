import { GET_CARDS, ADD_CARD, DELETE_CARD } from '../types';

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

    default:
      return state;
  }
};
