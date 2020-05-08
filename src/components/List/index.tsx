import React from 'react';
import { Ul, Table } from './styles';
import CheckboxField from '../CheckboxField';
import MenuButton from '../MenuButton';
import Props from './interface';


const List: React.FC<Props> = ({ children }) => {
    return (
        <Ul>
            {children}
        </Ul>
    );
}

export default List;

