import React from 'react';
import { SelectInput, SubmitInput, TextAreaInput, TextInput } from '../Input/styled'

const Input = ({ children, props }) => {
    const { type } = props;

    switch (type) {
        case 'text':
            return (<TextInput>{children}</TextInput>);

        case 'textArea':
            return (<TextAreaInput>{children}</TextAreaInput>);

        case 'submit':
            return (<SubmitInput>{children}</SubmitInput>);

        case 'select':
            return (<SelectInput>{children}</SelectInput>);
    }
}

export default Input