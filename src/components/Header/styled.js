import styled from 'styled-components'


const Header = styled.header`

@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

    width: 10%;
    height:100vh;
    position:fixed;
    left:0;
    top:0;
    margin: 0 auto;
    background-color:rgb(0 0 0 / 35%);
    

    div {
        height:13vh;
        display:flex;
        justify-content:center;
        align-items:center
    };

    nav {
        height:80vh;
        margin: 0 auto;
        display: flex;
        flex-direction:column;

    }

    nav a {
      
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

    nav a:nth-child(${props => { return props.Currentpage }}) {
        
        color:orange;
        border-radius:10px;
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


`

export default Header