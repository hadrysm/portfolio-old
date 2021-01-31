import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { AnimateSharedLayout } from 'framer-motion';

import { CTA } from 'components/atoms/CTA/CTA';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

import { useTranslations } from 'hooks/useTranslations';

import { Form } from './ContactForm.style';

const initialValues = { email: '', message: '' };

const validationSchema = ({ emailMesssage, requiredMessage, shortMessage }) =>
  Yup.object().shape({
    email: Yup.string().email(emailMesssage).required(requiredMessage),
    message: Yup.string().max(100, shortMessage).required(requiredMessage),
  });

const ContactForm = () => {
  const {
    buttons,
    contact: { form },
  } = useTranslations();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues,
    validationSchema: validationSchema(form),
    onSubmit: async data => {
      try {
        const result = await emailjs.send(
          process.env.GATSBY_EMAILJS_SERVICE_ID,
          process.env.GATSBY_EMAILJS_TEMPLATE_ID,
          data,
          process.env.GATSBY_EMAILJS_USER_ID,
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <AnimateSharedLayout>
      <Form onSubmit={handleSubmit} autoComplete="off" method="POST" data-netlify layout>
        <Input
          label={form.email}
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          isError={errors.email && touched.email}
          errorMessage={errors.email}
        />
        <Input
          label={form.message}
          name="message"
          as="textarea"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.message}
          isError={errors.message && touched.message}
          errorMessage={errors.message}
        />
        <CTA isButton type="submit">
          <Button as="span">{buttons.send}</Button>
        </CTA>
      </Form>
    </AnimateSharedLayout>
  );
};

export { ContactForm };
