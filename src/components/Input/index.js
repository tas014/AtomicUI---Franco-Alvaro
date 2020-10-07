import React from 'react';
import { SelectInput, SubmitInput, TextAreaInput, TextInput } from '../Input/styled'

const Input = ({ children, ...props }) => {
    const { type, text } = props;

    switch (type) {
        case 'text':
            return (<TextInput placeholder={text}></TextInput>);

        case 'textArea':
            return (<TextAreaInput placeholder={text}></TextAreaInput>);

        case 'submit':
            return (<SubmitInput value={text}></SubmitInput>);

        case 'select':
            return (<SelectInput>{children}</SelectInput>);
    }
}

export default Input