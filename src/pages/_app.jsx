/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

// Style
import Theme from '@css/theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={Theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
