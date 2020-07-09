import { css } from '@emotion/core';
import BackgroundImg from '@assets/img/background.jpg';
import ServiceBgImg from '@assets/img/service-home-bg.jpg';

export const HomeWrapper = ({ theme: { colors }, hasHeader }) => css`
  .home {
    &-banner {
      position: relative;
      background: url(${BackgroundImg});
      background-size: cover;
      padding: ${hasHeader ? '128px 0' : '220px 0 128px'};
      color: #fff;

      &:before {
        content: ' ';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(
          135deg,
          ${colors.primary},
          rgba(247, 150, 93, 0.8),
          transparent
        );
      }

      h1 {
        font-family: 'Playfair Display', sans-serif;
        font-size: 54px;
        color: #fff;
        line-height: 1.1;
        margin-bottom: 24px;
        font-weight: 400;

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
      padding: 92px 0;

      &-icon {
        img {
          display: block;
          width: 50%;
          margin: 48px auto;
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
      padding: 92px 0 200px;
      background: #fff url(${ServiceBgImg}) right bottom no-repeat;
      background-size: 250px;

      &:before {
        content: ' ';
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.03);
        top: 0;
      }

      .service {
        text-align: center;
        user-select: none;

        &:hover {
          svg {
            transform: translateY(-4px);
            box-shadow: 0 16px 32px rgba(247, 150, 93, 0.65);
          }
        }

        h3 {
          font-family: 'Playfair Display', sans-serif;
          font-weight: 600;
        }

        svg {
          display: block;
          margin: 0 auto 24px;
          font-size: 92px;
          padding: 14px;
          color: #fff;
          border-radius: 50%;
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
