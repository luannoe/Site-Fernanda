import { css } from '@emotion/core';

export const FooterWrapper = ({ theme: { colors } }) => css`
  margin-top: -14px;
  position: relative;
  background: ${colors.secondary}
    linear-gradient(0, ${colors.secondaryAccentDarker}, ${colors.secondary});
  padding: 48px 16px 32px;
  color: #fff;

  @media (min-width: 768px) {
    padding: 92px 0 72px;
  }

  h3 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: 600;
    margin-bottom: 24px;
  }

  ul {
    padding: 0;

    li {
      list-style: none;
    }
  }
`;

export default FooterWrapper;
