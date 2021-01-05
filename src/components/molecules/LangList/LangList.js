import React from 'react';

import { List, Item } from './LangList.style';

// add links and lang change handler

const LangList = () => (
  <List>
    <Item>pl</Item>
    <Item active>eng</Item>
  </List>
);

export default LangList;
