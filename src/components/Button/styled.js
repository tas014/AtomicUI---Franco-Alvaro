import styled from 'styled-components';

const Btn = styled.button`
    color:${props => props.primary ? 'blue' : 'red'};
    font-style:${props => props.disabled ? 'oblique' : 'auto'};
`

export default Btn