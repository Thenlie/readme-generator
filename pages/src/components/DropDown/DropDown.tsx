import * as React from 'react';
import './style.css';

interface DropDownProps {
    name: string;
    label: string;
    options: string[];
}

const DropDown = (props: DropDownProps) => {
    return (
        <div className='drop-down-container'>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} id={props.name}>
                {props.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
};

export { DropDown };
