import React from 'react';

import { SCThemeProvider } from 'providers/ThemeProvider/ThemeProvider';
import { NavigationStateProvider } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { PageThemeColorsProvider } from 'providers/PageThemeColorsProvider/PageThemeColorsProvider';

import Layout from 'templates/Layout/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const wrapRootElement = ({ element }) => (
  <PageThemeColorsProvider>
    <NavigationStateProvider>
      <SCThemeProvider>{element}</SCThemeProvider>
    </NavigationStateProvider>
  </PageThemeColorsProvider>
);
