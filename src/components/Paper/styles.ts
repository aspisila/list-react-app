import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    box-shadow: 2px 2px 5px #333;
    padding: 20px; 
    border-radius: ${(props) => props.theme.defaults.borderRadius};
    min-width: 30%;
    overflow: hidden;
`;