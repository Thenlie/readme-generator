import * as React from 'react';
import { TextArea, TextInput } from './components';

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
            </main>
            <footer>
                <p>© Created by Thenlie</p>
            </footer>
        </>
    );
};

export default App;
