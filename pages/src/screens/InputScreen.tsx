import * as React from 'react';
import { useState } from 'react';
import { TextArea, TextInput, Button } from '../components';
import { generateMarkdown } from '../../../src/utils/generateMarkdown';
import { InputData } from '../../../src/types';
import { DropDown } from '../components/DropDown';

interface InputScreenProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
    setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const InputScreen = (props: InputScreenProps) => {
    const [title, setTitle] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    // const [license, setLicense] = useState<string>('');
    const [install, setInstall] = useState<string>('');
    const [usage, setUsage] = useState<string>('');
    const [testing, setTesting] = useState<string>('');
    const [contribution, setContribution] = useState<string>('');

    const licenseOptions = [
        'MIT',
        'BSD 2-Clause',
        'BSD 3-Clause',
        'Boost',
        'GNU LGPL',
        'GNU AGPL',
        'GNU GPL v2',
        'GNU GPL v3',
        'Mozilla',
        'Unlicense',
        'none',
    ];

    const handleSubmit = () => {
        const data: InputData = {
            title: title,
            email: email,
            user: username,
            license: 'MIT',
            description: description,
            install: install,
            usage: usage,
            contribution: contribution,
            test: testing,
        };

        const markdown = generateMarkdown(data);
        props.setMarkdown(markdown);
        props.setPage('output');
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
                <DropDown name='license' label='Project License' options={licenseOptions} />
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
