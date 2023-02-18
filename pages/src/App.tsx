import * as React from 'react';
import { TextArea, TextInput } from './components';
import Button from './components/Button/Button';

const App = () => {
    return (
        <>
            <nav>
                <h1>Readme Generator!</h1>
                <p>🚧 Site currently under construction! 🚧</p>
            </nav>
            <main>
                <TextInput placeholder='Project Title' name='title' />
                <TextInput placeholder='GitHub Username' name='username' />
                <TextInput placeholder='Email' name='email' />
                <TextArea placeholder='Project Description' name='description' />
                <TextArea placeholder='Installation Steps' name='install' />
                <TextArea placeholder='Usage Instructions' name='usage' />
                <TextArea placeholder='Testing' name='testing' />
                <Button name='submit' content='Generate Readme' />
            </main>
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