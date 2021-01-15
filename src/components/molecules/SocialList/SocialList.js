import React from 'react';
import {
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from 'react-icons/fa';

import { SocialIcon } from 'components/atoms/SocialIcon/SocialIcon';

import { List } from './SocialList.style';

const socialLinks = [
  {
    id: 1,
    icon: GithubIcon,
    href: 'https://github.com/hadrysm',
  },
  {
    id: 2,
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/mateusz-hadry%C5%9B-02a4951a2/',
  },
  {
    id: 3,
    icon: InstagramIcon,
    href: 'https://www.instagram.com/mateusz.hadrys/',
  },
  {
    id: 4,
    icon: TwitterIcon,
    href: 'https://twitter.com/hadrys_m',
  },
];

const SocialList = () => (
  <List>
    {socialLinks.map(({ id, icon, href }) => (
      <SocialIcon key={id} icon={icon} href={href} />
    ))}
  </List>
);

export { SocialList };
