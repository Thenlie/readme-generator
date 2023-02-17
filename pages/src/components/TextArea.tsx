import * as React from 'react';

interface TextAreaProps {
    placeholder: string;
    name: string;
}

const TextArea = (props: TextAreaProps): JSX.Element => {
    return <textarea placeholder={props.placeholder} name={props.name}></textarea>;
};

export default TextArea;
