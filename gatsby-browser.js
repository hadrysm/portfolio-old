import React from 'react';

import { SCThemeProvider } from 'providers/ThemeProvider/ThemeProvider';
import { NavigationStateProvider } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { PageThemeProvider } from 'providers/PageThemeProvider/PageThemeProvider';
import { PageTransitionProvider } from 'providers/PageTransitionProvider/PageTransitionProvider';

import Layout from 'templates/Layout/Layout';

export const wrapPageElement = ({ element, props }) => (
  <PageTransitionProvider {...props}>
    <Layout {...props}>{element}</Layout>
  </PageTransitionProvider>
);

export const wrapRootElement = ({ element }) => (
  <PageThemeProvider>
    <NavigationStateProvider>
      <SCThemeProvider>{element}</SCThemeProvider>
    </NavigationStateProvider>
  </PageThemeProvider>
);
