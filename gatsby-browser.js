import React from 'react';

import { SCThemeProvider } from 'providers/ThemeProvider/ThemeProvider';
import { NavigationStateProvider } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { PageThemeProvider } from 'providers/PageThemeProvider/PageThemeProvider';
import { PageTransitionProvider } from 'providers/PageTransitionProvider/PageTransitionProvider';

import Layout from 'templates/Layout/Layout';

export const wrapPageElement = ({ element, props }) => (
  <NavigationStateProvider {...props}>
    <Layout {...props}>{element}</Layout>
  </NavigationStateProvider>
);

export const wrapRootElement = cos => (
  <PageThemeProvider>
    <PageTransitionProvider>
      <SCThemeProvider>{cos.element}</SCThemeProvider>
    </PageTransitionProvider>
  </PageThemeProvider>
);
