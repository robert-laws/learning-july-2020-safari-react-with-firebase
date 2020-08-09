import React, { useState, useContext, useEffect } from 'react';
import ListContext from '../context/lists/listContext';
import List from './List';
import CreateListForm from './CreateListForm';
import spinner from '../img/spinner.gif';

const AllLists = ({ boardId }) => {
  const listContext = useContext(ListContext);
  const { lists, getListByBoardId, addList } = listContext;

  const [isSpinning, setIsSpinning] = useState(true);

  // useEffect(() => {
  //   getLists();
  // }, []);

  // useEffect(() => {
  //   if (boardId !== null) {
  //     const list = lists.filter((list) => {
  //       return list.board === boardId;
  //     });
  //     setMyList(list);
  //   }
  // }, [boardId, lists]);

  useEffect(() => {
    const fetchLists = async () => {
      if (boardId !== undefined) {
        await getListByBoardId(boardId);
        await setIsSpinning(false);
      }
    };

    fetchLists();
  }, [boardId]);

  const createNewList = (list) => {
    addList(list);
  };

  if (lists.length === 0) {
    return (
      <div>
        <h4>No Lists Found</h4>
        <CreateListForm boardId={boardId} createNewList={createNewList} />
      </div>
    );
  }

  return (
    <div>
      {isSpinning && (
        <div>
          <img src={spinner} />
        </div>
      )}

      {!isSpinning &&
        lists &&
        lists.map((list) => (
          <List key={list.id} listId={list.id} title={list.title} />
        ))}
      <CreateListForm boardId={boardId} createNewList={createNewList} />
    </div>
  );
};

export default AllLists;
