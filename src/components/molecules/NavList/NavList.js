import React from 'react';

import NavItem from 'components/atoms/NavItem/NavItem';

import { List } from './NavList.style';

const links = [
  {
    id: 1,
    label: 'Home',
    path: '/',
    colorContext: 'primary',
  },
  {
    id: 2,
    label: 'Projects',
    path: '/projects',
    colorContext: 'secondary',
  },
  {
    id: 3,
    label: 'Blog',
    path: '/blog',
    colorContext: 'tertiary',
  },
];

const NavList = () => (
  <List>
    {links.map(({ id, label, path, colorContext }) => (
      <NavItem key={id} label={label} path={path} colorContext={colorContext} />
    ))}
  </List>
);

export default NavList;
