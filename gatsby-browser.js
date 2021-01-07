import React from 'react';

import { SCThemeProvider } from 'providers/ThemeProvider/ThemeProvider';
import { NavigationStateProvider } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { PageThemeProvider } from 'providers/PageThemeProvider/PageThemeProvider';

import Layout from 'templates/Layout/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const wrapRootElement = ({ element }) => (
  <PageThemeProvider>
    <NavigationStateProvider>
      <SCThemeProvider>{element}</SCThemeProvider>
    </NavigationStateProvider>
  </PageThemeProvider>
);
