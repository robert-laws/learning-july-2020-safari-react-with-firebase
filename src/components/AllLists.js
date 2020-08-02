import React, { useState, useContext, useEffect } from 'react';
import ListContext from '../context/lists/listContext';
import List from './List';
import CreateCardForm from './CreateCardForm';
import CreateListForm from './CreateListForm';

const AllLists = ({ boardId }) => {
  const listContext = useContext(ListContext);
  const { lists, addList } = listContext;

  const [myList, setMyList] = useState([]);

  // useEffect(() => {
  //   getLists();
  // }, []);

  useEffect(() => {
    if (boardId !== null) {
      const list = lists.filter((list) => {
        return list.board === boardId;
      });
      setMyList(list);
    }
  }, [boardId, lists]);

  const createNewList = (list) => {
    addList(list);
  };

  if (myList.length === 0) {
    return (
      <div>
        <h4>No Lists Found</h4>
        <CreateListForm boardId={boardId} createNewList={createNewList} />
      </div>
    );
  }

  return (
    <div>
      {myList &&
        myList.map((list) => (
          <List key={list.id} listId={list.id} title={list.title} />
        ))}
      <CreateListForm boardId={boardId} createNewList={createNewList} />
    </div>
  );
};

export default AllLists;
