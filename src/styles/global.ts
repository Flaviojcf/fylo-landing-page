import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
 
 
  }

  body {
    -webkit-font-smoothing: antialiased;    
    background: ${(props) => props.theme.colors["Dark-Blue-main"]};
  }
  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  header {
    font-family: 'Raleway', sans-serif;
    font-weight: 400, 700;
  }


`;
