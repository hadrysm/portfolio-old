import React from 'react';

import { Content } from 'components/atoms/Content/Content';
import { Text } from 'components/atoms/Text/Text';

import { useTranslations } from 'hooks/useTranslations';

import { Wrapper, Flex } from './Footer.style';

const Footer = () => {
  const { footer } = useTranslations();

  return (
    <Wrapper>
      <Content>
        <Flex>
          <Text color="white">&copy; {footer.text}</Text>
        </Flex>
      </Content>
    </Wrapper>
  );
};

export { Footer };
