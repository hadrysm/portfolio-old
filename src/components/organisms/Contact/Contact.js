import React from 'react';

import Content from 'components/atoms/Content/Content';
import Headline from 'components/atoms/Headline/Headline';
import SocialList from 'components/molecules/SocialList/SocialList';
import ContactForm from 'components/molecules/ContactForm/ContactForm';

import { Wrapper, Text } from './Contact.style';

const Contact = () => (
  <Wrapper>
    <Content>
      <Headline text="contact" primary />
      <Text>You can find me online in many places...</Text>
      <SocialList />
      <ContactForm />
    </Content>
  </Wrapper>
);

export default Contact;
