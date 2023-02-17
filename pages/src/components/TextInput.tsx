import * as React from 'react';

interface TextInputProps {
    placeholder: string;
    name: string;
}

const TextInput = (props: TextInputProps): JSX.Element => {
    return <input type='text' placeholder={props.placeholder} name={props.name}></input>;
};

export default TextInput;
