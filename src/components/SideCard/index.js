import React from 'react';
import { Container, Cutout } from '../SideCard/styled';
import Article from '../Article';
import im1 from '../img/justin-peralta-qRkImTcLVZU-unsplash.jpg';
import Paragraph from '../Paragraph'

const Card = ({ children }) => {

    return (
        <Container>
            <Cutout>
                <h1>{children}</h1>
            </Cutout>
            <Article odd={true}>
                <img id="img3"src={im1} alt='image3' />
                <p>Lorem Ipsum is simply dummy text, lorem Ipsum is simply dummy text.</p>
                
            </Article>
        </Container>
    )
}

export default Card