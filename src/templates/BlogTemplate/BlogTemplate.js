import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { SEO } from 'components/organisms/SEO/SEO';
import { Content } from 'components/atoms/Content/Content';
import { Text } from 'components/atoms/Text/Text';

import { Wrapper, Flex, InnerWrapper, Img } from './BlogTemplate.style';

const BlogTemplate = ({
  data: {
    blogPage: {
      seo,
      title,
      image: { url, alt },
    },
  },
}) => (
  <>
    <SEO seo={seo} />
    <Wrapper>
      <Content>
        <Flex>
          <InnerWrapper>
            <Text isTitle isMedium color="white">
              {title}
            </Text>
          </InnerWrapper>
          <InnerWrapper>
            <Img src={url} alt={alt} />
          </InnerWrapper>
        </Flex>
      </Content>
    </Wrapper>
  </>
);

export const query = graphql`
  query BlogQuery($locale: String!) {
    blogPage: datoCmsBlogPage(locale: { eq: $locale }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      image {
        url
        alt
      }
    }
  }
`;

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    blogPage: PropTypes.shape({
      seo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
      title: PropTypes.string,
      image: PropTypes.objectOf(PropTypes.string),
    }),
  }).isRequired,
};

export default BlogTemplate;
