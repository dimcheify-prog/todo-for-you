import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    html {
      font-family: 'Inter', sans-serif;
      font-size: 62.5%;
    }
`;