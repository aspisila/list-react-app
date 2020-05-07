import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryColor};
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;