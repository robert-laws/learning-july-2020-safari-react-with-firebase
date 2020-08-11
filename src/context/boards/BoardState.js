import React, { useReducer } from 'react';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import { GET_BOARDS, ADD_BOARD, GET_BOARD_BY_ID, DELETE_BOARD } from '../types';
// import { boards } from '../data/boardData';
import { boardsRef } from '../../firebase';

const BoardState = ({ children }) => {
  const initialState = {
    boards: [],
    board: [],
  };

  const [state, dispatch] = useReducer(boardReducer, initialState);

  const getBoards = async () => {
    try {
      const boardsData = await boardsRef.get();
      const boards = boardsData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().board,
      }));
      dispatch({ type: GET_BOARDS, payload: boards });
    } catch (error) {
      console.error('Error getting boards: ', error);
    }
  };

  const getBoardById = async (id) => {
    try {
      const board = await boardsRef.doc(id).get();
      dispatch({ type: GET_BOARD_BY_ID, payload: board });
    } catch (error) {
      console.error('Error getting board: ', error);
    }
  };

  const addBoard = async (board) => {
    try {
      const newBoard = await boardsRef.add({ board });
      const boardObject = {
        id: newBoard.id,
        ...board,
      };
      dispatch({ type: ADD_BOARD, payload: boardObject });
    } catch (error) {
      console.error('Error creating new board: ', error);
    }
  };

  const deleteBoard = async (id) => {
    try {
      const board = boardsRef.doc(id);
      await board.delete();
      dispatch({ type: DELETE_BOARD, payload: id });
    } catch (error) {
      console.error('Error creating new board: ', error);
    }
  };

  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        getBoards,
        getBoardById,
        addBoard,
        deleteBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardState;
