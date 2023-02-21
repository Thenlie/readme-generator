import * as React from 'react';
import './style.css';

interface ButtonInputProps {
    content: string;
    name: string;
    type: 'button' | 'submit' | 'reset';
}

const Button = (props: ButtonInputProps): JSX.Element => {
    return (
        <button name={props.name} type={props.type}>
            {props.content}
        </button>
    );
};

export default Button;
