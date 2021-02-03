import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const NavigationStateContext = createContext();
const NavigationDispatchContext = createContext();

const NavigationStateProvider = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <NavigationStateContext.Provider value={isOpen}>
      <NavigationDispatchContext.Provider value={setIsOpen}>
        {children}
      </NavigationDispatchContext.Provider>
    </NavigationStateContext.Provider>
  );
};

const useNavigationState = () => {
  const isMenuOpen = useContext(NavigationStateContext);
  if (isMenuOpen === undefined) {
    throw new Error('useNavigationState must be used within a NavigationStateProvider');
  }
  return isMenuOpen;
};

const useNavigationDispatch = () => {
  const setMenuOpen = useContext(NavigationDispatchContext);
  if (setMenuOpen === undefined) {
    throw new Error('useNavigationDispatch must be used within a NavigationStateProvider');
  }

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  const closeMenu = () => setMenuOpen(false);

  const openMenu = () => setMenuOpen(true);

  return {
    toggleMenu,
    closeMenu,
    openMenu,
  };
};

const useNavigation = () => [useNavigationState(), useNavigationDispatch()];

NavigationStateProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export { NavigationStateProvider, useNavigationState, useNavigationDispatch, useNavigation };
