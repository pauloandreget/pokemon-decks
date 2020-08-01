/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { styleBase } from './style';

const Button = ({ type, children, disabled, onClick }) => (
  <button
    css={styleBase}
    className={disabled ? 'disabled' : ''}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: null,
};

export default Button;
