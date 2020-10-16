import styled from 'styled-components';
import background from '../img/drew-graham-14lr-KjoyDU-unsplash.jpg';

const Sliding = styled.article`
    
    width: 70%;
    position:absolute;
    left: ${props => props.isShown ? '0%' : '100%'};
    top:0px;
    -webkit-transition-property: left;
    -webkit-transition-duration: 1s;
    background-color:${props => props.color};
    z-index:1;

    div:first-of-type {
        display:flex;
        background-image:url(${background});
        
        height: 70vh;
        background-size: cover;
    }

    div img {
        margin: 3em;
        width:2em;
    }

    div:nth-of-type(2){
        background-color:black;
    }

    p {
        box-sizing: border-box;
        background-color:black;
        height: 10vh;
        font-size: 13px;
        color: orange;
        padding: 20px;
    }
    
`

export default Sliding