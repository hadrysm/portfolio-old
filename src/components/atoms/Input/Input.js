import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledInput, Label } from './Input.style';

const Input = ({
  value = '',
  tag = 'input',
  type = 'text',
  maxLength = 200,
  name,
  label,
  ...props
}) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput
      value={value}
      as={tag}
      type={type}
      name={name}
      id={name}
      maxLength={maxLength}
      {...props}
    />
    {/* <InputLineBar  isError={isError} /> */}
  </Wrapper>
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
