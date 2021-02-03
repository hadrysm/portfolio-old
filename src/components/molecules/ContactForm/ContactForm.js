import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AnimateSharedLayout } from 'framer-motion';

import { CTA } from 'components/atoms/CTA/CTA';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { InfoWidget } from 'components/atoms/InfoWidget/InfoWidget';

import { useTranslations } from 'hooks/useTranslations';
import { validationSchema, handleSendMessage } from 'helpers/form';
import { Spinner } from 'components/atoms/Spinner/Spinner';

import { Form, Wrapper } from './ContactForm.style';

const CLOSE_INFO_WIDGET_TIMEOUT = 3000;
const initialValues = { email: '', message: '' };

const ContactForm = () => {
  const [isOpenInfoWidget, setIsOpenInfoWidget] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(200);

  const {
    buttons,
    contact: { form },
  } = useTranslations();

  const handleResponse = ({ status = 200 }) => {
    setIsLoading(false);
    setIsOpenInfoWidget(true);
    setResponseStatus(status);
    setTimeout(() => {
      setIsOpenInfoWidget(false);
    }, CLOSE_INFO_WIDGET_TIMEOUT);
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } = useFormik({
    initialValues,
    validationSchema: validationSchema(form),
    onSubmit: async data => {
      setIsLoading(true);
      try {
        const result = await handleSendMessage(data);
        handleResponse(result);
        resetForm();
      } catch (error) {
        handleResponse(error);
      }
    },
  });

  return (
    <AnimateSharedLayout>
      <Wrapper layout>
        <Spinner isLoading={isLoading} layout />
        <InfoWidget isVisible={isOpenInfoWidget} status={responseStatus} layout />
        <Form onSubmit={handleSubmit} autoComplete="off" layout>
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
          <CTA isButton type="submit" disabled={isLoading} layout>
            <Button as="span">{buttons.send}</Button>
          </CTA>
        </Form>
      </Wrapper>
    </AnimateSharedLayout>
  );
};

export { ContactForm };
