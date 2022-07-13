import { createGlobalStyle } from 'styled-components';
import '@fontsource/arya';
import '@fontsource/sora';

const GlobalStyles = createGlobalStyle`
    *::before, *::after,h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: "Sora", sans-serif;
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
