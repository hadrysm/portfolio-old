import React from 'react';

import { Button } from 'components/atoms/Button/Button';
import { CTA } from 'components/atoms/CTA/CTA';
import { navigate } from 'gatsby';

import { useTranslations } from 'hooks/useTranslations';
import { Wrapper, Flex, Heading, StyledParagraph } from './NotFound.style';

const NotFound = () => {
  const { notFound, buttons } = useTranslations();

  return (
    <Wrapper>
      <Flex>
        <Heading>{notFound.title}</Heading>
        <StyledParagraph>{notFound.text}</StyledParagraph>
        <CTA onClick={() => navigate(-1)}>
          <Button secondary>{buttons.back}</Button>
        </CTA>
      </Flex>
    </Wrapper>
  );
};

export { NotFound };
