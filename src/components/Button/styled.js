import styled from 'styled-components';

const Btn = styled.button`
font-family: 'Gugi',monospace;
    
    color: white;
    font-style: auto;
    padding: 10px 30px;
    font-style: auto;
    border: none;
    outline: none;
    color:white;
    margin-right: 20px;

    color:${props => props.disabled ? 'gray' : 'white'}; 
    cursor:${props => props.disabled ? 'no-drop' : 'crosshair'}; 
    font-style:${props => props.disabled ? 'oblique' : 'auto'};
    opacity:${props => props.disabled ? '0.7' : 'auto'};

    background-color:${props => props.disabled ? 'gray' : 'orange'};
    color:${props => props.error ? 'red' : 'white'}; 
    /* cursor:${props => props.error ? 'help' : 'default'};  */
    font-weight:${props => props.error ? 'bold' : 'auto'};
`

export default Btn