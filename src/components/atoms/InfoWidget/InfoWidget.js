import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Text } from 'components/atoms/Text/Text';
import { Animated } from 'animations';

import { useTranslations } from 'hooks/useTranslations';

import { Widget } from './InfoWidget.style';

const InfoWidget = ({ status = 200, isVisible = false }) => {
  const {
    contact: {
      form: { response },
    },
  } = useTranslations();

  const txt = status === 200 ? response.success : response.error;

  return (
    <AnimatePresence>
      {isVisible && (
        <Animated.FromDirection
          key="modal"
          from="bottom"
          duration={1}
          exit={{ opacity: 0, y: '-100%' }}
        >
          <Widget status={status}>
            <Text isMedium color="white">
              {txt}
            </Text>
          </Widget>
        </Animated.FromDirection>
      )}
    </AnimatePresence>
  );
};

InfoWidget.propTypes = {
  status: PropTypes.number,
  isVisible: PropTypes.bool,
};

export { InfoWidget };
