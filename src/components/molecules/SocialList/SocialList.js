import React from 'react';
import {
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from 'react-icons/fa';

import { SocialIcon } from 'components/atoms/SocialIcon/SocialIcon';
import { Animated } from 'animations';

import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { List } from './SocialList.style';

const socialLinks = [
  {
    id: 1,
    icon: GithubIcon,
    href: 'https://github.com/hadrysm',
    name: 'github',
  },
  {
    id: 2,
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/mateusz-hadry%C5%9B-02a4951a2/',
    name: 'linkedin',
  },
  {
    id: 3,
    icon: InstagramIcon,
    href: 'https://www.instagram.com/mateusz.hadrys/',
    name: 'instagram',
  },
  {
    id: 4,
    icon: TwitterIcon,
    href: 'https://twitter.com/hadrys_m',
    name: 'twitter',
  },
];

const SocialList = () => {
  const [containerRef, controls] = useObserverAnimation();

  return (
    <List ref={containerRef}>
      {socialLinks.map(({ id, icon, href, name }, index) => (
        <li key={id}>
          <Animated.FromDirection from="bottom" animate={controls} delay={index} custom={0.25}>
            <SocialIcon icon={icon} href={href} name={name} />
          </Animated.FromDirection>
        </li>
      ))}
    </List>
  );
};

export { SocialList };
