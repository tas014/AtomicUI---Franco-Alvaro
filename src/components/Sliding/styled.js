import styled from 'styled-components';
import background from '../img/drew-graham-14lr-KjoyDU-unsplash.jpg';

const Sliding = styled.article`
    
    width: 70%;
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
        
    height: 70vh;
    background-size: cover;
    }

    div img {
        margin: 3em;
        width:2em;
    }

    p {
        box-sizing: border-box;
    
    height: 20vh;
    font-size: 13px;
    color: orange;
    padding: 20px;
    }
    
`

export default Sliding