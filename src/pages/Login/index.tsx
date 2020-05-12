import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoginPage, LoginBgMask } from './styles';
import { AppState } from '../../store';
import Paper from '../../components/Paper';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import CheckboxField from '../../components/CheckboxField';
import * as UsersActions from '../../store/ducks/Users/actions';
import Mask from "../../components/Mask";

export default function Login() {
    const users = useSelector((state: AppState) => state.users);
    const dispatch = useDispatch();

    return (
        <LoginPage>
            <LoginBgMask>
                <Paper>
                    <h1>LOGIN</h1>
                    <div>
                        <div>
                            <TextField
                                label='Username'
                                name='username'
                                value={users.form?.username}
                                error={users.form?.errors?.username}
                                onUpdateForm={(field: any, value: any) => dispatch(UsersActions.updateForm(field, value))}
                                autoFocus
                            />
                        </div>
                        <div>
                            <TextField
                                label='Password'
                                name='password'
                                value={users.form?.password}
                                error={users.form?.errors?.password}
                                onUpdateForm={(field: any, value: any) => dispatch(UsersActions.updateForm(field, value))}
                                type='password'
                            />
                        </div>
                        <div>
                            <CheckboxField onChange={() => {}} label="Remember-me"/>
                        </div>
                        <Button onClick={() => dispatch(UsersActions.loginRequest())}>
                            Login
                        </Button>
                    </div>
                </Paper>
            </LoginBgMask>
            <Mask show={users.loading} />
        </LoginPage>
    );
}