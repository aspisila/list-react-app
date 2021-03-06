import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html,
    body,
    #root {
        height: 100%;
    }
    
    body {
        background-color: #f5f5f5;
        color: ${(props) => props.theme.colors.color};
        font-size: 14px;
    }
    
    * {
        font-family: sans-serif;
    }
`;