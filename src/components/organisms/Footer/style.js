import { css } from '@emotion/core';

export const FooterWrapper = ({ theme: { colors } }) => css`
  text-align: center;
  margin-top: -14px;
  position: relative;
  background: ${colors.secondary}
    linear-gradient(0, ${colors.secondaryAccentDarker}, ${colors.secondary});
  padding: 48px 16px 32px;
  color: #fff;

  @media (min-width: 768px) {
    padding: 72px 0 72px;
  }

  h3 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: white;
      color: ${colors.secondaryAccentDarker};
      border-radius: 24px;
      font-size: 24px;
      margin: 0 5px;
    }
  }
`;

export default FooterWrapper;
