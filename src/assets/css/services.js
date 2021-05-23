import { css } from '@emotion/core';
import BackgroundImg from '@assets/img/background.jpg';
import ServiceBgImg from '@assets/img/service-home-bg.jpg';

export const ServicesWrapper = ({ theme: { colors }, hasHeader }) => css`
  .services {
    &-banner {
      position: relative;
      background: url(${BackgroundImg});
      background-size: cover;
      padding: ${hasHeader ? '48px 16px' : '128px 16px 48px'};
      color: #fff;

      @media (min-width: 768px) {
        padding: ${hasHeader ? '98px 0 64px' : '156px 0 64px'};
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
      padding: 48px 16px 200px;
      background: #fff url(${ServiceBgImg}) right bottom no-repeat;
      background-size: 250px;

      @media (min-width: 768px) {
        padding: 92px 0 200px;
      }

      .resume {
        order: -1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (min-width: 992px) {
          order: 0;
        }
      }

      .photo-column {
        order: 0;

        .photo {
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: center;

          @media (min-width: 992px) {
            margin-top: 0px;
          }

          img {
            width: 70%;
            display: block;
            margin: 0 auto;
            border-radius: 6px;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
          }
        }
      }

      hr {
        border: 0;
        background: 0;
        border-top: 1px solid #ddd;
        width: 60%;
        margin: 48px auto;

        @media (min-width: 768px) {
          margin: 82px auto;
        }
      }

      h2 {
        text-align: center;
      }

      .service {
        display: flex;
        flex-direction: column;
        user-select: none;
        text-align: center;

        @media (min-width: 768px) {
          flex-direction: row;
          padding: 0;
          text-align: left;
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
          flex: 0 0 92px;
          height: 92px;
          width: 92px;
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

          @media (min-width: 768px) {
            margin: 0 48px 0 0;
          }
        }

        > div {
          flex: 1;
        }
      }
    }
  }
`;

export default ServicesWrapper;
