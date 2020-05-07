import React from 'react';
import { Container } from './styles';

const MenuButton: React.FC = ({ children }) => {
    return (
        <Container>
            <span>...</span>
            <ul>
                <div><span/></div>
                <li>
                    Update
                </li>
                <li>
                    Delete
                </li>
            </ul>
        </Container>
    );
}

export default MenuButton;