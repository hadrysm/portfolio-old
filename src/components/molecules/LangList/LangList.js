import React from 'react';

import { useLocaleState, useLocaleDispatch } from 'providers/LocaleProvider/LocaleProvider';
import { CTA } from 'components/atoms/CTA/CTA';
import { Animated } from 'animations';

import locales from 'config/locales';
import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { List, Item, StyledText } from './LangList.style';

const LangList = () => {
  const { activeLocale } = useLocaleState();
  const { updateLocale } = useLocaleDispatch();
  const [containerRef, controls] = useObserverAnimation();

  return (
    <List ref={containerRef}>
      {locales.map(({ siteLanguage, label, path }, index) => (
        <Item key={siteLanguage}>
          <CTA to={`/${path}`} isLocalizedLink onClick={() => updateLocale(siteLanguage)}>
            <div>
              <Animated.FromDirection
                from="bottom"
                animate={controls}
                delay={0.2}
                exit={{ opacity: 0, y: '100%' }}
                custom={index}
              >
                <StyledText isSmall isBold isUpper active={activeLocale === siteLanguage}>
                  {label}
                </StyledText>
              </Animated.FromDirection>
            </div>
          </CTA>
        </Item>
      ))}
    </List>
  );
};

export { LangList };
