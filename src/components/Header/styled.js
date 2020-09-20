import styled from 'styled-components'

const Header = styled.header`
    width: 10%;
    height:100vh;
    position:fixed;
    left:0;
    top:0;

    & div {
        height:20vh;
        background-color: #081135;
        display:flex;
        justify-content:center;
        align-items:center
    };

    & nav {
        height:80vh;
        background-color: #a4ecf7;
        display: flex;
        flex-direction:column;
    }

    & nav a {
        width:100%;
        padding: 5vh 0vh;
        text-align:center;
        color:#081135;
        text-decoration: none
    }

    & img {
        width: 5em;
    }

`

export default Header