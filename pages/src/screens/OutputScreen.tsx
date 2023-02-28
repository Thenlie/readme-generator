import MDEditor from '@uiw/react-md-editor';
import * as React from 'react';
import { useState } from 'react';

interface OutputScreenProps {
    markdown: string;
}

const OutputScreen = (props: OutputScreenProps) => {
    const [markdown, setMarkdown] = useState(props.markdown);

    return (
        <main>
            <p>Output Screen</p>
            <MDEditor value={markdown} onChange={setMarkdown} />
        </main>
    );
};

export default OutputScreen;
