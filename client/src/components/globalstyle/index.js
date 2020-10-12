import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Open Sans", Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size: 16px;
    transition: all 0.3s linear;
    height: 100%;
  }
  `;
