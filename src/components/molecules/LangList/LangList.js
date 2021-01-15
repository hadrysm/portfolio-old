import React from 'react';

import { useLocaleState, useLocaleDispatch } from 'providers/LocaleProvider/LocaleProvider';
import { CTA } from 'components/atoms/CTA/CTA';

import locales from 'config/locales';

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
  const { updateLocale } = useLocaleDispatch();

  return (
    <List>
      {locales.map(({ siteLanguage, label, path }) => (
        <Item key={siteLanguage} variants={langVariants} active={activeLocale === siteLanguage}>
          <CTA to={`/${path}`} isLocalizedLink onClick={() => updateLocale(siteLanguage)}>
            {label}
          </CTA>
        </Item>
      ))}
    </List>
  );
};

export { LangList };
