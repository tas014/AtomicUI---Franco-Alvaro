import styled from 'styled-components'

const Holder = styled.div`

    margin:10% auto;
    width:70%;
    position:relative;

`

const Container = styled.article`
    display:flex;
    justify-content:space-between;
    flex-direction:${props => props.odd ? 'row-reverse' : 'row'};
    height:auto; 

    img {
        width:${props => props.odd ? '30%' : '50%'}
    }

    p {
        box-sizing:border-box;
        width:${props => props.odd ? '70%' : '50%'};
        padding: 1em 0px 0px ${props => props.odd ? '1em' : '3em'};
        font-family:${props => props.odd ? 'tipografia 2' : 'tipografia 1'}
    }

`



export { Container, Holder }