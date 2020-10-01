import React from 'react';
import P from '../Paragraph/styled'

const Paragraph = ({ children, props }) => {
    const { page, highlighted } = props;

    return (
        <P page={page} highlighted={highlighted}>{children}</P>
    )
}

export default Paragraph;