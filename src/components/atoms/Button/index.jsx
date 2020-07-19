import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Styles
import ButtonCSS from './style';

export const Button = forwardRef(
  (
    {
      children,
      icon,
      color,
      textColor,
      opacity,
      type,
      className,
      hoverEffect,
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        css={theme =>
          ButtonCSS({
            theme,
            icon,
            color,
            textColor,
            type,
            hoverEffect,
            opacity
          })
        }
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
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOf([
    'primaryGradient',
    'primary',
    'primaryAccent',
    'secondaryGradient',
    'secondary',
    'secondaryAccent',
    'secondaryAccentDarker',
    'offWhiteGradient',
    'offWhite',
    'offWhiteAccent',
    'white',
    'gray',
    'black'
  ]),
  textColor: PropTypes.oneOf([
    'primary',
    'primaryAccent',
    'secondary',
    'secondaryAccent',
    'secondaryAccentDarker',
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
  opacity: 1,
  color: 'primaryGradient',
  textColor: 'white'
};

export default Button;
