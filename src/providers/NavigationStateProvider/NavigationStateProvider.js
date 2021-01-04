import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const NavigationStateContext = createContext(false);
const NavigationDispatchContext = createContext(() => {});

const NavigationStateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  return {
    toggleMenu,
  };
};

NavigationStateProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { NavigationStateProvider, useNavigationState, useNavigationDispatch };
