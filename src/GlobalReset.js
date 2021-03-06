import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        outline: none;
    }

    html {
        /* colors */
       --very-dark-blue: hsl(243, 87%, 12%);
       --desaturated-blue: hsl(238, 22%, 44%);
       --bright-blue: hsl(224, 93%, 58%);
       --moderate-cyan: hsl(170, 45%, 43%);
       --light-grayish-blue: hsl(240, 75%, 98%);
       --light-gray: hsl(0, 0%, 75%);
        /* padding */
       --safe-area-padding: 0 25px 0 25px;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Open Sans', sans-serif;
    }

    button {
        cursor: pointer;
    }

`;

export default GlobalReset;
