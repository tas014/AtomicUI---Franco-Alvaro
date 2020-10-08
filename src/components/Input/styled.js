import styled from 'styled-components';

const TextInput = styled.input.attrs({
    type: 'text',
    placeholder: 'hi...'
    
})`

padding: 5.5px;
    border: none;
    outline: none;
    font-size: 12px;
    background: none;
    width: 15%;
    border: 2px solid #ffffff70;
    margin-right: 15px;
    font-family: 'Poppins',sans-serif;
    color: orange;
    cursor: crosshair !important;
    transition:1s all;

    :focus{
        width: 20%;
        transition:1s all;
        border: 2px solid white;
    }
    :hover{
        transition:1s all;
        border: 2px solid white;
    }

`

const TextAreaInput = styled.textarea`
 font-family: 'Poppins', sans-serif;
margin: 0px;
    width: 91%;
    height: 80px;
    background: none;
    resize: none;
    outline: none;
    border: 2px solid #ffffff70;
    padding: 10px; 
    transition:1s all;
    color:white;
    font-size:12px;
    cursor: crosshair !important;

    :focus{
        border: 2px solid white;
        transition:1s all;
        padding: 30px; 
    }

    :hover{
        border: 2px solid white;
        transition:1s all;
    }
`

const SubmitInput = styled.input.attrs({
    type: 'submit',
})`

padding: 10px 20px;
    color: white;
    background: orange;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: bolder;
    margin: 0 auto;
    cursor: crosshair !important;
    margin-top: 1.5em;
    font-family: 'Gugi',monospace;
    transition: 0.3s all;

    :active{
       
        border-radius: 5px;
    transition: 0.3s all;
    opacity: 0.7;
    
    }
`

const SelectInput = styled.select`
     width: auto;
    padding: 8px;
    margin: 20px;
    margin-left: 0px;
    border: none;
    color: orange;
    background: none !important;
    border: 1px solid white;
    font-weight: 600;
    outline: none;
    font-family: 'Gugi',monospace;
    cursor: crosshair;
    transition: 1s all;

    option {
        width: 100%;
        transition: 1s all;
        background: #ffffff00 !important;
    border: 1px solid white;
    padding: 1em;
    outline: none;
    border: none;
    color: orange;
    padding: 20px !important;
    border-radius: 6px;
    margin: 20px;
    font-family: 'Gugi',monospace;
    cursor: crosshair !important;
    }

`

export { SelectInput, SubmitInput, TextAreaInput, TextInput }