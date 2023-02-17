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
                <div>
                    <TextInput placeholder='Title' name='title' />
                    <TextInput placeholder='Username' name='username' />
                    <TextInput placeholder='Email' name='email' />
                </div>
                <TextArea placeholder='Description' name='description' />
                <TextArea placeholder='Installation' name='install' />
                <TextArea placeholder='Usage' name='usage' />
                <TextArea placeholder='Testing' name='install' />
            </main>
            <footer>
                <p>© Created by Thenlie</p>
            </footer>
        </>
    );
};

export default App;
