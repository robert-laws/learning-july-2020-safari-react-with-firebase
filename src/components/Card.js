import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
