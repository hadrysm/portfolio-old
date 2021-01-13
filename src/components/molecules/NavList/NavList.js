import React from 'react';

import NavItem from 'components/atoms/NavItem/NavItem';

import { useTranslations } from 'hooks/useTranslations';

import { List } from './NavList.style';

const NavList = () => {
  const navList = useTranslations({ key: 'menu' });

  return (
    <List>
      {navList.map(({ label, path, color }) => (
        <NavItem key={label} label={label} path={path} color={color} />
      ))}
    </List>
  );
};

export default NavList;
