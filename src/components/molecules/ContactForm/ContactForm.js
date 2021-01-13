import React from 'react';

import CTA from 'components/atoms/CTA/CTA';
import Input from 'components/atoms/Input/Input';

import { useTranslations } from 'hooks/useTranslations';

import { Form } from './ContactForm.style';

const ContactForm = () => {
  const { send } = useTranslations({ key: 'buttons' });
  const { email, message } = useTranslations({ key: 'contact' });

  return (
    <Form>
      <Input label={email} name="email" onChange={() => {}} />
      <Input label={message} name="message" as="textarea" onChange={() => {}} />
      <CTA isButton type="submit">
        {send}
      </CTA>
    </Form>
  );
};

export default ContactForm;
