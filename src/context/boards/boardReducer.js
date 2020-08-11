import { GET_BOARDS, ADD_BOARD, GET_BOARD_BY_ID, DELETE_BOARD } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };

    case GET_BOARD_BY_ID:
      return {
        ...state,
        board: action.payload,
      };

    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };

    case DELETE_BOARD:
      return {
        ...state,
        boards: [
          ...state.boards.filter((board) => board.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};
