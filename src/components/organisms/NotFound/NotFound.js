import React from 'react';
import { navigate } from 'gatsby';

import { Button } from 'components/atoms/Button/Button';
import { CTA } from 'components/atoms/CTA/CTA';
import { Text } from 'components/atoms/Text/Text';

import { useTranslations } from 'hooks/useTranslations';
import { Wrapper, Flex } from './NotFound.style';

const NotFound = () => {
  const { notFound, buttons } = useTranslations();

  return (
    <Wrapper>
      <Flex>
        <Text isMedium isTitle color="white">
          {notFound.title}
        </Text>
        <Text color="white">{notFound.text}</Text>
        <CTA onClick={() => navigate(-1)}>
          <Button as="span" secondary>
            {buttons.back}
          </Button>
        </CTA>
      </Flex>
    </Wrapper>
  );
};

export { NotFound };
