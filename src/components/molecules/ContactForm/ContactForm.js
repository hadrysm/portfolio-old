import React from 'react';
import Input from 'components/atoms/Input/Input';

const ContactForm = () => (
  <form>
    <Input label="Email adress" name="email" />
    <Input label="your message" name="message" as="textarea" />
  </form>
);

export default ContactForm;
