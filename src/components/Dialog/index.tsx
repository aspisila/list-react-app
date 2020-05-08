import React from 'react';
import { Container } from './styles';
import Paper from '../Paper';
import Toolbar from '../Toolbar';
import Button from '../Button/';
import Props from './interface';

const Dialog: React.FC<Props> = ({ ...props }) => {
    return (
        props.open ? (
            <Container>
                <Paper>
                    { props.children }
                    <Toolbar footer dialog>
                        <Button color='secondary'>
                            Save
                        </Button>
                        <Button onClick={() => props.onCancel()}>
                            Cancel
                        </Button>
                    </Toolbar>
                </Paper>
            </Container>
        ) : null
    );
}

export default Dialog;