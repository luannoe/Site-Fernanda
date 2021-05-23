import { css } from '@emotion/core';

export const ContentWrapper = ({ hasHeader }) => css`
  padding-top: ${hasHeader ? 78 : 0}px;
`;

export default ContentWrapper;
