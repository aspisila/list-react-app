import React from 'react';
import { LoginPage, LoginBgMask } from './styles';
import Paper from '../../components/Paper';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import CheckboxField from '../../components/CheckboxField';

export default function Login() {
    return (
        <LoginPage>
            <LoginBgMask>
                <Paper>
                    <h1>LOGIN</h1>
                    <div>
                        <div>
                            <TextField label='Email'/>
                        </div>
                        <div>
                            <TextField label='Password' type='password'/>
                        </div>
                        <div>
                            <CheckboxField label="Remember-me"/>
                        </div>
                        <Button>
                            Login
                        </Button>
                    </div>
                </Paper>
            </LoginBgMask>
        </LoginPage>
    );
}