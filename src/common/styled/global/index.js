import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body {
        background: tan;
    }

    #root{
        width: 750px;
        height: 100vh;
        margin: 0 auto;
        border: 1px solid red;
        position: relative;
        background: #fff;
    }



    // 공통 input
    input {
        width: 100%;
        border: 1px solid #aaa;
        padding: 0.7vw;
        border-radius: 0.3vw;
    }
`;

export default GlobalStyles;
