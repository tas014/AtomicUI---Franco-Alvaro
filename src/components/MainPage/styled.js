import styled from 'styled-components'
import background from '../MainPage/background.gif'

const Main = styled.main`
    background-image: url(${background});
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    margin:none;

    & h1 {
        color:white
    }
`

export default Main