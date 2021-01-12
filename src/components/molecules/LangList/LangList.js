import React from 'react';

import { useLocaleState } from 'providers/LocaleProvider/LocaleProvider';
import locales from '../../../../config/locales';

import { List, Item } from './LangList.style';

// add links and lang change handler

const transition = { duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] };

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

const LangList = () => {
  const { activeLocale } = useLocaleState();

  return (
    <List>
      {locales.map(({ label }) => (
        <Item key={label} variants={langVariants} active={activeLocale === label}>
          {label}
        </Item>
      ))}
    </List>
  );
};

export default LangList;
