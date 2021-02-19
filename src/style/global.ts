import { createGlobalStyle } from 'styled-components';

import GitHubImage from '../images/github-background.svg';

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
}

body {
    background: #F0F0F5 url(${GitHubImage}) no-repeat 75% 0;
}

body, input, button {
    font: 16px 'Montserrat-Alternates', sans-serif;
}

#root {
    max-width: 968px;
    margin: 0 auto;
    padding: 40px 20px;
}

button {
    cursor: pointer;
}

`
