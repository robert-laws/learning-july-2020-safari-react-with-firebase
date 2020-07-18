import React from 'react';
import PropTypes from 'prop-types';

const BoardPreview = ({ board }) => {
  return <h4>{board.title}</h4>;
};

BoardPreview.propTypes = {
  board: PropTypes.object.isRequired,
};

export default BoardPreview;
