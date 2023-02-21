import * as React from 'react';
import { InputScreen } from './screens';

const App = () => {
    return (
        <>
            <nav>
                <h1>Readme Generator!</h1>
                <p>🚧 Site currently under construction! 🚧</p>
            </nav>
            <InputScreen />
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
