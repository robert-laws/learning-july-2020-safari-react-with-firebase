import { GET_LISTS, GET_LISTS_BY_BOARD_ID, ADD_LIST } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: state.lists,
      };

    case GET_LISTS_BY_BOARD_ID:
      return {
        ...state,
        lists: state.lists.filter((list) => list.board === action.payload),
      };

    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };

    default:
      return state;
  }
};
