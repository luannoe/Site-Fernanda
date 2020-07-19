import { css } from '@emotion/core';

const getColor = ({ theme: { colors }, color }) => {
  const colorsObj = {
    primaryGradient: css`
      background: ${colors.primary}
        linear-gradient(135deg, ${colors.primary}, ${colors.primaryAccent})
        no-repeat;

      &:hover {
        box-shadow: 0 8px 16px ${colors.transparency.primaryAccent(0.5)};
      }
    `,
    primary: css`
      background: ${colors.primary};

      &:hover {
        box-shadow: 0 8px 16px ${colors.transparency.primary(0.5)};
      }
    `,
    primaryAccent: css`
      background: ${colors.primaryAccent};

      &:hover {
        box-shadow: 0 8px 16px ${colors.transparency.primaryAccent(0.5)};
      }
    `,
    secondaryGradient: css`
      background: ${colors.secondary}
        linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryAccent})
        no-repeat;

      &:hover {
        box-shadow: 0 8px 16px ${colors.transparency.secondaryAccent(0.4)};
      }
    `,
    secondary: css`
      background: ${colors.secondary};

      &:hover {
        box-shadow: 0 8px 16px ${colors.transparency.secondary(0.4)};
      }
    `,
    secondaryAccent: css`
      background: ${colors.secondaryAccent};

      &:hover {
        box-shadow: 0 8px 16px ${colors.transparency.secondaryAccent(0.4)};
      }
    `,
    secondaryAccentDarker: css`
      background: ${colors.secondaryAccentDarker};

      &:hover {
        box-shadow: 0 8px 16px ${colors.transparency.secondaryAccentDarker(0.4)};
      }
    `,
    offWhiteGradient: css`
      background: ${colors.offWhite}
        linear-gradient(135deg, ${colors.offWhite}, ${colors.offWhiteAccent})
        no-repeat;

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    offWhite: css`
      background: ${colors.offWhite};

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    offWhiteAccent: css`
      background: ${colors.offWhiteAccent};

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    white: css`
      background: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    gray: css`
      background: #777;

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
    `,
    black: css`
      background: #000;

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
    `
  };

  return colorsObj[color] || colorsObj['primaryGradient'];
};

const getTextColor = ({ theme: { colors }, textColor }) => {
  const colorsObj = {
    white: '#fff',
    gray: '#777',
    black: '#000'
  };

  return colorsObj[textColor] || colors[textColor];
};

const getOutlineColor = ({ theme: { colors }, color }) => {
  const background = css`
    background: transparent;
  `;

  const colorsObj = {
    primaryGradient: css`
      ${background}
      border: 2px solid ${colors.primary};
    `,
    primary: css`
      ${background}
      border: 2px solid ${colors.primary};
    `,
    primaryAccent: css`
      ${background}
      border: 2px solid ${colors.primaryAccent};
    `,
    secondaryGradient: css`
      ${background}
      border: 2px solid ${colors.secondary};
    `,
    secondary: css`
      ${background}
      border: 2px solid ${colors.secondary};
    `,
    secondaryAccent: css`
      ${background}
      border: 2px solid ${colors.secondaryAccent};
    `,
    offWhiteGradient: css`
      ${background}
      border: 2px solid ${colors.offWhite};
    `,
    offWhite: css`
      ${background}
      border: 2px solid ${colors.offWhite};
    `,
    offWhiteAccent: css`
      ${background}
      border: 2px solid ${colors.offWhiteAccent};
    `,
    white: css`
      ${background}
      border: 2px solid #fff;
    `,
    gray: css`
      ${background}
      border: 2px solid #777;
    `,
    black: css`
      ${background}
      border: 2px solid #000;
    `
  };

  return colorsObj[color] || colorsObj['primaryGradient'];
};

export const ButtonCSS = ({
  theme,
  icon,
  color,
  textColor,
  opacity,
  type,
  hoverEffect
}) => css`
  &.button {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: none;
    max-width: max-content;
    padding: ${type === 'outline' ? '8px 22px' : '10px 24px'};
    border-radius: 50px;
    transition: color 0.3s, opacity 0.3s, box-shadow 0.3s, transform 0.3s;
    font-weight: 500;
    text-decoration: none;
    opacity: ${opacity};
    cursor: pointer;

    color: ${getTextColor({ theme, textColor })};

    ${type === 'outline'
      ? getOutlineColor({ theme, color })
      : getColor({ theme, color })}

    &:hover {
      opacity: 0.9;
      transform: ${hoverEffect === 'transform'
        ? 'translateY(-3px)'
        : 'translateY(0)'};
    }

    &:focus {
      outline: 1px dotted;
    }

    > span {
      display: inline-block;
      margin-left: ${icon ? 14 : 0}px;
    }
  }
`;

export default ButtonCSS;
