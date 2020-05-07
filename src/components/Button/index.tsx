import React from 'react';
import { Button } from './styles';
import Props from './interface';

const Btn: React.FC<Props> = ({ ...props }) => {
    return (
        <Button color={props.color || 'primary'}>
            { props.children || props.text }
        </Button>
    );
}

export default Btn;