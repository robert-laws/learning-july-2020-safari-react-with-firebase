import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';
import { GET_LISTS, GET_LISTS_BY_BOARD_ID, ADD_LIST } from '../types';
// import { lists } from '../data/listData';
import { listsRef } from '../../firebase';

const ListState = ({ children }) => {
  const initialState = {
    lists: [],
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  const getLists = async () => {
    try {
      const listsData = await listsRef.get();
      const lists = listsData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().list,
      }));
      dispatch({ type: GET_LISTS, payload: lists });
    } catch (error) {
      console.error('Error getting lists: ', error);
    }
  };

  const getListByBoardId = async (id) => {
    try {
      const listsData = await listsRef.where('list.board', '==', id).get();
      const lists = listsData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().list,
      }));
      dispatch({ type: GET_LISTS_BY_BOARD_ID, payload: lists });
    } catch (error) {
      console.error('Error retrieving lists by board id: ', error);
    }
  };

  const addList = async (list) => {
    try {
      const newList = await listsRef.add({ list });
      const listObject = {
        id: newList.id,
        ...list,
      };
      dispatch({ type: ADD_LIST, payload: listObject });
    } catch (error) {
      console.error('Error creating new list: ', error);
    }
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
