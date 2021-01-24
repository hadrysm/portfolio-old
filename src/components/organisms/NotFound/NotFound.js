import React from 'react';
import { navigate } from 'gatsby';

import { Button } from 'components/atoms/Button/Button';
import { Text } from 'components/atoms/Text/Text';

import { useTranslations } from 'hooks/useTranslations';
import { Wrapper, Flex, StyledCTA } from './NotFound.style';

const NotFound = () => {
  const { notFound, buttons } = useTranslations();

  return (
    <Wrapper>
      <Flex>
        <Text isMedium isTitle color="white">
          {notFound.title}
        </Text>
        <Text color="white">{notFound.text}</Text>
        <StyledCTA onClick={() => navigate(-1)}>
          <Button as="span" secondary>
            {buttons.back}
          </Button>
        </StyledCTA>
      </Flex>
    </Wrapper>
  );
};

export { NotFound };
