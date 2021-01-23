import React from 'react';
import PropTypes from 'prop-types';

import { Txt, Title } from './Text.style';

const Text = ({ isTitle = false, as = 'h2', children, ...props }) => {
  if (isTitle) {
    return (
      <Title as={as} {...props}>
        {children}
      </Title>
    );
  }
  return <Txt {...props}>{children}</Txt>;
};

Text.propTypes = {
  isTitle: PropTypes.bool,
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { Text };
