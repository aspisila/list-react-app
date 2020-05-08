import React, {useState, useEffect} from 'react';
import { Container } from './styles';

interface Props {
    label?: string;
    labelSeparator?: string;
    onChange?: any;
    name?: string | number;
    value?: string | number | boolean;
    checked?: boolean | undefined;
}

const TextField: React.FC<Props> = ({ ...props }) => {
    const [checked, setChecked] = useState(props.checked);

    useEffect(() => {
        setChecked(props.checked)
    }, [props.checked]);

    return (
        <Container>
            <label>
                <input
                    onClick={() => {}}
                    onChange={(e) => {setChecked(e.target.checked); props.onChange(e.target.checked, props.name)}}
                    type={'checkbox'}
                    checked={checked}
                />
                { props.label }
            </label>
        </Container>
    );
}

export default TextField;