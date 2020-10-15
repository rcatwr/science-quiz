import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/kevin-cochran.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size:cover;
        margin: 0;
        padding: 0, 20px;
        display: flex;
        justify-content: center;

    }

    * {
        box-sizing: border-box;
        font-family: "Montserrat", serif;
    }


`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1, h3 {
        font-weight: 900;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;

    }

    h3 {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 1em;
        text-transform: uppercase;
        letter-spacing: 2px;
    }



    .start, .next {
        cursor: pointer;
        background: hsl(48, 100%, 67%);
        border: 2px solid #d38559;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 1em 2.5em;
        margin: 20px 0;
        font-weight: 900;
        text-transform: uppercase;
        
    }

    .start {
        max-width: 200px;
    }
`
