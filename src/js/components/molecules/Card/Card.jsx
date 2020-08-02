import React from 'react';
import PropTypes from 'prop-types';
import { styleWrapper } from './style';

const Card = ({ data, disabled, onSelect }) => {
  const handleSelectCard = () => {
    if (typeof onSelect === 'function' && !disabled) {
      onSelect(data);
    }
  };
  if (data === null) return null;
  return (
    <div role="presentation" css={() => styleWrapper(disabled)} onClick={handleSelectCard}>
      <img src={data.imageUrl} alt="" />
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    supertype: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
};

Card.defaultProps = {
  data: null,
  disabled: false,
  onSelect: null,
};

export default Card;
