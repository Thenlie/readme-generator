import * as React from 'react';
import './style.css';

interface DropDownProps {
    name: string;
    options: string[];
}

const DropDown = (props: DropDownProps) => {
    return (
        <select name='license-select'>
            {props.options.map((opt) => (
                <option>{opt}</option>
            ))}
        </select>
    );
};

export { DropDown };
