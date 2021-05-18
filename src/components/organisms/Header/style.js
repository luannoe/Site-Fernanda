import { css } from '@emotion/core';

export const HeaderWrapper = ({
  theme: { colors },
  transparent,
  hasScroll,
  menuOpen
}) => css`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  backdrop-filter: ${menuOpen ? 'none' : 'blur(15px)'};
  transition: box-shadow 0.3s, padding 0.3s;

  padding: ${hasScroll ? '8px 16px' : '16px'};

  background: #fff;

  box-shadow: ${hasScroll || !transparent
    ? '0px 6px 30px rgba(0, 0, 0, 0.12)'
    : 'none'};

  @media (min-width: 768px) {
    padding: ${hasScroll ? '8px 0' : '16px 0'};
  }

  .header {
    &-content {
      display: flex;
      flex-wrap: wrap;
    }

    &-logo-wrapper {
      flex: 0;
      display: flex;
      align-items: center;

      img {
        position: relative;
        z-index: 9999;
        height: ${hasScroll ? 40 : 80}px;
        transition: height 0.3s;
        max-width: 190px;

        @media (min-width: 768px) {
          width: auto;
        }
      }
    }

    &-menu-wrapper {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .desktop-nav {
        display: none;

        @media (min-width: 992px) {
          display: block;
        }
      }

      .mobile-nav {
        display: block;

        @media (min-width: 992px) {
          display: none;
        }

        .hamburger-menu {
          cursor: pointer;
          width: 28px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1000;

          .hamburger-menu-icon {
            position: relative;
            width: 28px;
            height: 2px;
            background: ${menuOpen ? 'transparent' : colors.secondaryAccent};
            transition: all 0.3s;

            &:after {
              content: ' ';
              position: absolute;
              top: ${menuOpen ? 0 : -8}px;
              width: 28px;
              height: 2px;
              background: ${colors.secondaryAccent};
              transform: ${menuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
              transition: all 0.3s;
            }

            &:before {
              content: ' ';
              position: absolute;
              top: ${menuOpen ? 0 : 8}px;
              width: 28px;
              height: 2px;
              background: ${colors.secondaryAccent};
              transform: ${menuOpen ? 'rotate(45deg)' : 'rotate(0)'};
              transition: all 0.3s;
            }
          }
        }

        &-wrapper {
          opacity: ${menuOpen ? 1 : 0};
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(15px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          pointer-events: ${menuOpen ? 'auto' : 'none'};
        }
      }

      nav {
        max-width: max-content;

        ul {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          flex-direction: column;

          @media (min-width: 992px) {
            flex-direction: row;
          }

          li {
            margin: 16px;
            padding: 0;
            list-style: none;
            font-weight: 500;

            @media (min-width: 992px) {
              margin: 0;

              &:last-of-type {
                margin-left: 16px;
              }
            }

            .menu-link {
              display: inline-block;
              transition: color 0.3s, opacity 0.3s;
              text-decoration: none;
              font-size: 32px;
              font-family: 'Playfair Display', sans-serif;
              color: #666;
              padding: 16px;

              @media (min-width: 992px) {
                font-size: 16px;
                font-family: 'Work Sans', sans-serif;
                border-radius: 4px;
                color: ${hasScroll || !transparent
                  ? colors.secondaryAccentDarker
                  : colors.offWhiteAccent};
              }

              &:hover {
                opacity: ${hasScroll || !transparent ? 1 : 0.6};
                color: ${hasScroll || !transparent
                  ? colors.secondary
                  : colors.offWhiteAccent};
              }
            }
          }
        }
      }
    }
  }
`;

export default HeaderWrapper;
