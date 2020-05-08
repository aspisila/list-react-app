import React from 'react';
import { Container, Loading, Text } from './styles';
import Props from './interface';

const Paper: React.FC<Props> = ({ ...props }) => {
    return (
        props.show ? (
            <Container>
                <Loading/>
                <Text>Loading</Text>
            </Container>
        ) : null
    );
}

export default Paper;