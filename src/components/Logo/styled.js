
import styled from 'styled-components';

const Logo = styled.img`

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

export default Logo