import * as React from 'react';
import './style.css';

interface ButtonInputProps {
    content: string;
    name: string;
}

const Button = (props: ButtonInputProps): JSX.Element => {
    return <button name={props.name}>{props.content}</button>;
};

export default Button;
