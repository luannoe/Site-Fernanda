import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Styles
import ButtonCSS from './style';

export const Button = forwardRef(
  ({ children, icon, color, type, className, hoverEffect, ...props }, ref) => {
    return (
      <a
        ref={ref}
        css={theme => ButtonCSS({ theme, icon, color, type, hoverEffect })}
        className={`${className} button`}
        {...props}
      >
        {icon && icon}
        {children && <span>{children}</span>}
      </a>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  type: PropTypes.oneOf(['normal', 'outline']),
  className: PropTypes.string,
  hoverEffect: PropTypes.oneOf(['normal', 'transform']),
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
  hoverEffect: 'normal',
  color: 'primaryGradient'
};

export default Button;
