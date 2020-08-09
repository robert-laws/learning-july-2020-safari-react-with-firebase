import { GET_BOARDS, ADD_BOARD, GET_BOARD_BY_ID } from '../types';

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
        board: state.boards.find(
          (board) => board.id === parseInt(action.payload)
        ),
      };

    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };

    default:
      return state;
  }
};
