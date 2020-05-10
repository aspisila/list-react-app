import React from 'react';
import { Container } from './styles';

const MenuButton: React.FC = ({ children }) => {
    return (
        <Container>
            <span>...</span>
            {children}
        </Container>
    );
}

export default MenuButton;