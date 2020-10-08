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
    font-weight:bold;
    transition: 0.3s all;


    :active{
        border-radius: 5px;
    transition: 0.3s all;
    opacity: 0.7;
    }

    color:${props => props.disabled ? 'gray' : 'white'}; 
    cursor:${props => props.disabled ? 'no-drop' : 'crosshair'}; 
    font-style:${props => props.disabled ? 'oblique' : 'auto'};
    opacity:${props => props.disabled ? '0.5' : 'auto'};

    background-color:${props => props.disabled ? 'gray' : 'orange'};
    background-color:${props => props.error ? '#8a2323' : 'orange'};
    color:${props => props.error ? '#e4e4e4' : 'white'}; 
    cursor:${props => props.error ? 'help': ''};  
    
`

export default Btn