import styled from 'styled-components'


const Header = styled.header`

@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

    width: 10%;
    height:100vh;
    position:fixed;
    left:0;
    top:0;
    margin: 0 auto;
    

    & div {
        height:20vh;
        display:flex;
        justify-content:center;
        align-items:center
    };

    & nav {
        height:80vh;
        margin: 0 auto;
        display: flex;
        flex-direction:column;

    }

    & nav a {
      
        text-align: center;
    margin-top: 5em;
    margin-bottom: 5em;
    color: white;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    padding: 30px;
    transform: rotate(-90deg);
    font-size: 13px;
    font-family: 'Major Mono Display',monospace;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    font-weight: bold;

    }

    nav a:hover{
        color: orange;
    font-weight: bold;
    -webkit-transition: 1s;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    cursor: crosshair;
    
    border-top: 1px solid;
    border-radius: 1em;
    
    }

    nav a:active{
     opacity:0.6;
    }


    & img {
        width: 1em;
    color: azure;
    background: white;
    padding: 8px;
    transition:0.3s;

    }

    & img:hover{
        border-radius: 6px;
        cursor:pointer;
        transition:0.3s;
    }

`

export default Header