import React from 'react';
import PropTypes from 'prop-types';

import { Content } from 'components/atoms/Content/Content';
import { Headline } from 'components/atoms/Headline/Headline';
import { SocialList } from 'components/molecules/SocialList/SocialList';
import { ContactForm } from 'components/molecules/ContactForm/ContactForm';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, Text } from './Contact.style';

const Contact = ({ contactSubtitle }) => {
  const { contact } = useTranslations();
  return (
    <Wrapper>
      <Content>
        <Headline text={contact.title} primary />
        <Text>{contactSubtitle}</Text>
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
