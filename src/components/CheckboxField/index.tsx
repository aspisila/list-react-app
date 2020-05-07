import React from 'react';
import { Container, ErrorBox } from './styles';

interface Props {
    label?: string;
    labelSeparator?: string;
}

const TextField: React.FC<Props> = ({ ...props }) => {
    return (
        <Container>
            <label>
                <input
                    type={'checkbox'}
                />
                { props.label }
            </label>
            {/*<ErrorBox>*/}
            {/*    Invalid value.*/}
            {/*</ErrorBox>*/}
        </Container>
    );
}

export default TextField;