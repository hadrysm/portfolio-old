import React from 'react';

import NavItem from 'components/atoms/NavItem/NavItem';

import { List } from './NavList.style';

const links = [
  {
    id: 1,
    label: 'Home',
    path: '/',
    colorContext: 'yellow',
    pageTheme: {
      primary: '#FCBF49',
    },
  },
  {
    id: 2,
    label: 'Projects',
    path: '/projects',
    colorContext: 'red',
    pageTheme: {
      primary: '#E63946',
    },
  },
  {
    id: 3,
    label: 'Blog',
    path: '/blog',
    colorContext: 'grey400',
    pageTheme: {
      primary: '#3C404D',
    },
  },
];

const NavList = () => (
  <List>
    {links.map(({ id, label, path, colorContext, pageTheme }) => (
      <NavItem
        key={id}
        label={label}
        path={path}
        colorContext={colorContext}
        pageTheme={pageTheme}
      />
    ))}
  </List>
);

export default NavList;
