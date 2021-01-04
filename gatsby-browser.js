import React from 'react';

import ThemeProvider from 'providers/ThemeProvider/ThemeProvider';
import { NavigationStateProvider } from 'providers/NavigationStateProvider/NavigationStateProvider';

import Layout from 'templates/Layout/Layout';

export const wrapPageElement = ({ element, props }) => (
  <NavigationStateProvider>
    <ThemeProvider>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  </NavigationStateProvider>
);
