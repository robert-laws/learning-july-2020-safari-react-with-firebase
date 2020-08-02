import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';
import { GET_LISTS, GET_LISTS_BY_BOARD_ID } from '../types';
import { lists } from '../data/listData';

const ListState = ({ children }) => {
  const initialState = {
    lists: lists,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  const getLists = () => {
    dispatch({ type: GET_LISTS });
  };

  const getListByBoardId = (id) => {
    dispatch({ type: GET_LISTS_BY_BOARD_ID, payload: id });
  };

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        getLists,
        getListByBoardId,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListState;
