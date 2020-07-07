import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from './style';

export const Content = ({ hasHeader, children }) => {
  return (
    <section css={() => ContentWrapper({ hasHeader })}>{children}</section>
  );
};

Content.propTypes = {
  hasHeader: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

Content.defaultProps = {
  hasHeader: true
};

export default Content;
