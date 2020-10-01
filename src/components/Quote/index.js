import React from 'react';

const Quote = ({ children, props,  }) => {
    const { type, primary, error } = props;

<Div primary={primary} error={error}>{children} </Div>

}

export default Quote
