import React from 'react';

import { SCThemeProvider } from 'providers/ThemeProvider/ThemeProvider';
import { NavigationStateProvider } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { PageThemeProvider } from 'providers/PageThemeProvider/PageThemeProvider';
import { PageTransitionProvider } from 'providers/PageTransitionProvider/PageTransitionProvider';
import { LocaleProvider } from 'providers/LocaleProvider/LocaleProvider';

import Layout from 'templates/Layout/Layout';

export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider locale={props.pageContext.locale}>
    <NavigationStateProvider {...props}>
      <Layout {...props}>{element}</Layout>
    </NavigationStateProvider>
  </LocaleProvider>
);

export const wrapRootElement = ({ element }) => (
  <PageThemeProvider>
    <PageTransitionProvider>
      <SCThemeProvider>{element}</SCThemeProvider>
    </PageTransitionProvider>
  </PageThemeProvider>
);
