import styled from 'styled-components'
import background from '../MainPage/background2.jpg';
/* background-image: url(${background});*/
const Main = styled.main`

    background-image: url(${background});
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    margin:none;

    #farp {
        color: white;
    font-family: 'Gugi',monospace;
    font-weight: 100;
    font-size: 2em;
    }

    #farp span{
        font-style: italic;
    color: orange;
    }
    
`

export default Main