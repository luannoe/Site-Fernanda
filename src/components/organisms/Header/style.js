import { css } from '@emotion/core';

export const HeaderWrapper = ({
  theme: { colors },
  transparent,
  hasScroll
}) => css`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: ${transparent
    ? hasScroll
      ? 'rgba(255, 255, 255, 0.9)'
      : 'rgba(255, 255, 255, 0)'
    : 'rgba(255, 255, 255, 0.9)'};
  padding: 16px 0;
  box-shadow: ${transparent ? 'none' : '0px 6px 30px rgba(0, 0, 0, 0.12)'};
  backdrop-filter: blur(24px);
  transition: background 0.3s;

  .header {
    &-content {
      display: flex;
      flex-wrap: wrap;
    }

    &-logo-wrapper {
      flex: 0;

      img {
        height: ${hasScroll ? 48 : 80}px;
        transition: height 0.3s;
      }
    }

    &-menu-wrapper {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      nav {
        max-width: max-content;

        ul {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;

          li {
            margin: 0 16px;
            padding: 0;
            list-style: none;
            font-weight: 500;

            &:first-of-type {
              margin-left: 0;
            }

            &:last-of-type {
              margin-right: 0;
            }

            a {
              color: ${colors.secondaryAccent};
              transition: color 0.3s;
              text-decoration: none;

              &:hover {
                color: ${colors.primary};
              }
            }
          }
        }
      }
    }
  }
`;

export default HeaderWrapper;
