import styled from 'styled-components';
import background from '../img/drew-graham-14lr-KjoyDU-unsplash.jpg';

const Sliding = styled.article`
    
    width:65%;
    position:absolute;
    left: ${props => props.isShown ? '0%' : '100%'};
    top:0px;
    -webkit-transition-property: left;
    -webkit-transition-duration: 2s;
    z-index:1;
    background-color:black;

    div {
        display:flex;
        background-image:url(${background});
        height:70vh;
    }

    div img {
        margin: 3em;
        width:2em;
    }

    p {
        box-sizing:border-box;
        padding:1em 0px 1em 3em;
        height:20vh;
        color:white;
    }
    
`

export default Sliding