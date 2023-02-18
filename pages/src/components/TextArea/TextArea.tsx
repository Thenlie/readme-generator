import * as React from 'react';
import './style.css';

interface TextAreaProps {
    placeholder: string;
    name: string;
}

const TextArea = (props: TextAreaProps): JSX.Element => {
    return (
        <div className='text-area-container'>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <textarea placeholder={props.placeholder} name={props.name} rows={3}></textarea>
        </div>
    );
};

export default TextArea;
