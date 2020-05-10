import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { MainPage } from './styles';
import Header from '../../components/Header';
import List from '../../components/List'
import Toolbar from "../../components/Toolbar";
import CheckboxField from "../../components/CheckboxField";
import Content from "../../components/Content";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";
import TextField from "../../components/TextField";
import * as ItemsActions from '../../store/ducks/Items/actions';
import { AppState } from '../../store';
import {Table} from "../../components/List/styles";
import MenuButton from "../../components/MenuButton";
import Mask from "../../components/Mask";

export default function Login() {
    const items = useSelector((state: AppState) => state.items);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ItemsActions.loadRequest());
    }, [dispatch])

    return (
        <MainPage>
            <Header>
                Items List
            </Header>
            <Content>
                {/*//TODO: create component*/}
                {items.error && items.msgAlert ? alert(items.msgAlert) : null}
                <Toolbar>
                    <CheckboxField
                        label='Select All'
                        checked={items.allSelected}
                        onChange={(selected: boolean) => dispatch(ItemsActions.selectAll(selected))}
                    />
                </Toolbar>
                <List>
                    {items.data.map((item, idx) => (
                        <li key={item.id}>
                            <CheckboxField
                                name={item.id}
                                onChange={(selected: boolean, id: string) => dispatch(ItemsActions.selectItem(id, selected))}
                                checked={items.selected.includes(item.id)}
                            />
                            <Table>
                                {width > 350 ? <div>{item.id}</div> : null}
                                <div>{item.employee_name}</div>
                            </Table>
                            <MenuButton>
                                <ul>
                                    <div><span/></div>
                                    <li onClick={() => dispatch(ItemsActions.editItem(item))}>
                                        Update
                                    </li>
                                    <li onClick={() => dispatch(ItemsActions.deleteRequest(item))}>
                                        Delete
                                    </li>
                                </ul>
                            </MenuButton>
                        </li>
                    ))}
                </List>
                <Toolbar footer>
                    <Button
                        disabled={!items.selected.length}
                        color='secondary'
                        onClick={() => dispatch(ItemsActions.deleteAllRequest())}
                    >
                        {width > 350 ? 'Delete Selected Items' : 'Del Selected'}
                    </Button>
                    <Button onClick={() => dispatch(ItemsActions.addNew())}>
                        {width > 350 ? 'Add New Item' : 'Add'}
                    </Button>
                </Toolbar>
                <Dialog
                    open={items.adding}
                    onCancel={() => dispatch(ItemsActions.cancelForm())}
                    onSave={() => dispatch(ItemsActions.saveForm())}
                >
                    <div>
                        <h2>{items.form?.id ? 'Update' : 'Add'} Item</h2>
                        <div>
                            <TextField
                                label='Name'
                                name='employee_name'
                                value={items.form?.employee_name}
                                error={items.form?.errors?.employee_name}
                                onUpdateForm={(field: any, value: any) => dispatch(ItemsActions.updateForm(field, value))}
                                autoFocus
                            />
                        </div>
                    </div>
                </Dialog>
            </Content>
            <Mask show={items.loading} />
        </MainPage>
    );
}