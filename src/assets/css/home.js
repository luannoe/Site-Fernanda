import { css } from '@emotion/core';
import BackgroundImg from '@assets/img/background.jpg';
import ServiceBgImg from '@assets/img/service-home-bg.jpg';

export const HomeWrapper = ({ theme: { colors }, hasHeader }) => css`
  .home {
    &-banner {
      position: relative;
      background: url(${BackgroundImg}) center bottom;
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

      .service-item {
        text-align: center;
        user-select: none;

        &:hover {
          svg {
            box-shadow: 0 16px 32px rgba(255, 255, 255, 0.24);
          }
        }

        svg {
          display: block;
          margin: 0 auto 14px;
          font-size: 64px;
          padding: 14px;
          color: ${colors.secondary};
          border-radius: 50%;
          background: #fff;
          transition: box-shadow 0.3s;
        }

        h3 {
          font-weight: 500;
        }
      }
    }

    &-about {
      padding: 48px 16px;

      @media (min-width: 768px) {
        padding: 92px 0;
      }

      @media (max-width: 991px) {
        .col-lg-5 {
          margin-top: 32px;
          order: 1;
        }
      }

      &-icon {
        img {
          width: 70%;
          display: block;
          margin: 0 auto;
          border-radius: 6px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }
      }

      &-content {
        h2 {
          font-family: 'Playfair Display', sans-serif;
          font-weight: 600;
          font-size: 32px;
          margin-bottom: 24px;
          color: #444;
        }

        p {
          opacity: 0.7;
        }

        .quotes {
          position: relative;
          padding-left: 48px;

          span {
            font-style: italic;
          }

          &:before {
            content: '"';
            position: absolute;
            top: 0;
            left: 0;
            font-family: 'Catamaran', sans-serif;
            font-size: 80px;
            line-height: 80px;
            transform: rotateY(180deg);
            color: ${colors.secondary};
          }
        }

        .social {
          display: flex;
          margin-top: 36px;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            background: ${colors.secondaryAccent};
            border-radius: 24px;
            color: #fff;
            font-size: 24px;

            & + a {
              margin-left: 14px;
            }
          }
        }

        .photos {
          .card {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 300px;
            border-radius: 5px;
            overflow: hidden;
            background: ${colors.secondary}
              linear-gradient(
                135deg,
                ${colors.secondary},
                ${colors.secondaryAccent}
              );

            img {
              object-fit: cover;
              height: 300px;
              width: 100%;
            }

            &.with-content {
              padding: 20px;
              color: #fff;

              p {
                opacity: 1;
                flex: 1;
              }
            }
          }
        }
      }
    }

    &-services {
      position: relative;
      padding: 48px 0 200px;
      background: #fff url(${ServiceBgImg}) right bottom no-repeat;
      background-size: 250px;

      @media (min-width: 768px) {
        padding: 92px 0 200px;
      }

      &:before {
        content: ' ';
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.05);
        top: 0;
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

export default HomeWrapper;
