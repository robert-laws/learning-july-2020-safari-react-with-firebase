import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';
import { GET_LISTS, GET_LISTS_BY_BOARD_ID, ADD_LIST } from '../types';
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

  const addList = (list) => {
    console.log(list);
    dispatch({ type: ADD_LIST, payload: list });
  };

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        getLists,
        getListByBoardId,
        addList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListState;
