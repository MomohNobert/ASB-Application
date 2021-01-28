import { createGlobalStyle } from 'styled-components';

import SansRegular from './fonts/ProductSans-Regular.ttf';
import SansMedium from './fonts/ProductSans-Medium.ttf';
import SansBold from './fonts/ProductSans-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GoogleSans';
    src: url(${SansRegular}) format('truetype');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'GoogleSans';
    src: url(${SansMedium}) format('truetype');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'GoogleSans';
    src: url(${SansBold}) format('truetype'),;
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }

  * {
    margin: 0;
    border: 0;
    outline: none;
    font-family: 'GoogleSans';
    font-display: block;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overflow-x: hidden;
    font-family: 'GoogleSans';
    background: rgba(0,0,0,0.01);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10%;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: green;
  }
`;