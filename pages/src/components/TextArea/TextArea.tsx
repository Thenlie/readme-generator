import * as React from 'react';
import './style.css';

interface TextAreaProps {
    placeholder: string;
    name: string;
}

const TextArea = (props: TextAreaProps): JSX.Element => {
    return <textarea placeholder={props.placeholder} name={props.name}></textarea>;
};

export default TextArea;
