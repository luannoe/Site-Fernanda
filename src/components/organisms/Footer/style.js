import { css } from '@emotion/core';

export const FooterWrapper = ({ theme: { colors } }) => css`
  background: ${colors.secondaryAccent};
  padding: 92px 0 72px;
  color: #fff;

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
