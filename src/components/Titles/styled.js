import styled from 'styled-components';

const H1 = styled.h1`

span{
        font-style: italic;
        color: orange;
    }

    font-size:3em;
    color:${props => props.primary ? 'red' : 'white'};
    font-family: 'Gugi',monospace;
    font-weight: 100;
    

`

const H2 = styled.h2`

    font-size:2em;
    color:${props => props.primary ? 'red' : 'white'};
    font-family: 'Gugi',monospace;
    font-weight: 100;
    span{
        font-style: italic;
        color: orange;
    }
`

const H3 = styled.h3`

    font-size:1.5em;
    color:${props => props.primary ? 'red' : 'white'};
    font-family: 'Gugi',monospace;
    font-weight: 100;
    span{
        font-style: italic;
        color: orange;
    }

`

const H4 = styled.h4`

    font-size:1.5em;
    color:${props => props.primary ? 'red' : 'white'};
    font-family: 'Gugi',monospace;
    font-weight: 100;
    span{
        font-style: italic;
        color: orange;
    }

`

const H5 = styled.h5`

    font-size:1.3em;
    color:${props => props.primary ? 'red' : 'white'};
    font-family: 'Gugi',monospace;
    font-weight: 100;
    span{
        font-style: italic;
        color: orange;
    }

`

const H6 = styled.h6`

    font-size:1.1em;
    color:${props => props.primary ? 'red' : 'white'};
    font-family: 'Gugi',monospace;
    font-weight: 100;
    span{
        font-style: italic;
        color: orange;
    }

`

export { H1, H2, H3, H4, H5, H6 }