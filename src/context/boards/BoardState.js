import React, { useReducer } from 'react';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import { GET_BOARDS, ADD_BOARD } from '../types';
import { boards } from '../data/boardData';

const BoardState = ({ children }) => {
  const initialState = {
    boards: null,
    board: null,
  };

  const [state, dispatch] = useReducer(boardReducer, initialState);

  const getBoards = () => {
    dispatch({ type: GET_BOARDS, payload: boards });
  };

  const addBoard = (board) => {
    dispatch({ type: ADD_BOARD, payload: board });
  };

  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        getBoards,
        addBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardState;
