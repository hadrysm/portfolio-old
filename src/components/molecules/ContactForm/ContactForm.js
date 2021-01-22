import React from 'react';

import { CTA } from 'components/atoms/CTA/CTA';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

import { useTranslations } from 'hooks/useTranslations';

import { Form } from './ContactForm.style';

const ContactForm = () => {
  const {
    buttons,
    contact: { email, message },
  } = useTranslations();

  return (
    <Form>
      <Input label={email} name="email" onChange={() => {}} />
      <Input label={message} name="message" as="textarea" onChange={() => {}} />
      <CTA isButton type="submit">
        <Button as="span">{buttons.send}</Button>
      </CTA>
    </Form>
  );
};

export { ContactForm };
