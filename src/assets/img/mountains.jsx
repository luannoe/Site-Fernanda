import React from 'react';
import { css } from '@emotion/core';

const Mountains = ({ color }) => {
  return (
    <div css={SvgWrapper}>
      <svg
        fill={color || '#fff'}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        viewBox='0 0 1000 300'
        preserveAspectRatio='none'
      >
        <path d='M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z' />
        <path d='M -302 55 s 235.27 208.25 352 159 c 128 -54 233 -98 303 -73 c 92.68 33.1 181.28 115.19 235 108 c 104.9 -14 176.52 -173.06 267 -118 c 85.61 52.09 145 123 145 123 v 74 l -1306 10 z' />
        <path d='M -286 255 s 214 -103 338 -129 s 203 29 384 101 c 145.57 57.91 178.7 50.79 272 0 c 79 -43 301 -224 385 -63 c 53 101.63 -62 129 -62 129 l -107 84 l -1212 12 z' />
        <path d='M -24 69 s 299.68 301.66 413 245 c 8 -4 233 2 284 42 c 17.47 13.7 172 -132 217 -174 c 54.8 -51.15 128 -90 188 -39 c 76.12 64.7 118 99 118 99 l -12 132 l -1212 12 z' />
        <path d='M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z' />{' '}
      </svg>
    </div>
  );
};

export default Mountains;

// CSS
const SvgWrapper = css`
  margin-top: -175px;
  height: 192px;
  width: 100%;
  position: relative;
  z-index: 9;

  svg {
    height: 180px;
    width: 100%;

    path {
      &:first-of-type {
        opacity: 0.1;
      }

      &:nth-of-type(2) {
        opacity: 0.12;
      }

      &:nth-of-type(3) {
        opacity: 0.28;
      }

      &:nth-of-type(4) {
        opacity: 0.43;
      }
    }
  }
`;
