import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Text } from 'components/atoms/Text/Text';
import { Headline } from 'components/atoms/Headline/Headline';
import { SocialList } from 'components/molecules/SocialList/SocialList';
import { ContactForm } from 'components/molecules/ContactForm/ContactForm';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper } from './Contact.style';

const Contact = ({ contactSubtitle }) => {
  const { contact } = useTranslations();
  return (
    <Wrapper>
      <Content>
        <Headline text={contact.title} primary isMedium />
        <Text isBold>{contactSubtitle}</Text>
        <SocialList />
        <ContactForm />
      </Content>
    </Wrapper>
  );
};

Contact.propTypes = {
  contactSubtitle: PropTypes.string.isRequired,
};

export { Contact };
