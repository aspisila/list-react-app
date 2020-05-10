import React, { useState } from 'react';
import { Container, ErrorBox } from './styles';

interface Props {
    label?: string;
    labelSeparator?: string;
    type?: 'text' | 'email' | 'password';
    name?: string;
    value?: string;
    onUpdateForm?: any;
    error?: boolean | string | null | undefined;
    autoFocus?: boolean
}

const TextField: React.FC<Props> = ({ ...props }) => {
    const [value, setValue] = useState(props.value);

    return (
        <Container>
            <label>
                <div>
                    { props.label }{props.labelSeparator || ':'}
                </div>
                <input
                    type={props.type || 'text'}
                    onChange={(e) => {setValue(e.target.value); props.onUpdateForm(props.name, e.target.value)}}
                    value={value || ''}
                    autoFocus={props.autoFocus}
                />
            </label>
            <ErrorBox>
                {props.error}
            </ErrorBox>
        </Container>
    );
}

export default TextField;