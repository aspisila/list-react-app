import React from 'react';
import { Ul, Table } from './styles';
import CheckboxField from '../CheckboxField';
import Toolbar from '../Toolbar';
import MenuButton from '../MenuButton';
import Button from '../Button';
import Content from '../Content';
import Dialog from '../Dialog';

const List: React.FC = ({ children }) => {
    return (
        <Ul>
            <li key={0}>
                <CheckboxField/>
                <Table>
                    <div>ID</div>
                    <div>Item</div>
                </Table>
                <MenuButton/>
            </li>
            <li key={0}>
                <CheckboxField/>
                <Table>
                    <div>ID</div>
                    <div>Item</div>
                </Table>
                <MenuButton/>
            </li>
            <li key={0}>
                <CheckboxField/>
                <Table>
                    <div>ID</div>
                    <div>Item</div>
                </Table>
                <MenuButton/>
            </li>
            <li key={0}>
                <CheckboxField/>
                <Table>
                    <div>ID</div>
                    <div>Item</div>
                </Table>
                <MenuButton/>
            </li>
        </Ul>
    );
}

export default List;