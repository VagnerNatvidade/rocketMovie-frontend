import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Roboto Slab", serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer; 
    transition: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(.9)
  }
`;
