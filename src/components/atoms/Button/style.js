import { css } from '@emotion/core';

const getColor = ({ theme: { colors }, color }) => {
  const colorsObj = {
    primaryGradient: css`
      background: ${colors.primary}
        linear-gradient(135deg, ${colors.primary}, ${colors.primaryAccent})
        no-repeat;
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(247, 150, 93, 0.6);
      }
    `,
    primary: css`
      background: ${colors.primary};
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(247, 150, 93, 0.6);
      }
    `,
    primaryAccent: css`
      background: ${colors.primaryAccent};
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(247, 150, 93, 0.6);
      }
    `,
    secondaryGradient: css`
      background: ${colors.secondary}
        linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryAccent})
        no-repeat;
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(119, 147, 112, 0.4);
      }
    `,
    secondary: css`
      background: ${colors.secondary};
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(119, 147, 112, 0.3);
      }
    `,
    secondaryAccent: css`
      background: ${colors.secondaryAccent};
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(119, 147, 112, 0.4);
      }
    `,
    offWhiteGradient: css`
      background: ${colors.offWhite}
        linear-gradient(135deg, ${colors.offWhite}, ${colors.offWhiteAccent})
        no-repeat;
      color: ${colors.secondaryAccent};

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    offWhite: css`
      background: ${colors.offWhite};
      color: ${colors.secondaryAccent};

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    offWhiteAccent: css`
      background: ${colors.offWhiteAccent};
      color: ${colors.secondaryAccent};

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    white: css`
      background: #fff;
      color: ${colors.secondaryAccent};

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    `,
    gray: css`
      background: #777;
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
    `,
    black: css`
      background: #000;
      color: #fff;

      &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
    `
  };

  return colorsObj[color] || colorsObj['primaryGradient'];
};

const getOutlineColor = ({ theme: { colors }, color }) => {
  const background = css`
    background: transparent;
  `;

  const colorsObj = {
    primaryGradient: css`
      ${background}
      color: ${colors.primary};
      border: 2px solid ${colors.primary};
    `,
    primary: css`
      ${background}
      color: ${colors.primary};
      border: 2px solid ${colors.primary};
    `,
    primaryAccent: css`
      ${background}
      color: ${colors.primaryAccent};
      border: 2px solid ${colors.primaryAccent};
    `,
    secondaryGradient: css`
      ${background}
      color: ${colors.secondary};
      border: 2px solid ${colors.secondary};
    `,
    secondary: css`
      ${background}
      color: ${colors.secondary};
      border: 2px solid ${colors.secondary};
    `,
    secondaryAccent: css`
      ${background}
      color: ${colors.secondaryAccent};
      border: 2px solid ${colors.secondaryAccent};
    `,
    offWhiteGradient: css`
      ${background}
      color: ${colors.offWhite};
      border: 2px solid ${colors.offWhite};
    `,
    offWhite: css`
      ${background}
      color: ${colors.offWhite};
      border: 2px solid ${colors.offWhite};
    `,
    offWhiteAccent: css`
      ${background}
      color: ${colors.offWhiteAccent};
      border: 2px solid ${colors.offWhiteAccent};
    `,
    white: css`
      ${background}
      color: #fff;
      border: 2px solid #fff;
    `,
    gray: css`
      ${background}
      color: #777;
      border: 2px solid #777;
    `,
    black: css`
      ${background}
      color: #000;
      border: 2px solid #000;
    `
  };

  return colorsObj[color] || colorsObj['primaryGradient'];
};

export const ButtonCSS = ({ theme, icon, color, type, hoverEffect }) => css`
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
    cursor: pointer;

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
