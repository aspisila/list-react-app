import styled from 'styled-components';

export const Ul = styled.ul`
    list-style: none;
    flex: 1;
    
    li {
        background: #fff;
        padding: 20px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;  
    }
    
    li:hover {
        background-color: ${(props) => props.theme.colors.basic};
        color: ${(props) => props.theme.colors.secondaryColor};
    }
`;

export const Table = styled.div`
    flex: 1;
    padding: 0 20px;
    display: flex;
    
    div:first-child {
        max-width: 50px;
    }
    
    div {
        flex: 1;
        text-align: left;
        align-self: center;
    }
`;