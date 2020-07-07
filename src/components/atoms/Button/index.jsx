import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Styles
import ButtonCSS from './style';

export const Button = forwardRef(
  ({ children, icon, color, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        css={theme => ButtonCSS({ theme, children, color, type })}
        {...props}
      >
        {icon && icon}
        {children && children}
      </button>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  type: PropTypes.oneOf(['normal', 'outline']),
  color: PropTypes.oneOf([
    'primaryGradient',
    'primary',
    'primaryAccent',
    'secondaryGradient',
    'secondary',
    'secondaryAccent',
    'offWhiteGradient',
    'offWhite',
    'offWhiteAccent',
    'white',
    'gray',
    'black'
  ])
};

Button.defaultProps = {
  type: 'normal',
  color: 'primaryGradient'
};

export default Button;
