import React from 'react';
import { Container } from './styles';
import Props from './interface';


const Toolbar: React.FC<Props> = ({ ...props }) => {
    return (
        <Container
            footer={props.footer}
            dialog={props.dialog}
        >
            { props.children }
        </Container>
    );
}

export default Toolbar;