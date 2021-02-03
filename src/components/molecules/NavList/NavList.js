import React from 'react';

import { NavItem } from 'components/atoms/NavItem/NavItem';

import { useTranslations } from 'hooks/useTranslations';

import { List } from './NavList.style';

const NavList = () => {
  const { menu } = useTranslations();

  return (
    <List>
      {menu.map(({ label, path, color }, index) => (
        <NavItem key={label} label={label} path={path} color={color} index={index} />
      ))}
    </List>
  );
};

export { NavList };
