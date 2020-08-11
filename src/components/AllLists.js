import React, { useState, useContext, useEffect } from 'react';
import ListContext from '../context/lists/listContext';
import CardContext from '../context/cards/cardContext';
import List from './List';
import CreateListForm from './CreateListForm';
import spinner from '../img/spinner.gif';
import DeleteButton from './DeleteButton';

const AllLists = ({ boardId }) => {
  const listContext = useContext(ListContext);
  const { lists, getListByBoardId, addList, deleteList } = listContext;

  const cardContext = useContext(CardContext);
  const { deleteCardByListId } = cardContext;

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
        setIsSpinning(false);
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
          <img alt='spinner' src={spinner} />
        </div>
      )}

      {!isSpinning &&
        lists &&
        lists.map((list) => (
          <div key={list.id}>
            <List listId={list.id} title={list.title}>
              <DeleteButton
                deleteFunctions={[deleteCardByListId, deleteList]}
                type='List'
                id={list.id}
              />
            </List>
          </div>
        ))}
      <div>
        <CreateListForm boardId={boardId} createNewList={createNewList} />
      </div>
    </div>
  );
};

export default AllLists;
