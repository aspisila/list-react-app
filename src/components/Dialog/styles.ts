import styled from 'styled-components';
import Props from './interface';

export const Container = styled.div<Props>`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    
    h2 {
        text-align: center;
    }        
`;