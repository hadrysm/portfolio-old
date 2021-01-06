import React from 'react';

import { List, Item } from './LangList.style';

// add links and lang change handler

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const langVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      ...transition,
    },
  },
  closed: {
    opacity: 0,
    x: -120,
    transition: {
      ...transition,
    },
  },
};

const LangList = () => (
  <List>
    <Item variants={langVariants}>pl</Item>
    <Item variants={langVariants} active>
      eng
    </Item>
  </List>
);

export default LangList;
