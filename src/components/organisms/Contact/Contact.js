import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Text } from 'components/atoms/Text/Text';
import { Headline } from 'components/atoms/Headline/Headline';
import { SocialList } from 'components/molecules/SocialList/SocialList';
import { ContactForm } from 'components/molecules/ContactForm/ContactForm';
import { Animated } from 'animations';

import { useObserverAnimation } from 'hooks/useObserverAnimation';
import { useTranslations } from 'hooks/useTranslations';

import { Wrapper } from './Contact.style';

const Contact = ({ contactSubtitle }) => {
  const { contact } = useTranslations();
  const [containerRef, controls] = useObserverAnimation();

  return (
    <Wrapper ref={containerRef}>
      <Content>
        <Animated.FromDirection from="bottom" duration={1.1} animate={controls}>
          <Headline text={contact.title} primary isMedium />
        </Animated.FromDirection>
        <Text isBold>
          <Animated.Words delay={0.6} animate={controls}>
            {contactSubtitle}
          </Animated.Words>
        </Text>
        <SocialList />
        <Animated.FromDirection from="bottom" duration={1.1} delay={0.5} animate={controls}>
          <ContactForm />
        </Animated.FromDirection>
      </Content>
    </Wrapper>
  );
};

Contact.propTypes = {
  contactSubtitle: PropTypes.string.isRequired,
};

export { Contact };
