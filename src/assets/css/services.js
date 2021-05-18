import { css } from '@emotion/core';
import BackgroundImg from '@assets/img/background.jpg';
import ServiceBgImg from '@assets/img/service-home-bg.jpg';

export const ServicesWrapper = ({ theme: { colors }, hasHeader }) => css`
  .services {
    &-banner {
      position: relative;
      background: url(${BackgroundImg});
      background-size: cover;
      padding: 48px 16px;
      color: #fff;

      @media (min-width: 768px) {
        padding: ${hasHeader ? '128px 0' : '220px 0 128px'};
      }

      &:before {
        content: ' ';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(
          135deg,
          ${colors.transparency.primary(0.9)},
          ${colors.transparency.primaryAccent(0.6)},
          transparent
        );
      }

      h1 {
        font-family: 'Playfair Display', sans-serif;
        font-size: 34px;
        color: #fff;
        line-height: 1.1;
        margin-bottom: 24px;
        font-weight: 400;

        @media (min-width: 768px) {
          font-size: 54px;
        }

        span {
          font-size: 34px;
        }
      }

      h5 {
        font-family: 'Playfair Display', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
      }
    }

    &-services {
      position: relative;
      padding: 48px 0 200px;
      background: #fff;
      background-size: 250px;

      @media (min-width: 768px) {
        padding: 92px 0 200px;
      }

      .service {
        padding: 0 16px;
        text-align: center;
        user-select: none;

        @media (min-width: 768px) {
          padding: 0;
        }

        &:hover {
          svg {
            transform: translateY(-4px);
            box-shadow: 0 16px 32px ${colors.transparency.primaryAccent(0.6)};
          }
        }

        h3 {
          font-family: 'Playfair Display', sans-serif;
          color: #444;
          font-weight: 600;
        }

        p {
          opacity: 0.7;
        }

        svg {
          display: block;
          margin: 0 auto 24px;
          font-size: 92px;
          padding: 14px;
          color: #fff;
          border-radius: 50%;
          opacity: 0.85;
          background: ${colors.primary}
            linear-gradient(135deg, ${colors.primary}, ${colors.primaryAccent})
            no-repeat;
          transition: background 0.3s, box-shadow 0.3s, transform 0.3s;
        }
      }
    }
  }
`;

export default ServicesWrapper;
