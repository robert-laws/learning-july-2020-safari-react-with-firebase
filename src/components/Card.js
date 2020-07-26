import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ text }) => {
  return (
    <ul>
      <li>{text}</li>
    </ul>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
