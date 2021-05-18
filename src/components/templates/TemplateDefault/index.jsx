import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import Head from 'next/head';

// Styles
import RebootStyle from '@css/reboot';
import Grid from '@css/grid';
import CustomGlobal from '@css/global';

const TemplateDefault = ({ children, title, description, canonical }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        {canonical && <link rel='canonical' href={canonical} />}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Catamaran:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Global styles={RebootStyle} />
      <Global styles={Grid} />
      <Global styles={CustomGlobal} />

      {children}
    </>
  );
};

TemplateDefault.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

TemplateDefault.defaultProps = {
  canonical: undefined
};

export default TemplateDefault;
