import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Animated } from 'animations';

import { Wrapper, StyledInput, Label, StyledText } from './Input.style';

const Input = ({
  value = '',
  tag = 'input',
  type = 'text',
  isError = false,
  errorMessage = '',
  name,
  label,
  ...props
}) => (
  <Wrapper layout>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput value={value} as={tag} type={type} name={name} id={name} {...props} />
    <AnimatePresence>
      {isError && (
        <Animated.FromDirection
          key="errorMessage"
          from="top"
          delay={0.1}
          duration={0.5}
          exit={{ y: '-20%', opacity: 0, transition: { duration: 0.5 } }}
        >
          <StyledText>{errorMessage}</StyledText>
        </Animated.FromDirection>
      )}
    </AnimatePresence>
  </Wrapper>
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export { Input };
