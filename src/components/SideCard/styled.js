import styled from 'styled-components';
import background from '../img/ameer-basheer-2r5adxul49E-unsplash.jpg';

const Cutout = styled.div`

    background-image:url(${background});
    background-size:cover;
    display:flex;
    justify-content:flex-end;
    align-content:flex-end;
    height:60vh;

    h1 {
        rotate:270deg;
        margin-bottom:2em;
        color:white;
        height:1em;
        font-size:3em;
        justify-self:flex-end;
        align-self: flex-end;
    }

`

const Container = styled.div`

    width:30%;
    height:80vh;
    background-color:black;
    position: absolute;
    left:70%;
    top:0%;
    z-index:2;

    &:hover{
        cursor:pointer;
    }


`

export { Container, Cutout }