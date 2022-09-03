import { createGlobalStyle } from "styled-components";

export const BG_COLOR = {
    button: "#1f7d63",
    navbar: "#f7f7f7",
};

export const FONT_COLOR = {
    button: "#1f7d63",
};

export const FONT_SIZE = {
    nav: "16px",
};

export const BORDER = {
    button: "#1f7d63",
};

export const GlobalStyles = createGlobalStyle`
* {

    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    font-family: "Montserrat";

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(158, 158, 158, 0.5);
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(69, 69, 69, 0.7);
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(69, 69, 69, 1);
    }
}

html, body {
    width: 100vw;
    height: 100vh;
}

body {  
    & > #root {
        width: 100%;    
        height: 100%;
    }
}

body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

h1 {
    padding: 0;
    margin: 0;
}

#modal-root {
    position: absolute;
    top: 0;
    left: 0;
}
`;
