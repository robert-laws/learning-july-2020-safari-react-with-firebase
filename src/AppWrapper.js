import React, { useContext, useEffect } from 'react';
import BoardContext from './context/boards/boardContext';

const AppWrapper = ({ children }) => {
  const boardContext = useContext(BoardContext);

  const { getBoards } = boardContext;

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <div>
      <h2>Trello Clone App</h2>
      <hr />
      {children}
    </div>
  );
};

export default AppWrapper;
