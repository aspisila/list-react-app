import React from 'react';
import { Container } from './styles';

const Paper: React.FC = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default Paper;