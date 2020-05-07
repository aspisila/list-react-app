import React from 'react';
import { Container, ErrorBox } from './styles';

interface Props {
    label?: string;
    labelSeparator?: string;
    type?: 'text' | 'email' | 'password';
}

const TextField: React.FC<Props> = ({ ...props }) => {
    return (
        <Container>
            <label>
                <div>
                    { props.label }{props.labelSeparator || ':'}
                </div>
                <input
                    type={props.type || 'text'}
                />
            </label>
            <ErrorBox>
                Invalid value.
            </ErrorBox>
        </Container>
    );
}

export default TextField;