import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 1rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Text = styled.span`
  position: relative;
  display: block;
  padding: 1rem;
  margin-left: 1.5rem;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.body.m};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.body.l};
  }

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.primary};
  }
`;
