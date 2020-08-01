import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styleWrapper } from './style';

const Input = ({ name, label, type, disabled, value, id, placeholder, onChange }) => {
  const [val, setValue] = useState(value);
  useEffect(() => {
    setValue(value);
  }, [value]);
  const handleChange = (event) => {
    setValue(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };
  return (
    <div data-testid="input-normal" css={styleWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={val}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'search']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: null,
  disabled: null,
  onChange: null,
};

export default Input;
