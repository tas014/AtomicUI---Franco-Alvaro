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
        transform: rotate(-90deg);
        margin-bottom:1.5em;
        color:white;
        height:1em;
        font-size:3.5em;
        justify-self:flex-end;
        align-self: flex-end;
        font-family: 'Gugi',monospace;
        
    }


`

const Container = styled.div`

width: 24%;
    height: 80vh;
    background-color: black;
    position: absolute;
    left: 76%;
    top: 0%;
    z-index: 2;

    &:hover{
        cursor:crosshair;
    }


    #img3{
        width: 30%;
    object-fit: cover;
    height: 40vh;
    width: 30%;
    object-fit: cover;
    height: 20vh;
    margin-bottom: 23%;
    }

    p{
        box-sizing: border-box;
    color: white;
    font-size: 14px;
    box-sizing: border-box;
    font-family: Poppins,sans-serif;
    color: white;
    font-size: 13px;
    width: 50%;
    margin-top: 10%;
}
    
`

export { Container, Cutout }