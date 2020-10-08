import React from 'react';
import { Container, Cutout } from '../SideCard/styled';
import Article from '../Article';
import im1 from '../img/justin-peralta-qRkImTcLVZU-unsplash.jpg';

const Card = ({ children }) => {

    return (
        <Container>
            <Cutout>
                <h1>{children}</h1>
            </Cutout>
            <Article odd={true}>
                <img src={im1} alt='image3' />
                <p>Why hello there saxy</p>
            </Article>
        </Container>
    )
}

export default Card