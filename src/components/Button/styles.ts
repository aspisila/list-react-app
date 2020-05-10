import styled from 'styled-components';
import Props from './interface';

export const Button = styled.button<Props>`
    padding: 12px 15px;
    background: ${props => props.theme.colors[props.color || 'primary']};
    color: ${props => props.theme.colors[props.color === 'primary' ? 'primaryColor' : 'secondaryColor']};
    border: 0px;
    margin: 5px;
    cursor: pointer;
`;