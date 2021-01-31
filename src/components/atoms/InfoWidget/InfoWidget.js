import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Text } from 'components/atoms/Text/Text';

import { Widget } from './InfoWidget.style';

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const variants = {
  initial: {
    x: '-100%',
  },

  visible: {
    x: 0,
    transition: {
      ...transition,
    },
  },

  exit: {
    x: '-100%',
    transition: {
      ...transition,
    },
  },
};

const InfoWidget = ({ status = 200, isVisible = false }) => (
  <AnimatePresence>
    {isVisible && (
      <Widget status={status} initial="initial" animate="visible" exit="exit" variants={variants}>
        <Text color="white">text</Text>
      </Widget>
    )}
  </AnimatePresence>
);

InfoWidget.propTypes = {
  status: PropTypes.number,
  isVisible: PropTypes.bool,
};

export { InfoWidget };
