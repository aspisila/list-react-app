import React from 'react';
import { MainPage } from './styles';
import Header from '../../components/Header';
import List from '../../components/List'
import Toolbar from "../../components/Toolbar";
import CheckboxField from "../../components/CheckboxField";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";

export default function Login() {
    return (
        <MainPage>
            <Header>
                Items List
            </Header>
            <Content>
                <Toolbar>
                    <CheckboxField label='Select All'/>
                </Toolbar>
                <List />
                <Toolbar footer>
                    <Button color='secondary'>
                        Delete Selected Items
                    </Button>
                    <Button>
                        Add New Item
                    </Button>
                </Toolbar>
                <Dialog>
                    test
                </Dialog>
            </Content>
        </MainPage>
    );
}