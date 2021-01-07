import React from 'react';

import NavItem from 'components/atoms/NavItem/NavItem';

import { List } from './NavList.style';

const links = [
  {
    id: 1,
    label: 'Home',
    path: '/',
    colorContext: 'yellow',
  },
  {
    id: 2,
    label: 'Projects',
    path: '/projects',
    colorContext: 'red',
  },
  {
    id: 3,
    label: 'Blog',
    path: '/blog',
    colorContext: 'grey400',
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
