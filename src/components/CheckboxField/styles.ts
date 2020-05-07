import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;

    input {
        padding: 8px 14px;
        margin-right: 10px;
    }
    
    input:focus {
      border: 2px solid #555;
    }
`;

export const ErrorBox = styled.div`
    height: 25px;
    color: #f00;
    font-weight: bold;
    padding: 5px 0px;
    margin-bottom: 5px;
`;