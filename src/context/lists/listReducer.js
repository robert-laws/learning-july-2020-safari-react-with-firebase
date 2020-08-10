import {
  GET_LISTS,
  GET_LISTS_BY_BOARD_ID,
  ADD_LIST,
  DELETE_LIST,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.payload,
      };

    case GET_LISTS_BY_BOARD_ID:
      return {
        ...state,
        lists: action.payload,
      };

    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };

    case DELETE_LIST:
      return {
        ...state,
        lists: [...state.lists.filter((list) => list.id !== action.payload)],
      };

    default:
      return state;
  }
};
