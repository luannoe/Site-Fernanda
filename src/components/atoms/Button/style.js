import { css } from '@emotion/core';

const getColor = ({ theme: { colors }, color }) => {
  const colorsObj = {
    primaryGradient: css`
      background: ${colors.primary}
        linear-gradient(135deg, ${colors.primary}, ${colors.primaryAccent})
        no-repeat;
      color: #fff;
    `,
    primary: css`
      background: ${colors.primary};
      color: #fff;
    `,
    primaryAccent: css`
      background: ${colors.primaryAccent};
      color: #fff;
    `,
    secondaryGradient: css`
      background: ${colors.secondary}
        linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryAccent})
        no-repeat;
      color: #fff;
    `,
    secondary: css`
      background: ${colors.secondary};
      color: #fff;
    `,
    secondaryAccent: css`
      background: ${colors.secondaryAccent};
      color: #fff;
    `,
    offWhiteGradient: css`
      background: ${colors.offWhite}
        linear-gradient(135deg, ${colors.offWhite}, ${colors.offWhiteAccent})
        no-repeat;
      color: ${colors.secondaryAccent};
    `,
    offWhite: css`
      background: ${colors.offWhite};
      color: ${colors.secondaryAccent};
    `,
    offWhiteAccent: css`
      background: ${colors.offWhiteAccent};
      color: ${colors.secondaryAccent};
    `,
    white: css`
      background: #fff;
      color: ${colors.secondaryAccent};
    `,
    gray: css`
      background: #777;
      color: #fff;
    `,
    black: css`
      background: #000;
      color: #fff;
    `
  };

  return colorsObj[color] || colorsObj['primaryGradient'];
};

const getOutlineColor = ({ theme: { colors }, color, type }) => {
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

export const ButtonCSS = ({ theme, children, color, type }) => {
  return css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: none;
    padding: ${type === 'outline' ? '6px 18px' : '8px 20px'};
    border-radius: 50px;
    transition: all 0.3s;
    font-weight: 500;
    ${type === 'outline'
      ? getOutlineColor({ theme, color })
      : getColor({ theme, color })}

    &:hover {
      background-position: 200px;
      opacity: 0.9;
    }

    &:focus {
      outline: 1px dotted;
    }

    > svg {
      margin-right: ${children ? 14 : 0}px;
    }
  `;
};

export default ButtonCSS;
