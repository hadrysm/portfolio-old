import React from 'react';

import NavItem from 'components/atoms/NavItem/NavItem';

import { useTranslations } from 'hooks/useTranslations';

import { List } from './NavList.style';

const NavList = () => {
  const { menu } = useTranslations();
  return (
    <List>
      {menu.map(({ label, path, color }) => (
        <NavItem key={label} label={label} path={path} color={color} />
      ))}
    </List>
  );
};

export default NavList;
