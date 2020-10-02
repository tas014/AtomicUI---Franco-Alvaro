import React from 'react';
import Div from '../Quote/styled'


const Quote = ({ children, props }) => {
    const { type, primary, error } = props;

    <Div page={type} primary={primary} error={error}>{children}</Div>

}

export default Quote