import * as React from 'react';
import { InputScreen, OutputScreen } from './screens';
import { useState } from 'react';

const App = () => {
    const [page, setPage] = useState('input');
    const [markdown, setMarkdown] = useState('');

    return (
        <>
            <nav>
                <h1>Readme Generator!</h1>
                <button
                    onClick={() => {
                        switch (page) {
                            case 'input':
                                setPage('output');
                                break;
                            case 'output':
                                setPage('input');
                                break;
                        }
                    }}
                >
                    {page === 'input' ? 'Output' : 'Input'}
                </button>
                <p>🚧 Site currently under construction! 🚧</p>
            </nav>
            {page === 'input' && <InputScreen setPage={setPage} setMarkdown={setMarkdown} />}
            {page === 'output' && <OutputScreen markdown={markdown} />}
            <footer>
                <p>© Created by Thenlie</p>
                <a href='https://github.com/Thenlie/readme-generator'>
                    <img
                        src='github-mark.svg'
                        height={50}
                        width={50}
                        className='github-logo'
                        alt='View project on GitHub'
                    ></img>
                </a>
            </footer>
        </>
    );
};

export default App;
