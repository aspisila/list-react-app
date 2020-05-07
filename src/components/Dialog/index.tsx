import React from 'react';
import { Container } from './styles';
import Paper from '../Paper';
import Toolbar from '../Toolbar';
import Button from '../Button/';

const Dialog: React.FC = ({ children }) => {
    return (
        <Container>
            <Paper>
                { children }
                <Toolbar footer dialog>
                    <Button color='secondary'>
                        Save
                    </Button>
                    <Button>
                        Cancel
                    </Button>
                </Toolbar>
            </Paper>
        </Container>
    );
}

export default Dialog;