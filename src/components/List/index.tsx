import React from 'react';
import { Ul } from './styles';
import Props from './interface';


const List: React.FC<Props> = ({ children }) => {
    return (
        <Ul>
            {children}
        </Ul>
    );
}

export default List;

