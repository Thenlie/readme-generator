import * as React from 'react';
import { useState } from 'react';
import { TextArea, TextInput, Button } from '../components';
import { generateMarkdown } from '../../../src/utils/generateMarkdown';
import { InputData } from '../../../src/types';

const InputScreen = () => {
    const [title, setTitle] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [license, setLicense] = useState<string>('');
    const [install, setInstall] = useState<string>('');
    const [usage, setUsage] = useState<string>('');
    const [testing, setTesting] = useState<string>('');
    const [contribution, setContribution] = useState<string>('');

    const handleSubmit = () => {
        const data: InputData = {
            title: title,
            email: email,
            user: username,
            license: license,
            description: description,
            install: install,
            usage: usage,
            contribution: contribution,
            test: testing,
        };

        const markdown = generateMarkdown(data);
        console.log(markdown);
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <TextInput
                    placeholder='Project Title'
                    name='title'
                    value={title}
                    onChange={setTitle}
                />
                <TextInput
                    placeholder='GitHub Username'
                    name='username'
                    value={username}
                    onChange={setUsername}
                />
                <TextInput placeholder='Email' name='email' value={email} onChange={setEmail} />
                <TextArea
                    placeholder='Project Description'
                    name='description'
                    value={description}
                    onChange={setDescription}
                />
                <TextArea
                    placeholder='Installation Steps'
                    name='install'
                    value={install}
                    onChange={setInstall}
                />
                <TextArea
                    placeholder='Usage Instructions'
                    name='usage'
                    value={usage}
                    onChange={setUsage}
                />
                <TextArea
                    placeholder='Testing'
                    name='testing'
                    value={testing}
                    onChange={setTesting}
                />
                <TextArea
                    placeholder='Contributing'
                    name='contributing'
                    value={contribution}
                    onChange={setContribution}
                />
                <Button name='submit' type='submit' content='Generate Readme' />
            </form>
        </main>
    );
};

export default InputScreen;
