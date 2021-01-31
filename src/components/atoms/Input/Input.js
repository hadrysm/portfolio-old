import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Wrapper, StyledInput, Label, StyledText } from './Input.style';

const errorMessageVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 20,
    opacity: 0,
  },
};

const Input = ({
  value = '',
  tag = 'input',
  type = 'text',
  maxLength = 200,
  isError = false,
  errorMessage = '',
  name,
  label,
  ...props
}) => (
  <Wrapper>
    <Label htmlFor={name} layout>
      {label}
    </Label>
    <StyledInput
      value={value}
      as={tag}
      type={type}
      name={name}
      id={name}
      maxLength={maxLength}
      layout
      {...props}
    />
    <AnimatePresence>
      {isError && (
        <StyledText
          layout
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={errorMessageVariants}
        >
          {errorMessage}
        </StyledText>
      )}
    </AnimatePresence>
  </Wrapper>
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export { Input };
