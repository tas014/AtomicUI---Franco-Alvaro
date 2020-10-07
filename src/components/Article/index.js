import React from 'react';
import { Container } from '../Article/styled';

const Article = ({ children, ...props }) => {
    return (
        <Container odd={props.odd}>
            {children}
        </Container>
    )
}

export default Article