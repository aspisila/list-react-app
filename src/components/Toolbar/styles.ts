import styled from 'styled-components';
import Props from './interface';

export const Container = styled.div<Props>`
    background-color: ${(props) => props.footer ? props.theme.colors.default : props.theme.colors.secondary};
    color: ${(props) => props.footer ? props.theme.colors.color : props.theme.colors.secondaryColor};
    display: flex;
    padding: ${(props) => props.footer ? '10px 20px' : '20px'};
    justify-content: ${(props) => props.footer ? 'flex-end' : 'flex-start'};
    margin:  ${(props) => props.dialog ? '0 -20px -20px' : '0'};
`;