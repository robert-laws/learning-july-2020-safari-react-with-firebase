import React, { useState, useContext, useEffect } from 'react';
import ListContext from '../context/lists/listContext';
import List from './List';

const AllLists = ({ boardId }) => {
  const listContext = useContext(ListContext);
  const { lists } = listContext;

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

  if (myList.length === 0) {
    return (
      <div>
        <h4>No Lists Found</h4>
      </div>
    );
  }

  return (
    <div>
      {myList &&
        myList.map((list) => (
          <List key={list.id} listId={list.id} title={list.title} />
        ))}
    </div>
  );
};

export default AllLists;
