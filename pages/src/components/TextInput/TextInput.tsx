import * as React from 'react';
import './style.css';

interface TextInputProps {
    placeholder: string;
    name: string;
}

const TextInput = (props: TextInputProps): JSX.Element => {
    return (
        <div className='text-input-container'>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <input type='text' placeholder={props.placeholder} name={props.name}></input>
        </div>
    );
};

export default TextInput;
