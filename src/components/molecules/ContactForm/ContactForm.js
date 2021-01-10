import React from 'react';

import CTA from 'components/atoms/CTA/CTA';
import Input from 'components/atoms/Input/Input';

import { Form } from './ContactForm.style';

const ContactForm = () => (
  <Form>
    <Input label="Email adress" name="email" onChange={() => {}} />
    <Input label="your message" name="message" as="textarea" onChange={() => {}} />
    <CTA isButton type="submit">
      Send
    </CTA>
  </Form>
);

export default ContactForm;
