import styled from 'styled-components'

const Holder = styled.div`

    margin:5% auto;
    width:80%;
    position:relative;
    overflow:hidden;

    & > div:not(:nth-child(2)) {
        width:50%;
        height:80vh;
        display:flex;
        flex-direction:column;
        align-content:space-between;
    }

`

const Container = styled.article`
    @import url('https://fonts.google.com/specimen/Gugi?query=gugi');
    @import url('https://fonts.google.com/specimen/Poppins?query=popp');

    display:flex;
    justify-content:space-between;
  
    flex-direction:${props => props.odd ? 'row-reverse' : 'row'};
    margin-bottom:${props => props.odd ? '0px' : '5%'};

    

    img {
        width:${props => props.odd ? '30%' : '50%'};
        object-fit:cover;
        height:40vh;
        width: 50%;
    object-fit: cover;
    height: 30vh;
    margin-bottom: 23%;
    }

    p {
        box-sizing:border-box;
        width:${props => props.odd ? '70%' : '50%'};
        padding: 1em 0px 0px ${props => props.odd ? '1em' : '3em'};
        font-family:${props => props.odd ? 'Gugi, cursive;' : 'Poppins, sans-serif;'};
        color:white;
        font-size: 14px;
        box-sizing: border-box;
    width: 50%;
    padding: 1em 0px 0px 3em;
    font-family: Poppins,sans-serif;
    color: white;
    font-size: 13px;
    margin-top: 7%;
    }

`



export { Container, Holder }